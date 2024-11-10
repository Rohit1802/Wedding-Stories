<?php
// contact.php

// Include the database connection
include 'http://localhost/contact_form/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $guest_count = $_POST['guestCount'];
    $wedding_details = $_POST['weddingDetails'];
    $wedding_location = $_POST['weddingLocation'];
    $event_dates = $_POST['eventDates'];
    $services = isset($_POST['services']) ? implode(", ", $_POST['services']) : ''; // Convert services array to string

    // SQL to insert data into the contact_form_submissions table
    $sql = "INSERT INTO contact_form_submissions (name, email, phone, guest_count, wedding_details, wedding_location, event_dates, services) 
            VALUES (:name, :email, :phone, :guest_count, :wedding_details, :wedding_location, :event_dates, :services)";

    try {
        // Prepare the SQL statement
        $stmt = $pdo->prepare($sql);

        // Bind parameters to prevent SQL injection
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':guest_count', $guest_count);
        $stmt->bindParam(':wedding_details', $wedding_details);
        $stmt->bindParam(':wedding_location', $wedding_location);
        $stmt->bindParam(':event_dates', $event_dates);
        $stmt->bindParam(':services', $services);

        // Execute the statement
        $stmt->execute();

        // Return success message
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully!']);
    } catch (PDOException $e) {
        // Return error message if something goes wrong
        echo json_encode(['success' => false, 'message' => 'Failed to submit form: ' . $e->getMessage()]);
    }
} else {
    // If the request method is not POST
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
