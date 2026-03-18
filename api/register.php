<?php
include("conf.php");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}



//$raw = json_decode(file_get_contents("php://input"), true);
$raw=$_POST;

if (empty($raw)) {
    $input = file_get_contents("php://input");
    $raw = json_decode($input, true);
}


if (empty($raw)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON format"]);
    exit;
}
//below is for json format 
/*
if (!is_array($raw)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON format"]);
    exit;
}*/


$fullName   = trim($raw['fullName']   ?? '');
$email      = strtolower(trim($raw['email']      ?? ''));
$password   = $raw['password']   ?? '';
$role       = strtolower(trim($raw['role'] ?? 'student'));

//echo $fullName." ".$email." ".$password." ";

$db = getDB();
$stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    http_response_code(409);
    echo json_encode([
        "success" => false,
        "message" => "An account with this email already exists.",
        "errors"  => ["email" => "Email is already registered."]
    ]);
    $stmt->close();
    $db->close();
    exit;
}
$stmt->close();


$stmt = $db->prepare("SELECT id FROM roles WHERE name = ?");
$stmt->bind_param("s", $role);
$stmt->execute();
$res    = $stmt->get_result();
$roleRow = $res->fetch_assoc();
$stmt->close();

$roleId = $roleRow['id'];
$is_email_verified = 0;
$is_active = 1;
$passwordHash    = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
//echo $fullName." ".$email." ".$password." ".$passwordHash." ";
$stmt = $db->prepare("
    INSERT INTO users (role_id, full_name, email, password_hash, is_active,is_email_verified)
    VALUES (?, ?, ?, ?, ?, ?)
");

$stmt->bind_param("isssii", $roleId, $fullName, $email, $passwordHash,$is_active,$is_email_verified);

if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Registration failed. Please try again."]);
    $stmt->close();
    $db->close();
    exit;
}

$newUserId = $db->insert_id;
$stmt->close();
$db->close();

http_response_code(200);
echo json_encode([
    "success"        => true,
    "message"        => "Registration successful!",
    "email"     => $email,
   
    "user" => [
        "id"        => $newUserId,
        "full_name" => $fullName,
        "email"     => $email,
        "role"      => $role
    ]
]);

?>