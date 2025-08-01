<?php
// check database
$conn = null;
$conn = checkDatabaseConnection();
// use models
$contact = new Contact($conn);

if (array_key_exists('id', $_GET)) {
   $contact->contact_aid = $_GET['id'];

   checkId($contact->contact_aid);
   $query = checkDelete($contact);
   http_response_code(200);
   returnSuccess($contact, 'contact deleted', $query);
}

checkEndpoint();
