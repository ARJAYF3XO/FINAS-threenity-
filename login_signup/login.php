<?php
session_start(); // Start a session for login tracking

$conn = new mysqli("localhost", "root", "", "login");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (!empty($email) && !empty($password)) {
    $stmt = $conn->prepare("SELECT id, password FROM infos WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($user_id, $hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            // ✅ Correct password
            $_SESSION['user_id'] = $user_id;
            $_SESSION['email'] = $email;
            echo "<script>window.location.href='../index.html';</script>";
            exit();
        } else {
            echo "❌ Incorrect password.";
        }
    } else {
        echo "❌ Email not found.";
    }

    $stmt->close();
} else {
    echo "Email and password are required.";
}

$conn->close();
?>
