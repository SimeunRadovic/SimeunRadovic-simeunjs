<?php

define('SITE_ROOT', __DIR__);
//require SITE_ROOT."/component/vendor/autoload.php";
require_once SITE_ROOT . '/mailer/PHPMailer-master/class.phpmailer.php';
include SITE_ROOT . '/mailer/PHPMailer-master/class.smtp.php';
require SITE_ROOT . '/mailer/PHPMailer-master/PHPMailerAutoload.php';

class USER {

    public function returnJSON($type,$data,$params=null)
    {
        $array=[];
        $array['type']=$type;
        $array['data']=$data;
        $array['params']= $params;
        echo json_encode($array);
    }


    public function returnErrorByField($field,$errorMsg) {
       $array=[];
       $array['type']='FIELD_ERROR';
       $array['field']= $field;
       $array['msg']= $errorMsg;
       echo json_encode($array);
    }

    function send_mail($email, $message, $subject)
    {
     /*    $mail = new PHPMailer(true);
            
            try {
            //Server settings
            $mail->isSMTP();
            $mail->Host = 'localhost';
            $mail->SMTPAuth = false;
            $mail->SMTPAutoTLS = false;
            $mail->Port = 25;
                    $mail->Username = "contact@theoddkitchen.com";
                    $mail->Password = "michael8822!!";
            //Recipients
                    $mail->SetFrom($email, 'FromEmail');
                    $mail->addAddress($email, 'ToEmail');
            //Content
            $mail->isHTML(true);
            $mail->Subject = 'Here is the subject';
            $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            
            $mail->send();
            } catch (Exception $e) {
                echo "<pre>";
                print_r($e);
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            } */

            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = 'theoddkitchen-com.mail.protection.outlook.com';
            $mail->SMTPAuth = false;
            $mail->SMTPAutoTLS = false;
            $mail->Port = 587;
            $mail->Username = "contact@theoddkitchen.com";
            $mail->Password = "michael8822!!";
            $mail->SetFrom($email, 'FromEmail');
            $mail->addAddress($email, 'ToEmail');
            //$mail->SMTPDebug  = 3;
            //$mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";}; //$mail->Debugoutput = 'echo';
            $mail->IsHTML(true);
            
            $mail->Subject = 'Here is the subject';
            $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            
            if(!$mail->send()) {
                echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;
            } else {
                echo 'Message has been sent';
            }
    }

}