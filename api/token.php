<?php
include("conf.php");

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success"=>false,"message"=>"Method not allowed"]);
    exit;
}

function generateToken($payload) {
    $header  = base64_encode(json_encode(["alg" => "HS256", "typ" => "JWT"]));
    $payload = base64_encode(json_encode($payload));
    $sig     = base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
    return "$header.$payload.$sig";
}


$raw = $_POST;

if (empty($raw)) {
    $input = file_get_contents("php://input");
    $raw = json_decode($input, true);
}


if (empty($raw)) { 
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON format"]);
    exit;
}   


$client_key    = trim($raw['client_key'] ?? '');
$client_secret = trim($raw['client_secret'] ?? '');

if(empty($client_key) || empty($client_secret)){
    http_response_code(400);
    echo json_encode(["success"=>false,"message"=>"client_key and client_secret required"]);
    exit;
}

if($client_key !== NM_CLIENT_KEY || $client_secret !== NM_CLIENT_SECRET){
    http_response_code(401);
    echo json_encode(["success"=>false,"message"=>"Invalid credentials"]);
    exit;
}

$expiry  = time() + TOKEN_EXPIRY;

$payload = [
    "client"=>"naanmudhalvan",
    "exp"=>$expiry
];

$token = generateToken($payload);

echo json_encode([
    "success"=>true,
    "access"=>$token,
    "refresh"=>$token
]);
?>