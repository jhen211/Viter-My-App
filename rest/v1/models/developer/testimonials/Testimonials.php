<?php

class Testimonials
{
    public $testimonials_aid; // column -no need to put, automatic generated
    public $testimonials_is_active; // column
    public $testimonials_name; // column
    public $testimonials_image; // column
    public $testimonials_position; // column
    public $testimonials_comment; // column
    public $testimonials_created; // column
    public $testimonials_updated; // column

    public  $connection; // variable connection to database
    public $lastInsertedId; // when created is used store last inserted id

    public $tblTestimonials; // table

    // when this file is used run this function
    public function __construct($db)
    {
        $this->connection = $db; // connection of database
        $this->tblTestimonials = "my_app_testimonials"; // table
    }

    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblTestimonials} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // creating a data using this function
    public function create()
    {
        try {
            $sql = "insert into {$this->tblTestimonials} ( "; // SQL-STRING
            $sql .= "testimonials_is_active, ";
            $sql .= "testimonials_name, ";
            $sql .= "testimonials_position, ";
            $sql .= "testimonials_image, ";
            $sql .= "testimonials_comment, ";
            $sql .= "testimonials_created, ";
            $sql .= "testimonials_updated ) values ( ";
            $sql .= ":testimonials_is_active, "; // NEEDED COLUMN IF IT NEED TO PASS
            $sql .= ":testimonials_name, ";
            $sql .= ":testimonials_position, ";
            $sql .= ":testimonials_image, ";
            $sql .= ":testimonials_comment, ";
            $sql .= ":testimonials_created, ";
            $sql .= ":testimonials_updated ) ";
            returnError($sql);
            $query = $this->connection->prepare($sql); // TO READY YOUR QUERY
            $query->execute([ // TO RUN THIS SQL CODE // ARRAY-[]
                "testimonials_is_active" => $this->testimonials_is_active, // => - EQUAL GREATER THAN
                "testimonials_name" => $this->testimonials_name,
                "testimonials_position" => $this->testimonials_position,
                "testimonials_image" => $this->testimonials_image,
                "testimonials_comment" => $this->testimonials_comment,
                "testimonials_created" => $this->testimonials_created,
                "testimonials_updated" => $this->testimonials_updated,
            ]); // TO RUN THIS SQL
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            returnError($ex);

            $query = false;
        }
        return $query;
    }
}
