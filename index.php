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
	<hr style='border: none; clear: both'>
	<div class="row" style="position: relative; max-width: 1400px;">
		<div class="col-lg-6">
			<textarea id="parchment" style="font-size: 20px; line-height: 1.25; letter-spacing: 1px;"></textarea>
		</div>
		<div class="col-lg-6">

		</div>
	</div>
	<hr style='border: none; clear: both'>
	<div class="row" style="position: relative; max-width: 1400px;">
		<div class="col-lg-12" style="width: 100% !important;">
			<?php include_once($root . "/static/includes/keyboard.php"); ?>
		</div>
	</div>
	<hr style='border: none; clear: both'>
	<?php include_once($root . "/static/includes/footer.php"); ?>
</div>
<script src='/static/js/scripts.js'></script>
</body>
</html>