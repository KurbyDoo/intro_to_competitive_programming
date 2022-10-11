$(document).ready(function () {
    document.getElementById("defaultOpen").click();
    init();
    $(document).scroll(checkPosition);
});
function selectSolution(num) {
var tab_content, tab_links;

    // Get all elements with class="tab_content" and hide them
    tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
        if (tab_content[i].classList.contains(num)) {
            tab_content[i].style.display = "block";
        }
        
    }

    // Get all elements with class="tab_links" and remove the class "active"
    tab_links = document.getElementsByClassName("tab_links");
    for (i = 0; i < tab_links.length; i++) {
        tab_links[i].className = tab_links[i].className.replace(" active", "");
        if (tab_links[i].classList.contains(num)) {
            tab_links[i].className += " active";
        }
    }
};

function init() {
    var elements;
    var windowHeight;
    elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    windowHeight = window.innerHeight;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight > 0) {
            element.classList.add('animate__animated');
            element.classList.add('hidden');
        // element.classList.remove('hidden');
        } else {
            element.classList.add('animate__animated');
            element.classList.add('animate__fadeInUp');
        }
    }
}
function checkPosition() {
    var elements;
    var windowHeight;
    elements = document.body.getElementsByClassName('hidden');
    windowHeight = window.innerHeight;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
        
        if (positionFromTop - windowHeight <= 0) {
            // alert('sdsd');
            element.classList.remove('hidden');
            element.classList.add('animate__fadeInUp');
    }
    }
}
