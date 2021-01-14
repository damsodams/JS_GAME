<?php
$conn = mysqli_connect('xx', 'xx', 'xx', 'xx');
if (!$conn) {
    die('Erreur de connexion');
} else {
}
$sql = "SELECT id, name, score FROM score ORDER BY score DESC";
$result = $conn->query($sql);
$i = 0;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "
                        <tr></tr>
                        <th scope='row'>" . $i . "</th>
                        <td>" . $row["name"] . "</td>
                        <td>" . $row["score"] . "</td>";
        $i++;
    }
} else {
    echo "0 results";
}



$conn->close();
?>
