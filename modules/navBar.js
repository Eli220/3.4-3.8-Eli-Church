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
    } else {
        dropDowns.style.display = "block";
    }
}

