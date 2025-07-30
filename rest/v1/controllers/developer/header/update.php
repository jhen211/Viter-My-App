<?php
// declare db variables
$conn = null;
// use database
$conn = checkDatabaseConnection();
// USE MODEL
$header = new Header($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $header->header_aid = $_GET['id'];
    $header->header_name = checkIndex($data, 'header_name');
    $header->header_link = checkIndex($data, 'header_link');
    $header->header_updated = date("Y-m-d H:i:s");

    $header_name_old = $data['header_name_old'];

    compareName($header, $header_name_old, $header->header_name);

    $query = checkUpdate($header);
    returnSuccess($header, 'header update', $query);
}

checkEndpoint();
