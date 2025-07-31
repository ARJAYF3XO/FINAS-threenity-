<?php
$conn = new mysqli("localhost", "root", "", "login");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (!empty($email) && !empty($password)) {
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO infos (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $hashed);

    if ($stmt->execute()) {
        // ✅ Redirect to index.html after successful signup
        echo "<script>window.location.href='../index.html';</script>";
        exit();
    } else {
        echo "Signup failed: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Email and password are required.";
}

$conn->close();
?>
