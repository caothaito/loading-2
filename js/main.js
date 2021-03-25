
$('#server').click(function() {
    $('#cumsv').toggle('slow');
});

$('#logoRight').click(function() {
    $('#badBook').toggle('slow');
    showListName(lstNewAcc);
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
var lstNewAcc = [
    {userName: "User 1", charClass: "Elf"},
    {userName: "User 2", charClass: "Elf"},
    {userName: "User 3", charClass: "Elf"},
    {userName: "User 4", charClass: "Elf"},
    {userName: "User 5", charClass: "Elf"},
    {userName: "User 6", charClass: "Elf"},
    {userName: "User 7", charClass: "Elf"},
    {userName: "User 8", charClass: "Elf"},
    {userName: "User 9", charClass: "Elf"},
    {userName: "User 10", charClass: "Elf"},
]

var PAGE_COUNT = 2;
var MAX_ITEMS_PER_PAGE = 5;

var ID_ACC_ELEMENT = "new-account-id-";
var ID_CHAR_CLASS_ELEMENT = "new-account-class-";

function showListName(lstNewAcc){
    for(let idx = 0; idx < lstNewAcc.length && idx < PAGE_COUNT; idx++) {
        let arrItemsOfPage = lstNewAcc.slice(idx, (idx+1) * MAX_ITEMS_PER_PAGE);
        showItemPage(arrItemsOfPage, idx);
    }
}

function showItemPage(items, pageNum) {
    for(let idx = 0; idx < MAX_ITEMS_PER_PAGE; idx ++) {
        $("#" + ID_ACC_ELEMENT.toString() + (idx+1 + pageNum * MAX_ITEMS_PER_PAGE).toString()).html(items[idx].userName);
        $("#" + ID_CHAR_CLASS_ELEMENT.toString() + (idx + 1 + pageNum * MAX_ITEMS_PER_PAGE ).toString()).html(items[idx].charClass);
    }
}

$(document).ready(function() {

});