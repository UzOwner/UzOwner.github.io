<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
	<title>Document</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			text-decoration: none;
			transition: all .5s ease-out;
		}
		::selection {
			background-color: transparent;
			color: #fff;
		}
		.error404 {
			min-width: 100%;
			max-width: 100%;
			max-height: 100vh;
			min-height: 100vh;
			background: url('img/404error.png') no-repeat center center / cover;
			position: relative;
		}
		h1 {
			font-family: 'Indie Flower', cursive;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-52%, -50%);
			margin-top: 50px;
			margin-right: 10px;
			font-size: 42px;
			font-weight: 400;
			color: #fff;
		}
		p {
			font-family: 'Indie Flower', cursive;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			text-transform: uppercase;
			font-size: 35px;
			margin-top: 120px;
			margin-left: 50px;
		}
		a {
			cursor: url('../svg/cpoint.svg'), pointer;
			border-bottom: 2px solid transparent;
			color: #80e0ff;
			transition: all 700ms ease;
		}
		a:hover {
			border-bottom: 2px solid #80e0ff;
		}
	</style>
</head>
<body>
	<div class="error404">
		<h1>oops, this page no avaible!</h1>
		<p><a href="/">Go to Home</a></p>
	</div>
</body>
</html>