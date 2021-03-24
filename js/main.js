
$('#server').click(function() {
    $('#cumsv').toggle('slow');
});

$('#cumsv').click(function() {
    $('#attendance').toggle('slow');
    $('#server').toggle('slow');
});

function register(){
    console.log("click register")
    $("#success").modal();
}


$(document).ready(function() {

});