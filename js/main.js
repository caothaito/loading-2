
$('#server').click(function() {
    $('#cumsv').toggle('slow');
});

$('#cumsv').click(function() {
    $('#attendance').toggle('slow');
    $('#server').toggle('slow');
});

function register(e){
    $('#attendance').toggle('slow');
    $("#success").toggle('slow');
}
function hideNotify() {
    $("#success").toggle('slow');
    $('#cumsv').show();
    $('#server').show();
}

$(document).ready(function() {

});