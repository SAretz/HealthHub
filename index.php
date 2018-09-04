<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Healthpanel</title>
    <link rel="stylesheet" href="css/styles.css">

    <!-- App css -->
    <link href="css/icons.css" rel="stylesheet" type="text/css" />
    <link href="css/app.css" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <script src="js/_charts.js"></script>
</head>
<body data-layout="topnav">
<div class="wrapper">

    <?php
    include('src/template/nav.html');


    if(isset( $_GET['page'] ))
    {
        if(file_exists($_GET['page'].".html"))
        {
            include($_GET['page'].".html");
        }
        else
        {
            include("src/template/404.html");
        }
    }
    else{
        include('src/pages/dashboard.html');
    }
    ?>

</div>

<!-- App js -->
<script src="js/app.js"></script>

<!-- third party js -->
<script src="js/vendor/Chart.bundle.min.js"></script>
<script src="js/vendor/jquery-jvectormap-1.2.2.min.js"></script>
<script src="js/vendor/jquery-jvectormap-world-mill-en.js"></script>
<!-- third party js ends -->

</body>
</html>