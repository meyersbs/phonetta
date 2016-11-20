<?php
	$root = realpath($_SERVER["DOCUMENT_ROOT"]) . "/";
	include_once($root . "/static/includes/css.php");
	include_once($root . "/static/includes/js.php");
	//include_once($root . "/static/css/stylesheet.css");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>phonetta</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-16">
	<meta name="description" content="phonettic transcription assistant">
	<meta name="author" content="Benjamin S. Meyers">
</head>
<body>
<noscript>JavaScript is off. Please enable to view full site.</noscript>
<?php include_once($root . "/static/includes/header.php"); ?>
<div class="container">
	<div class="row">
		<div class="col-md-5">
<!--			<div class="container">-->
				<?php include_once($root . "/static/includes/keyboard.php"); ?>
<!--			</div>-->
		</div>
		<div class="col-md-3">
			<textarea placeholder="start typing..." id="parchment"></textarea>
		</div>
		<div class="col-md-4">
			<h1>col-md-4</h1>
		</div>
	</div>
</div>
<?php include_once($root . "/static/includes/footer.php"); ?>
<script src='/static/js/scripts.js'></script>
</body>
</html>