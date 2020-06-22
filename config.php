<?php 
function connect(){
	try{
		//CREATE NEW PDO
		$pdo = NEW PDO("mysql:host=localhost;dbname=piggame;", "root",""); 
		$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
		return $pdo;
	}catch(PDOException $e) {echo "Connection failed: " . $e->getMessage();}
}