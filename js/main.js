
$('#server').click(function() {
    $('#cumsv').toggle('slow');
});

$('#logoRight').click(function() {
    $('#badBook').toggle('slow');
    showListName(lstNewAcc);
});

$('#buttonEsc').click(function() {
    $('#badBook').toggle('hide');

});



$('#cumsv').click(function() {
    $('#attendance').toggle('slow');
    $('#server').toggle('slow');
});

var registerClass = "";
function register(e){
    let _userName = $("#txtCharName").val();
    let _phoneNumberr = $("#txtPhoneNumber").val();
    if(_userName && _phoneNumberr && _userName.length && _phoneNumberr .length){
        console.log(_userName)
        console.log(_phoneNumberr)
        if(!registerClass.length)  {
            alert("Vui lòng chọn class nhân vật.")
            return;
        } 

        lstNewAcc.unshift({
            userName: _userName, 
            phone:_phoneNumberr, 
            charClass: registerClass
        });
        
        //clear status
        registerClass = ""
        $("#txtCharName").val("");
        $("#txtPhoneNumber").val("");

        $("#success").toggle('slow');
        $('#attendance').toggle('slow');
        $("#cumsv").toggle('hide');
    }
    else
    {
        alert("Vui lòng điền đầy đủ thông tin");
        $('#attendance').toggle('slow');
        $('#cumsv').show();
        $('#server').show();
    }
}
function choiseClass(cls) {
    registerClass = cls;
}

function hideNotify() {
    $("#success").toggle('slow');
    $('#cumsv').show();
    $('#server').show();
}
var lstNewAcc = [];
var PAGE_COUNT = 2;
var MAX_ITEMS_PER_PAGE = 5;

var ID_ACC_ELEMENT = "new-account-id-";
var ID_CHAR_CLASS_ELEMENT = "new-account-class-";

function showListName(lstNewAcc){
    for(let idx = 0; idx < (lstNewAcc.length /MAX_ITEMS_PER_PAGE  + 1) && idx < PAGE_COUNT; idx++) {
        let arrItemsOfPage = lstNewAcc.slice(idx * MAX_ITEMS_PER_PAGE , (idx+1) * MAX_ITEMS_PER_PAGE);
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