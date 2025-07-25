<?php

// database variable
$conn = null;

//connect to database and store in conn variable
$conn = checkDatabaseConnection();

// use models
$testimonials = new Testimonials($conn);

// no id shall pass = gate
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}
// check data
checkPayLoad($data);

$testimonials->testimonials_is_active = 1;
$testimonials->testimonials_name = checkIndex($data, 'testimonials_name'); // IS REQUIRED
$testimonials->testimonials_image = checkIndex($data, 'testimonials_image'); // IS REQUIRED
$testimonials->testimonials_position = checkIndex($data, 'testimonials_position'); // IS REQUIRED
$testimonials->testimonials_comment = checkIndex($data, 'testimonials_comment'); // IS REQUIRED
$testimonials->testimonials_created = date('Y-m-d H:i:s'); // 2025-07-23 08:16:23
$testimonials->testimonials_updated = date('Y-m-d H:i:s');

$query = checkCreate($testimonials);
returnSuccess($testimonials, 'testimonials create', $query);
