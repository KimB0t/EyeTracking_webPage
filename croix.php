<!DOCTYPE html>
<?php
	if(!empty($_POST['user'])){
		$data = $_POST['user'].PHP_EOL;
		$fname = "savedAnswers.txt";
		$file = fopen($fname, 'a');
		$date_time = "TIME=".date("d-m-Y h:i:sa").PHP_EOL;
		fwrite($file, $date_time);
		fwrite($file, $data);
		fclose($file);
	}
	if(!empty($_POST['data'])){
		$data = $_POST['data'].PHP_EOL;
		$fname = "savedAnswers.txt";
		$file = fopen($fname, 'a');
		fwrite($file, $data);
		fclose($file);
	}
?>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css" />
		<script type="text/javascript" src="script.js"></script>
		<title>Croix</title>
	</head>
	<body onload="intervalCroix()">

		<div class="image"> 
			<img src="./images/croix2.jpg" width=auto height="720" id="imgCroix" />
		</div>
		<p id="list" >Text</p> <!-- add class="blanc" to print in white-->
	</body>
</html>
