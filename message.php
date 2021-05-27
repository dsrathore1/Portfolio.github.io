<?php
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $message = htmlentities($_POST['message']);

    if(!empty($email) && !empty($subject) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sender = "From: dsrathorebsw1234@gmail.com";
            if(mail($email, $subject, $message, $sender)){
                echo "success";
            }else{
                echo "Failed while sending your message!";
            }
        }else{
            echo "Please enter a valid email!";
        } 
    }else{
        echo "All fields are required!";
    }

?>
