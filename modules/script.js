/********************************************
 * mysteriously named function
 * Search function
 * onsubmit
********************************************/
document.getElementById('searchForm').onsubmit = function() {
    console.log("plug");
    window.location = 'http://www.google.com/search?q=site:ivvseztzqq-2403522582-a.codehs.me/index.html ' + 
document.getElementById('searchTxt').value;
    return false;
}
/********************************************
 * hamburger()
 * Hamburger Dropdown
 * onclick
********************************************/
function hamburger() {
    var dropDowns = document.getElementById("drop-down-links");
    if (dropDowns.style.display === "block") {
        dropDowns.style.display = "none";
    }     
    else {
        dropDowns.style.display = "block";
    }
}
/********************************************
 * linksShow( id of links )
 * Show links with '_id'
 * onclick
********************************************/
function linksShow(_id) {
    var dropDowns = document.getElementById(_id);
    console.log(_id);
    if (dropDowns.style.display === "block") {
        dropDowns.style.display = "none";
    }     
    else {
        dropDowns.style.display = "block";
        dropDowns.style.height = "100%";
    }
}
/********************************************
 * linksShowCl( class of links )
 * Show links by class with '_cl'
 * onclick
********************************************/
function linksShowCl(_cl) {
    var dropDowns = document.getElementsByClassName(_cl);
    console.log(_cl);
    for (var i = 0; i < dropDowns.length; i++) {
        if (dropDowns[i].style.display === "block") {
            dropDowns[i].style.display = "none";
        } else {
            dropDowns[i].style.display = "block";
        }
    }
}
/********************************************
 * linkClick( url to go to )
 * Functions as a link
 * onclick
********************************************/
function linkClick(url) {
  window.location = url;
}
/********************************************
 * linkClickNew( url to go to )
 * Opens link in new tab
 * onclick
********************************************/
function linkClickNew(url) {
  window.open(url, '_blank');
}
/***************** END OF JS :) *****************/