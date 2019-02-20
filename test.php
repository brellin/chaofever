<html>
<body>

<form action="test.php" method="post">
<select>
<option>Male</option>
<option>Female</option>
</select>
Do you like pie?: <input type="" name="yn"><br>
<input type="submit" value="Onward!">
</form>

<?php

$yn=$_POST['yn'];

if($yn=="nah") echo "yer in!";
else echo "who are you?";

?>

</body>
</html>
