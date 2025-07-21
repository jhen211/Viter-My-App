<?php
require 'Database.php';
require 'Response.php'; 

function checkDatabaseConnection()
{
    try {
        $conn = Database::connectDb();
        return $conn;
    } catch (PDOException $ex) {
        $response = new Response();
        $data = [];
        $data['success'] = true;
        $data['data'] = [];
        $data['count'] = 0;
        $data['type'] = 'invalid_request_error';
        $data['error'] = "Database Connection Failed.";
        $response->setData($data);
        $response->send();
        exit;
    }
}

function returnError($msg)
{
    $response = new Response();
    $data = [];
    $data['success'] = true;
    $data['data'] = [];
    $data['count'] = 0;
    $data['message'] = $msg;
    $response->setData($data);
    $response->send();
    exit;
}

function getResultData($query)
{
    $data = $query->fetchAll();
    return $data;
}

function getQueriedData($query)
{
    $response = new Response();
    $data = [];
    $data['success'] = true;
    $data['data'] = getResultData($query);
    $data['count'] = $query->rowCount();
    $data['message'] = date('Y-m-d');
    $response->setData($data);
    $response->send();
    exit;
}

function checkQuery($query, $msg)
{
    // IF QUERY IS FALSE THEN DO THIS CODE
    // ! = FALSE EXAMPLE IS !$IsQuery == FALSE
    if (!$query) {
        $response = new Response();
        $data = [];
        $data['success'] = false;
        $data['error'] = $msg;
        $data['count'] = 0;
        $data['type'] = 'invalid_request_error';
        $data['message'] = date('Y-m-d');
        $response->setData($data);
        $response->send();
        exit;
    }
}

function sendResponse($result)
{
    $response = new Response();
    $response->setSuccess(true);
    $response->setStatusCode(200);
    $response->setData($result);
    $response->send();
}

function checkReadAll($object)
{
    $query = $object->readAll();
    checkQuery($query, "Theres something wrong with models.");
    return $query;
}

// $conn = null;
// $conn = checkDatabaseConnection();

// $test = new Test($conn);

// $query = checkReadAll($test);
// getQueriedData($query);
