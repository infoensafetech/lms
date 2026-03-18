
<?php


define('DB_HOST', '3.108.240.49');
define('DB_PORT',3306);
define('DB_USER', 'ensafe_user');
define('DB_PASS', 'StrongPassword123');
define('DB_NAME', 'ensafe_db');
define('JWT_SECRET', 'en$@felm$');
define('TOKEN_EXPIRY', 2592000); //hours for 30 days

//NM
define('NM_CLIENT_KEY', 'ba08c1bb4184bccb66b4f42606b6490a');
define('NM_CLIENT_SECRET', 'e38732022b55e6f8e3c40c9b3fcd5a29');


//NM URL
define('NM_SANDBOX_URL', 'https://sandbox-api.naanmudhalvan.in');
define('NM_PRODUCTION_URL', 'https://api.naanmudhalvan.tn.gov.in');

define('KP_BASE_URL', 'https://ensafetechnologies.in');

function getDB() {
    try {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
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