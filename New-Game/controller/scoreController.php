<?php
$link = mysqli_connect('localhost', 'root', '', 'my_db');

if (!$link) {
    die('Erreur de connexion');
} else {
    echo 'Succès... ';
}

?>