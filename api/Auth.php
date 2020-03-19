<?php

// Recive la funcion a ejecutar
$f = $_GET['f'];


// Recive los datos por POST
$post = json_decode(file_get_contents("php://input"), true);


// Redirecciona a la funcion llamada
if ($f == 'login'){
    $Auth = new Auth();
    echo $Auth->Login();
}

// Llama Funcion Logout
if ($f == 'logout'){
    $Auth = new Auth();
    echo $Auth->Logout();
}





class Auth
{

    /* Funcion que autentica al usuario */
    public function Login(){
        return 'ok';
    }


    /* Funcion Sale de Session */
    public function Logout(){
        return 'ok';
    }


}
