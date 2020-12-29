<?php

	// $email_to = "yakovlev.nsp@gmail.com";
	$email_to = "gillgate@yandex.ru";
    
	$name 		= trim($_POST['name']);
	$email 		= trim($_POST['email']);
	$phone 		= trim($_POST['phone']);
	$company 	= trim($_POST['company']);
	$position 	= trim($_POST['position']);
	$site 		= trim($_POST['site']);
	$discover 	= trim($_POST['discover']);

	$dt = date('Y-m-d H:i:s');
	
    $errors = [];

	if($name == '') {
		$errors['name'] = 'Ф.И.О. не может быть пустым!';
	} elseif (strlen($name) < 4) {
		$errors['name'] = 'Ф.И.О. должно содержать от 4 символов!';
	}
    
	if($email == '') {
		$errors['email'] = 'Email не может быть пустым!';
	} elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$errors['email'] = 'Введите корректный email!';
	}
    
    if($phone == '') {
		$errors['phone'] = 'Телефон не может быть пустым!';
	} elseif(!validate_phone_number($phone)) {
		$errors['phone'] = 'Введите корректный телефон!';
	}

	// if($company == '') {
	// 	$errors['company'] = 'Название компании не может быть пустым!';
	// } elseif (strlen($company) < 2){
	// 	$errors['company'] = 'Название компании должно быть минимум от 2 символов!';
	// }

	// if($position == '') {
	// 	$errors['position'] = 'Поле должности не может быть пустым!';
	// } elseif (strlen($position) < 2){
	// 	$errors['position'] = 'Название должности должно быть минимум от 2 символов!';
	// }

    $response = ['res' => empty($errors), 'errors' => $errors];
    
	if($response){
		
		$headers = "Content-type: text/plain; charset=utf-8\r\n";
		$headers .= "\r\n";
		$subject  = 'Предварительная регистрация';
		$letter   = "\n
			Предварительная регистрация \n

			Имя: $name \n
			Телефон: $phone \n
			Email: $email \n
			Компания: $company \n
			Должность: $position \n
			Сайт: $site \n
			Как узнали: $discover";

		$sendmail = mail($email_to, $subject, $letter, $headers);

		// echo json_encode($sendmail);
	}
    
    echo json_encode($response);

    function validate_phone_number($phone) {
		$filtered_phone_number = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
		$phone_to_check = str_replace("-", "", $filtered_phone_number);
		if (strlen($phone_to_check) < 10 || strlen($phone_to_check) > 14) {
			return false;
		} else {
			return true;
		}
	}