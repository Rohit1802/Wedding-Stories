<?php
// db.php

$host = 'localhost';      // Database host (change if not localhost)
$dbname = 'wedding_contact_form'; // Database name
$username = 'in819jwowvwq';       // Database username
$password = '@Rajherbolife.in';           // Database password (change as necessary)

try {
    // Create a PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // In case of a connection failure, show an error message
    echo 'Connection failed: ' . $e->getMessage();
}
?>
