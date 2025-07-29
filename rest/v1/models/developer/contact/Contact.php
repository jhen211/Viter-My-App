<?php

class Contact
{
    public $contact_aid; // column -no need to put, automatic generated
    public $contact_fullname; // column
    public $contact_email; // column
    public $contact_message; // column
    public $contact_comment; // column
    public $contact_created; // column
    public $contact_updated; // column

    public  $connection; // variable connection to database
    public $lastInsertedId; // when created is used store last inserted id

    public $tblContact; // table

    // when this file is used run this function
    public function __construct($db)
    {
        $this->connection = $db; // connection of database
        $this->tblContact = "my_app_contact"; // table
    }

    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblContact} ";
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
            $sql = "insert into {$this->tblContact} ( "; // SQL-STRING

            $sql .= "contact_fullname, ";
            $sql .= "contact_email, ";
            $sql .= "contact_message, ";
            $sql .= "contact_created, ";
            $sql .= "contact_updated ) values ( ";
            $sql .= ":contact_fullname, ";
            $sql .= ":contact_email, ";
            $sql .= ":contact_message, ";
            $sql .= ":contact_created, ";
            $sql .= ":contact_updated ) ";
            $query = $this->connection->prepare($sql); // TO READY YOUR QUERY
            $query->execute([ // TO RUN THIS SQL CODE // ARRAY-[]  // => - EQUAL GREATER THAN
                "contact_fullname" => $this->contact_fullname,
                "contact_email" => $this->contact_email,
                "contact_message" => $this->contact_message,
                "contact_created" => $this->contact_created,
                "contact_updated" => $this->contact_updated,
            ]); // TO RUN THIS SQL
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            returnError($ex);
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblContact} ";
            $sql .= "where contact_aid = :contact_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_aid" => $this->contact_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblContact} set ";
            $sql .= "contact_fullname = :contact_fullname, ";
            $sql .= "contact_email = :contact_email, ";
            $sql .= "contact_message = :contact_message, ";
            $sql .= "contact_updated = :contact_updated ";
            $sql .= "where contact_aid = :contact_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_fullname" => $this->contact_fullname,
                "contact_email" => $this->contact_email,
                "contact_message" => $this->contact_message,
                "contact_updated" => $this->contact_updated,
                "contact_aid" => $this->contact_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
