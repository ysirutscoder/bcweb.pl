
/**
 * Created by PhpStorm.
 * User: macbookpro
 * Date: 2019-10-03
 * Time: 22:38
 */
<?php

$name = "Undefined name";
$mail = "Undefined mail";
$content = "Undefined content";


if(isset($_POST['name'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $content = $_POST['content'];
}

$message = "<p>Hi!</p>";
$message .= "<p>Name: $name , mail: $mail , massage:$content</p>";

$to_email = 'dest@mail.com';
$subject = 'Mail subject';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Biloo <noreply@ydomain.com>';

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>
