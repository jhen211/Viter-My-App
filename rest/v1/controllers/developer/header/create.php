<?php

//check database
$conn = null;
$conn = checkDatabaseConnection();
// use models
$header = new Header($conn);

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

checkPayLoad($data);

$header->header_is_active = 1;
$header->header_name = checkIndex($data, 'web_services_name'); // IS REQUIRED
$header->header_link = $data['web_services_link'];
$header->header_created = date('Y-m-d H:i:s'); // 2025-07-23 08:16:23
$header->header_updated = date('Y-m-d H:i:s');

$query = checkCreate($header);
returnSuccess($header, 'web services create', $query);
