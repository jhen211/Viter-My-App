<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/testimonials/Testimonials.php';

$body = file_get_contents('php://input');
// $body->testimonials_name
$data = json_decode($body, true);
// $data['testimonials_name'];


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

    //DELETE = REMOVE A ROW
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        $result = require 'delete.php';
        sendResponse($result);
        exit;
    }
}
checkEndpoint();
