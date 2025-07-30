<?php
// declare db variables
$conn = null;
// use database
$conn = checkDatabaseConnection();
// USE MODEL
$contact = new Contact($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $contact->contact_aid = $_GET['id'];
    $contact->contact_fullname = checkIndex($data, 'contact_fullname');
    $contact->contact_email = $data['contact_email'];
    $contact->contact_message = $data['contact_message'];
    $contact->contact_updated = date("Y-m-d H:i:s");



    // 2nd Validation -> after this go to modelAddServices
    $contact_email_old = $data['contact_email_old'];

    compareEmail($contact, $contact_email_old, $contact->contact_email);


    $query = checkUpdate($contact);
    returnSuccess($contact, 'contact update', $query);
}

checkEndpoint();
