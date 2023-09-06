$(document).ready(function() {
    cargarInicio();

    function cargarInicio() {
        $("#main").load('../inicio.php');
    };


   $('#inicio').on('click', function() {
        $("#main").load('../inicio.php');
        return false;
    });

    $('#Conocenos').on('click', function() {
        $("#main").load('../formulario01.php');
        return false;
    });

    $('#Cartillas').on('click', function() {
        $("#main").load('../formulario02.php');
        return false;
    });

    $('#Planes').on('click', function() {
        $("#main").load('../formulario03.php');
        return false;
    });

    $('#Contactanos').on('click', function() {
        $("#main").load('../formulario04.php');
        return false;
    });
});