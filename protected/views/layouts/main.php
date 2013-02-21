<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Template &middot; Bootstrap</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

    <style type="text/css">
        body {
            /*padding-top: 20px;*/
            padding-bottom: 60px;
        }

            /* Custom container */
        .container {
            margin: 0 auto;
            max-width: 1000px;
        }

        .container > hr {
            margin: 60px 0;
        }

            /* Main marketing message and sign up button */
        .jumbotron {
            margin: 80px 0;
            text-align: center;
        }

        .jumbotron h1 {
            font-size: 100px;
            line-height: 1;
        }

        .jumbotron .lead {
            font-size: 24px;
            line-height: 1.25;
        }

        .jumbotron .btn {
            font-size: 21px;
            padding: 14px 24px;
        }

            /* Supporting marketing content */
        .marketing {
            margin: 60px 0;
        }

        .marketing p + h4 {
            margin-top: 28px;
        }

            /* Customize the navbar links to be fill the entire space of the .navbar */
        .navbar .navbar-inner {
            padding: 0;
        }

        .navbar .nav {
            margin: 0;
            display: table;
            width: 100%;
        }

        .navbar .nav li {
            display: table-cell;
            width: 1%;
            float: none;
        }

        .navbar .nav li ul li {
            display: block;
            width: auto;

        }

        .navbar .nav li ul li a {
            text-align: left;
        }

        .navbar .nav li a {
            font-weight: bold;
            text-align: center;
            border-left: 1px solid rgba(255, 255, 255, .75);
            border-right: 1px solid rgba(0, 0, 0, .1);
        }

        .navbar .nav li:first-child a {
            border-left: 0;
            border-radius: 3px 0 0 3px;
        }

        .navbar .nav li:last-child a {
            border-right: 0;
            border-radius: 0 3px 3px 0;
        }

        .header-menu ul {
            margin-bottom: 0px;
        }

        .form-search .btn-phone {
            border-radius: 0px;
            font-size: 18px;
            font-weight: bold;
        }

        .phone-block {
            margin-top: 17px;
        }
    </style>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="../assets/ico/favicon.png">
</head>

<body>

<div class="container">

    <div class="masthead">
        <?php

        $this->widget('bootstrap.widgets.TbTabs', array(
            'type' => 'pills',
            'htmlOptions' => array('class' => 'header-menu'),
            'tabs' => array(
                array('label' => 'История подборов', 'url' => '#'), //, 'active' => true),
                array('label' => 'Отзывы', 'url' => '#'),
                array('label' => 'Фото', 'url' => '#'),
                array('label' => 'Любимые отели', 'url' => '#'),
                array('label' => 'Войти', 'url' => '#', 'itemOptions' => array('class' => 'pull-right')),
                array('label' => 'Зарегистрироваться', 'url' => '#', 'itemOptions' => array('class' => 'pull-right')),
            ),
        ));
        ?>
        <div class="phone-block pull-right">
            <form class="bs-docs-example form-search">

                <div class="input-prepend">
                    <?php
                    $this->widget('bootstrap.widgets.TbButtonGroup', array(
                        'type' => 'warning', // '', 'primary', 'info', 'success', 'warning', 'danger' or 'inverse'
                        'buttons' => array(
                            array('label' => 'Москва', 'htmlOptions' => array('class' => 'pull-right'), 'url' => '#'), // this makes it split :)
                            array('items' => array(
                                array('label' => 'Action', 'url' => '#'),
                                array('label' => 'Another action', 'url' => '#'),
                                array('label' => 'Something else', 'url' => '#'),
                                '---',
                                array('label' => 'Separate link', 'url' => '#'),
                            )),
                        ),
                    ));
                    ?>
                </div>

                <?php
                $this->widget('bootstrap.widgets.TbButton', array(
                    'label' => '(495) 995-06-26',
                    'htmlOptions' => array('class' => 'btn-phone')
                ));
                ?>
                <div class="input-append">
                    <?php
                    $this->widget('bootstrap.widgets.TbButton', array(
                        'type' => 'success',
                        'label' => 'без выходных',
                    ));
                    ?>
                </div>
            </form>
        </div>

        <h3 class="muted">Ти-Туры</h3>

        <?php
        $this->widget('bootstrap.widgets.TbNavbar', array(
            'brand' => false,
            'fixed' => false,
            'items' => array(
                array(
                    'class' => 'bootstrap.widgets.TbMenu',
                    'encodeLabel' => false,
                    'items' => array(
                        array(
                            'label' => 'Туры&nbsp;и&nbsp;услуги',
                            'url' => '#',
                            'active' => true,
                            'items' => array(
                                array('label' => 'Action', 'url' => '#'),
                                array('label' => 'Another action', 'url' => '#'),
                                array('label' => 'Something else', 'url' => '#'),
                                '---',
                                array('label' => 'Separate link', 'url' => '#'),
                            )
                        ),
                        array('label' => 'Страны', 'url' => '#'),
                        array('label' => 'Клиентам', 'url' => '#'),

                        array('label' => 'Компания', 'url' => '#'),
                        array('label' => 'Контакты', 'url' => '#'),
                        array('label' => 'Общение', 'url' => '#'),
                    )
                )
            )
        ));
        ?>

        <!-- /.navbar -->
    </div>


    <!-- Jumbotron
    <div class="jumbotron large">
        <h1>Marketing stuff!</h1>

        <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus.</p>
        <a class="btn btn-large btn-success" href="#">Get started today</a>
    </div>

    <hr>   -->

    <!-- Example row of columns -->
    <div class="row-fluid">
        <div class="span4">
            <h2>Heading</h2>

            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>

            <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
        <div class="span4">
            <h2>Heading</h2>

            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>

            <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
        <div class="span4">
            <h2>Heading</h2>

            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>

            <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
    </div>

    <hr>

    <div class="footer">
        <p>&copy; Company 2012</p>
    </div>

</div>
<!-- /container -->

<!-- Le javascript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->

</body>
</html>
