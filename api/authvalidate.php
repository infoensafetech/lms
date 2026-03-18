<?php
include("conf.php");

function getBearerToken() {
    $headers = getallheaders();
    if (!isset($headers['Authorization'])) return false;

    if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
        return $matches[1];
    }
    return false;
}

function verifyToken($token) {
    $parts = explode('.', $token);
    if (count($parts) !== 3) return false;

    [$header, $payload, $sig] = $parts;

    $expectedSig = base64_encode(
        hash_hmac('sha256', "$header.$payload", JWT_SECRET, true)
    );

    if (!hash_equals($expectedSig, $sig)) return false;

    $data = json_decode(base64_decode($payload), true);

    if (!$data || $data['exp'] < time()) return false;

    return $data;
}

$token = getBearerToken();

if (!$token) {
    http_response_code(401);
    echo json_encode(["success"=>false,"message"=>"Missing Bearer token"]);
    exit;
}

$tokenData = verifyToken($token);

if (!$tokenData) {
    http_response_code(401);
    echo json_encode(["success"=>false,"message"=>"Invalid or expired token"]);
    exit;
}
?>