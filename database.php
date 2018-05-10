
<?php

$db = new mysqli('localhost', // hostname 
'regularbee',   // userid 
'',             // password 
'world_x'       // name of DB
);


if ($db->connect_errno != 0) {
    die("Error in DB connection $db->connect_error");
}

else {
    printf ("Yes, connected\n");
    $qres = $db->query ("SELECT name, code FROM country");
    printf ("<table>");
    printf ("<tr><th>Country Code</th><th>Country Name</th></tr>");
    while ($row = $qres->fetch_assoc()) {
        printf ("<tr><td>%s</td><td>%s</td></tr>\n", $row['code'], $row['name']);
    }
    printf ("</table>");
}

?>

