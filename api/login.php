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

$raw=$_POST;
if (empty($raw)) { 
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON format"]);
    exit;
}       

$email = trim($raw['email'] ?? '');
$pass  = $raw['password'] ?? '';
$ip    = $_SERVER['REMOTE_ADDR'];
$ua    = $_SERVER['HTTP_USER_AGENT'] ?? '';


$db = getDB();

$stmt = $db->prepare("
    SELECT u.id, u.full_name, u.email, u.password_hash, u.is_active, u.is_email_verified, r.name as role
    FROM users u JOIN roles r ON u.role_id = r.id
    WHERE u.email = ?
");

$stmt->bind_param("s", $email);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();

if(!$user || !password_verify($pass, $user['password_hash'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Invalid email or password"]);
    exit;
}



function generateToken($payload) {
    $header  = base64_encode(json_encode(["alg" => "HS256", "typ" => "JWT"]));
    $payload = base64_encode(json_encode($payload));
    $sig     = base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
    return "$header.$payload.$sig";
}

function verifyToken($token) {
    $parts = explode('.', $token);
    if (count($parts) !== 3) return false;
    [$header, $payload, $sig] = $parts;
    $expectedSig = base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
    if (!hash_equals($expectedSig, $sig)) return false;
    $data = json_decode(base64_decode($payload), true);
    if ($data['exp'] < time()) return false;
    return $data;
}

$expiry  = time() + TOKEN_EXPIRY;
$payload = ["user_id" => $user['id'], "email" => $user['email'], "role" => $user['role'], "exp" => $expiry];
$token   = generateToken($payload);
$expDT   = date('Y-m-d H:i:s', $expiry);


echo json_encode([
    "success" => true,
    "message" => "Login successful",
    "token"   => $token,
    "expires_at" => $expDT,
    "user"    => [
        "id"        => $user['id'],
        "full_name" => $user['full_name'],
        "email"     => $user['email'],
        "role"      => $user['role']
    ]
]);
?>