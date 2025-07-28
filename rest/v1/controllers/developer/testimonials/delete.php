<?php
// check database
$conn = null;
$conn = checkDatabaseConnection();
// use models
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    $testimonials->testimonials_aid = $_GET['id'];

    checkId($testimonials->testimonials_aid);
    $query = checkDelete($testimonials);
    http_response_code(200);
    returnSuccess($testimonials, 'testimonials deleted', $query);
}

checkEndpoint();
