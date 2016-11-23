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
	<meta name="description" content="(phonet)ic (t)ranscription (a)ssistant">
	<meta name="author" content="Benjamin S. Meyers">
</head>
<script>
	$(document).ready( function() {
		$("#parchment").focus();
	});
</script>
<body>
<?php include_once($root . "/static/includes/googleanalytics.php"); ?>
<noscript>JavaScript is off. Please enable to view full site.</noscript>
<?php include_once($root . "/static/includes/header.php"); ?>
<div class="container container-body" style="margin-top: 12px;">
	<div class="row">
		<div class="col-md-5" style="padding-right: 0 !important;">
<!--			<div class="container">-->
				<?php include_once($root . "/static/includes/keyboard.php"); ?>
<!--			</div>-->
		</div>
		<div class="col-md-3">
			<textarea placeholder="start typing..." id="parchment"></textarea>
			<br>
			<div id="copy" class="col-xs-1 col-sm-1 col-md-1 col-lg-1 btn btn-default well well-sm parchment-button pull-left">copy</div>
			<div id="clear" class="col-xs-1 col-sm-1 col-md-1 col-lg-1 btn btn-default well well-sm parchment-button pull-right" onclick="document.getElementById('parchment').value = '';">clear</div>
		</div>
		<div class="col-md-4">
			<?php include_once($root . "/static/includes/suprasegmentals.php"); ?>
			<?php include_once($root . "/static/includes/diacritics.php"); ?>
			<?php include_once($root . "/static/includes/tones.php"); ?>
		</div>
	</div>
</div>
<?php include_once($root . "/static/includes/footer.php"); ?>
<script src='/static/js/scripts.js'></script>
</body>
</html>