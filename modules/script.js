

document.getElementById('searchForm').onsubmit = function() {
    console.log("plug")
    window.location = 'http://www.google.com/search?q=site:ivvseztzqq-2403522582-a.codehs.me/index.html ' + 
document.getElementById('searchTxt').value;
    return false;
}

function hamburger() {
    var dropDowns = document.getElementById("drop-down-links");
    if (dropDowns.style.display === "block") {
        dropDowns.style.display = "none";
    }     
    else {
        dropDowns.style.display = "block";
    }
}

function linksShow(id) {
    var dropDowns = document.getElementById(id);
    console.log(id);
    if (dropDowns.style.display === "block") {
        dropDowns.style.display = "none";
    }     
    else {
        dropDowns.style.display = "block";
        dropDowns.style.height = "100%";
    }
}

/** function linksShowCl(cl) {
    var dropDowns = document.getElementsByClassName(cl);
    console.log(cl);
    if (dropDowns.style.display === "block") {
        dropDowns.style.display = "none";
    }     
    else {
        dropDowns.style.display = "block";
    }
}**/

function linksShowCl(cl) {
    var dropDowns = document.getElementsByClassName(cl);
    console.log(cl);

    for (var i = 0; i < dropDowns.length; i++) {
        if (dropDowns[i].style.display === "block") {
            dropDowns[i].style.display = "none";
        } else {
            dropDowns[i].style.display = "block";
        }
    }
}

function linkClick(url) {
  window.location = url;
}

function linkClickNew(url) {
  window.open(url, '_blank')
}