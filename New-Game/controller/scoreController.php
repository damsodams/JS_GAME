<?php
$link = mysqli_connect('xx', 'xx', 'xx', 'xx');
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

