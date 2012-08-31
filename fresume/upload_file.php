<?php
$allowedExts = array("pdf");
$extension = end(explode(".", $_FILES["file"]["name"]));

$ip=$_SERVER['REMOTE_ADDR'];
echo "ip: " . $ip . "<br />" ;
echo "Upload: " . $_FILES["file"]["name"] . "<br />";
echo "Type: " . $_FILES["file"]["type"] . "<br />";
echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
echo "Name: " . $_POST["id"] . "<br/>";
echo "<br/>"."<br/>"."<br/>";

if (($_FILES["file"]["type"] == "application/pdf")
&& ($_FILES["file"]["size"] < 100000)
&& in_array($extension, $allowedExts))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

    $filename = $_FILES["file"]["name"];
    $id = $_POST["id"];
    if (file_exists("upload/" . $id))
      {
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "upload/" . $id); 
      echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
      }
    }
  }
else
  {
    if($_FILES["file"]["type"]!="application/pdf" 
    ||in_array($extension, $allowedExts))
    {
      echo "Fresu.me only accepts pdfs. <br/> .. for now :)";
    }
    else if($_FILES["file"]["size"] < 100000)
    {
      echo "Fresu.me only accepts files under 100Kb. <br/> .. for now :)";
    }	
  }
?>