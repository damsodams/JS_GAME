<?php
$link = mysqli_connect('vps.hacktive.live', 'game_db', 'game_js', 'game_db');
if (!$link) {
    die('Erreur de connexion');
} else {
    echo 'Succès... ';
}
$sql = "INSERT INTO score(name, score)
VALUES ( '".$_POST['name']."', ".$_POST['score'].")";

if ($link->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $link->error;
}

$link->close();
?>

