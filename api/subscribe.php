<?php
require_once("conf.php");
//require_once("authvalidate.php");

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success"=>false,"message"=>"Method not allowed"]);
    exit;
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


$user_id = trim($raw['user_id'] ?? '');
$course_id = trim($raw['course_id'] ?? '');

$db = getDB();

$ref_id = "NM".time().rand(1000,9999);

$stmt = $db->prepare("
INSERT INTO subscriptions (user_id,course_id,subscription_reference_id)
VALUES (?,?,?)
");

$stmt->bind_param("sss",$user_id,$course_id,$ref_id);
$stmt->execute();

echo json_encode([
    "subscription_registration_status"=>true,
    "subscription_reference_id"=>$ref_id
]);
?>