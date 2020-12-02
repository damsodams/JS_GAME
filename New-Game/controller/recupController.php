<?php
$link = mysqli_connect('vps.hacktive.live', 'game_db', 'game_js', 'game_db');
if (!$link) {
    die('Erreur de connexion');
} else {
}
$sql = "SELECT name, score INTO score";

$stmt = $sql->prepareStatementForSqlObject($requete);
$lignes = $stmt->execute();

$link->close();
?>