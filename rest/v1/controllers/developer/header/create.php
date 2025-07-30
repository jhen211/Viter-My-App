<?php

// database variable
$conn = null;

//connect to database and store in conn variable
$conn = checkDatabaseConnection();

// use models
$header = new Header($conn);

// no id shall pass = gate
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}
// check data
checkPayLoad($data);

$header->header_is_active = 1;
$header->header_name = checkIndex($data, 'header_name'); // IS REQUIRED
$header->header_link = checkIndex($data, 'header_link'); // IS REQUIRED
$header->header_created = date('Y-m-d H:i:s'); // 2025-07-23 08:16:23
$header->header_updated = date('Y-m-d H:i:s');

// 1st step VALIDATIONS
isNameExist($header, $header->header_name);


$query = checkCreate($header);
returnSuccess($header, 'header create', $query);
