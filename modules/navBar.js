document.getElementById('searchForm').onsubmit = function() {
    console.log("plug")
    window.location = 'http://www.google.com/search?q=site:ivvseztzqq-2403522582-a.codehs.me/index.html ' + 
document.getElementById('searchTxt').value;
    return false;
}

function hamburger() {
    var x = document.getElementById("drop-down-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );
}

/**function googleTranslateElementInit() {
new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}**/