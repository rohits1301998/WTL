<!DOCTYPE html>
<html>
<head>
  <title>lol</title>
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
  <script type="text/javascript" src="js/main.js"></script>
</head>
<body >
<div  class="container">
<header><h1>Online Test Generator</h1></header>
<div id="main">
<button id="add" class="btn btn-default btn-lg" >Add More Question</button>
</div>
<form onsubmit="addQuestion();return false;">
<div id="box">
  <p><strong>Enter the question:</strong></p>
  <textarea class="form-control" rows="3"  style="resize:none;" id="question" required></textarea><br/>
  <p id="choose-ans"><strong>Please select the correct answer</strong></p>
  <div id="options">
  
  </div>
  <input type="submit" value="Add Question" id="add-elem" class="btn btn-default" />
  <button class="btn btn-default" id="cancel">Cancel</button>
</div>
</form>
</div>
</body>
</html>