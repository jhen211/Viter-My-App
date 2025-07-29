<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/contact/Contact.php';

$body = file_get_contents('php://input');
// $body->contact_fullname
$data = json_decode($body, true);
// $data['contact_fullname'];


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }

    // PUT = UPDATE
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }

    //DELETE = REMOVE A ROW
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        $result = require 'delete.php';
        sendResponse($result);
        exit;
    }
}
checkEndpoint();
