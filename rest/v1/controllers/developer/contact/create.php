<?php

//check database
$conn = null;
$conn = checkDatabaseConnection();
// use models
$contact = new Contact($conn);

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

checkPayLoad($data);


$contact->contact_fullname = checkIndex($data, 'contact_fullname'); // IS REQUIRED
$contact->contact_email = $data['contact_email']; // NOT REQUIRED
$contact->contact_message = $data['contact_message'];
$contact->contact_created = date('Y-m-d H:i:s'); // 2025-07-23 08:16:23
$contact->contact_updated = date('Y-m-d H:i:s');

$query = checkCreate($contact);
returnSuccess($contact, 'contact create', $query);
