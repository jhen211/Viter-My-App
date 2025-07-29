<?php
// declare db variables
$conn = null;
// use database
$conn = checkDatabaseConnection();
// USE MODEL
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    checkPayload($data);

    $testimonials->testimonials_aid = $_GET['id'];
    $testimonials->testimonials_name = checkIndex($data, 'testimonials_name');
    $testimonials->testimonials_image = $data['testimonials_image'];
    $testimonials->testimonials_comment = checkIndex($data, 'testimonials_comment');
    $testimonials->testimonials_position = checkIndex($data, 'testimonials_position');
    $testimonials->testimonials_updated = date("Y-m-d H:i:s");


    $query = checkUpdate($testimonials);
    returnSuccess($testimonials, 'testimonials update', $query);
}

checkEndpoint();
