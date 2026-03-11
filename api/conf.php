
<?php


/*
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}
*/

define('DB_HOST', '3.108.240.49');
define('DB_PORT',3306);
define('DB_USER', 'ensafe_user');
define('DB_PASS', 'StrongPassword123');
define('DB_NAME', 'ensafe_db');
define('JWT_SECRET', 'en$@felm$');
define('TOKEN_EXPIRY', 2592000); //hours for 30 days


function getDB() {
    try {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
        if ($conn->connect_error) {
            http_response_code(500);
            echo json_encode(["success" => false, "message" => "Database connection failed"]);
            exit;
        }
        return $conn;
    } catch (mysqli_sql_exception $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Database connection failed"]);
        exit;
    }
}

getDB();

?>