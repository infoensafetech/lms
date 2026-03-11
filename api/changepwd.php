<?php
include("conf.php");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}  

$db = getDB();

$raw = $_POST;
if (empty($raw)) { 
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON format"]);
    exit;
}

function verifyToken($token){
    $parts = explode('.', $token);
    if (count($parts) !== 3) return false;
    [$header, $payload, $sig] = $parts;
    $expectedSig = base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
    if (!hash_equals($expectedSig, $sig)) return false;
    return json_decode(base64_decode($payload), true);
}

$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? apache_request_headers()['Authorization'] ?? '';
$token = '';
if (preg_match('/Bearer\s+(.+)/i', $authHeader, $matches)) {
    $token = trim($matches[1]);
}

if (!$token) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Authorization token is required."]);
    exit;
}


if (!$token || !($userData = verifyToken($token))) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
    exit;
}       
$userId = $raw['userid'];
$oldPass = $raw['oldPassword'] ?? '';
$newPass = $raw['newPassword'] ?? '';      

$stmt = $db->prepare("SELECT password_hash FROM users WHERE id = ?");
$stmt->bind_param("i", $userId);            
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();
if (!$result || !password_verify($oldPass, $result['password_hash'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Old password is incorrect"]);
    exit;
}
$newHash = password_hash($newPass, PASSWORD_DEFAULT);
$stmt = $db->prepare("UPDATE users SET password_hash = ? WHERE id = ?");
$stmt->bind_param("si", $newHash, $userId);
if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Password changed successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to change password"]);
}

?>


