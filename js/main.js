
$('#server').click(function() {
    $('#cumsv').toggle('slow');
});

$('#logoRight').click(function() {
    $('#badBook').toggle('slow');
});

$('#cumsv').click(function() {
    $('#attendance').toggle('slow');
    $('#server').toggle('slow');
});

function register(e){
    $('#attendance').toggle('slow');
    $("#footerLoading").toggle('slow');
    $("#success").toggle('slow');
    $("#cumsv").toggle('hide');
}
function hideNotify() {
    $("#success").toggle('slow');
    $("#footerLoading").toggle('hide');
    $('#cumsv').show();
    $('#server').show();
}

$(document).ready(function() {

});