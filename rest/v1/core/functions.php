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

function checkId($id)
{
    $response = new Response();
    if ($id == '' || !is_numeric($id)) {
        $response->setSuccess(false);
        $error = [];
        $error['code'] = '400';
        $error['error'] = 'ID cannot be blank or must be numeric';
        $error['success'] = false;
        $response->setData($error);
        $response->send();
        exit;
    }
}



function checkDelete($model)
{
    $query = $model->delete();
    checkQuery($query, "There's something wrong with models. (delete)");
    return $query;
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

function checkEndpoint()
{
    $response = new Response();
    $response->setSuccess(false);
    $error = [];
    $error['success'] = false;
    $error['code'] = '404';
    $error['error'] = 'Endpoint not found.';
    $response->setData($error);
    $response->send();
    exit;
}

function checkPayload($jsonData)
{
    if (empty($jsonData) || $jsonData === null) {
        invalidInput();
    }
}

function invalidInput()
{
    $response = new Response();
    $response->setSuccess(false);
    $error = [];
    $error['success'] = false;
    $error['code'] = '404';
    $error['error'] = 'Invalid input.';
    $response->setData($error);
    $response->send();
    exit;
}

function checkIndex($jsonData, $index)
{
    if (!isset($jsonData[$index]) || $jsonData[$index] === '') {
        invalidInput();
    }
    return trim($jsonData[$index]);
}

function returnSuccess($model, $name, $query, $data = '')
{
    $response = new Response();
    $returnData = [];
    $returnData['data'] = [$data];
    $returnData['count'] = $query->rowCount();
    $returnData["{$name} ID"] = $model->lastInsertedId;
    $returnData['success'] = true;
    $response->setData($returnData);
    $response->send();
    exit;
}

function checkCreate($models)
{
    $query = $models->create();
    checkQuery($query, "There's something wrong with models. (create)");
    return $query;
}

function checkUpdate($models)
{
    $query = $models->update();
    checkQuery($query, "There's something wrong with models. (update)");
    return $query;
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

function checkExistence($count, $msg = '')
{
    if ($count > 0) {
        $response = new Response();
        $error = [];
        $response->setSuccess(false);
        $error['error'] = $msg;
        $response->setData($error);
        $response->send();
        exit;
    }
}

function isNameExist($models, $name)
{
    $query = $models->checkName();
    $count = $query->rowCount();
    checkExistence($count, "{$name} already exists.");
}

function compareName($models, $name_old, $name)
{
    if (strtolower($name_old) != strtolower($name)) {
        isNameExist($models, $name);
    }
}

// 3rd step Validation
function isEmailExist($models, $email)
{
    $query = $models->checkEmail();
    $count = $query->rowCount();
    checkExistence($count, "{$email} already exist");
}

// Validation after this go to update
function compareEmail($models, $email_old, $email)
{
    if (strtolower($email_old) != strtolower($email)) {
        isEmailExist($models, $email);
    }
}

// HEADER
function isHeaderExist($models, $header)
{
    $query = $models->checkHeader();
    $count = $query->rowCount();
    checkExistence($count, "{$header} already exist");
}

// Validation after this go to update
function compareHeader($models, $header_old, $header)
{
    if (strtolower($header_old) != strtolower($header)) {
        isHeaderExist($models, $header);
    }
}

function checkLimitId($start, $total)
{
    $response = new Response();
    if ($start = '' || !is_numeric($start) || $total = '' || !is_numeric($total)) {
        $response->setSuccess(false);
        $error = [];
        $error['code'] = '400';
        $error['error'] = 'Limit ID cannot be blank or must be numeric.';
        $error['success'] = false;
        $response->setData($error);
        $response->send();
        exit;
    }
}

function checkReadLimit($models)
{
    $query = $models->readLimit();
    checkQuery($query, "There's something wrong with your models. (read limit)");
    return $query;
}

function checkReadQuery($query, $total_result, $models_total, $models_start)
{
    $response = new Response();
    $returnData = [];
    $returnData['data'] = getResultData($query);
    $returnData['count'] = $query->rowCount();
    $returnData['total'] = $total_result->rowCount();
    $returnData['per_page'] = $models_total;
    $returnData['page'] = (int)$models_start;
    $returnData['total_pages'] = ceil($total_result->rowCount() / $models_total);
    $returnData['success'] = true;
    $response->setData($returnData);
    $response->send();
    exit;
};
   
// $conn = checkDatabaseConnection();

// $test = new Test($conn);

// $query = checkReadAll($test);
// getQueriedData($query);
