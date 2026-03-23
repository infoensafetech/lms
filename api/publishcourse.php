<?php
include("conf.php");

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success"=>false,"message"=>"POST method required"]);
    exit;
}

// Support all input types
$raw = $_POST;
if (empty($raw)) {
    $input = file_get_contents("php://input");
    $raw = json_decode($input, true);
}

$course_code = $raw['course_unique_code'] ?? 'TEST101';

// STEP 1: Get Token
function getNMToken() {

    $ch = curl_init();

    curl_setopt_array($ch, [
        CURLOPT_URL => NM_SANDBOX_URL."/api/v1/lms/client/token/",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ["Content-Type: application/json"],
        CURLOPT_POSTFIELDS => json_encode([
            "client_key" => NM_CLIENT_KEY,
            "client_secret" => NM_CLIENT_SECRET
        ])
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    $res = json_decode($response, true);
    return $res['access_token'] ?? null;
}

$token = getNMToken();

if (!$token) {
    echo json_encode(["success"=>false,"message"=>"Failed to get token"]);
    exit;
}

// STEP 2: Publish Course
$data = [
    "course_unique_code"=>$course_code,
    "course_name"=>"Test Course",
    "course_description"=>"Test Description",
    "course_image_url"=>"https://dummyimage.com/600x400",
    "instructor"=>"Srinath",
    "duration"=>120,
    "number_of_videos"=>10,
    "language"=>"english",
    "main_stream"=>"engineering",
    "sub_stream"=>"cse",
    "category"=>"test",
    "system_requirements"=>"basic",
    "has_subtitles"=>"true",
    "reference_id"=>"REF001",
    "course_type"=>"ONLINE",
    "location"=>"",
    "course_content"=>[
        ["content"=>"Intro"],
        ["content"=>"Basics"]
    ],
    "course_objective"=>[
        ["objective"=>"Learn"],
        ["objective"=>"Build"]
    ]
];

$ch = curl_init();

curl_setopt_array($ch,[
    CURLOPT_URL=>NM_SANDBOX_URL."/api/v1/lms/client/course/publish/",
    CURLOPT_RETURNTRANSFER=>true,
    CURLOPT_POST=>true,
    CURLOPT_HTTPHEADER=>[
        "Authorization: Bearer ".$token,
        "Content-Type: application/json"
    ],
    CURLOPT_POSTFIELDS=>json_encode($data)
]);

$response = curl_exec($ch);
curl_close($ch);

echo json_encode([
    "success"=>true,
    "nm_response"=>json_decode($response, true)
]);

?>