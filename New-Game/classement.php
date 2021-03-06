

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Massacre de zombie</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet"
        type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
    <img id='background' style="display: none" src='img/background.jpg'>
</head>

<body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Classement des joueurs</a>
            <a href="index.html">Accueil</a>
        </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center">
        <div class="container">
            <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pseudo</th>
                    <th scope="col">Score max</th>
                  </tr>
                  <?php include "controller/recupController.php";?>

                </thead>
                <tbody id="tableauClassement">
                </tbody>
              </table>
              

    </header>
    <!-- Footer-->
    <footer class="footer text-center">
        <div class="container">
            <div class="row">
                <!-- Footer Location-->
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Localisation</h4>
                    <p class="lead mb-0">
                        GROUPE MONT ROLAND
                        <br />
                        55 Boulevard Wilson,
                        39100 Dole </p>
                </div>
                <!-- Footer About Text-->
                <div class="col-lg-6">
                    <h4 class="text-uppercase mb-4">A propos</h4>
                    <p class="lead mb-0">
                        Créer par Artur Labrunie,<br /> Damien Payet,et Florent Pelletier.<br />
                        <a href="http://startbootstrap.com">Basé sur Bootstrap</a>
                        .
                    </p>
                </div>
            </div>
        </div>
        <!-- Copyright Section-->
    </footer>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright © Massacre de zombie 2020</small></div>
    </div>
    <!-- Bootstrap core JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Third party plugin JS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
</body>

</html>