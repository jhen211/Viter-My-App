<?php

class Database
{
    private static $dbConnection;

    public static function connectDb()
    {
        // LOCALHOST
        $host = 'localhost';
        $dbname = 'viter_my_app';
        $username = 'root';
        $password = '';

        // === STRICT 
        // EXAMPLE: 123 (INT) === '123' (STRING) is EQUAL to FALSE  
        // == NON-STRICT 
        // EXAMPLE: 123 (INT) == '123' (STRING) is EQUAL to TRUE 
        // [] ARRAY
        // {} OBJECT 

        if (self::$dbConnection === null) {
            // IF NULL SET UP OUR CONNECTION TO DATABASE
            self::$dbConnection = new PDO("mysql:host={$host};dbname={$dbname};", $username, $password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
            self::$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return self::$dbConnection;
    }
}
