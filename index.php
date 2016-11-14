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
	<meta name="viewport" content="width=device-width, initial-scale=1, charset=utf-8">
</head>
<body>
<noscript>JavaScript is off. Please enable to view full site.</noscript>
<div class="container-fluid" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
	<?php include_once($root . "/static/includes/header.php"); ?>
	<div class="row" style="position: relative;">
		<div class="col-lg-4" style="width: 35% !important;">
			<?php include_once($root . "/static/includes/keyboard.php"); ?>
		</div>
		<div class="col-lg-4" style="width: 30% !important;">
			<textarea id="parchment"></textarea>
		</div>
		<div class="col-lg-4" style="width: 30% !important;">

		</div>
	</div>
	<div class="row">

	</div>
	<?php include_once($root . "/static/includes/footer.php"); ?>
</div>
<script src='/static/js/scripts.js'></script>
</body>
</html>