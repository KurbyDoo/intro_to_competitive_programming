$(document).ready(function () {
    document.getElementById("defaultOpen").click();

    var dict = {
        "First Name": "John",
        "Last Name": "Doe",
        "Age": 999,
        "Country": "Canada",
        "City": "Toronto",
        }


    init();
    $(document).scroll(checkPosition);
    $('#search_bar_key').focus(function () {
        checkIfInDictionary();
    }).blur(function () {
        $("#key_items").html('');
    })
    
    $("#search_bar_key").on('input', function () {
        checkIfInDictionary();
    })

    function checkIfInDictionary() {
        var inner = "";
        for (var k of Object.keys(dict)) {
            if (k.toUpperCase() == $("#search_bar_key").val().toUpperCase()) {
                inner += `<div class="exact_match">"${k}": "${dict[k]}"</div>`;
            } else if (k.toUpperCase().includes($("#search_bar_key").val().toUpperCase())) {
                inner += `<div>"${k}": "${dict[k]}"</div>`;
            }
        }
        $("#key_items").html(inner);
    }

    $('.map_submit').focus(function () {
        // On Button Press
        
        if (addToDictionary() == true) {
            $(this).attr('value', 'Key Value Required');
            $('#create_key').addClass('animate__animated');
            $('#create_key').addClass('animate__headShake');
            $('#create_key').css('box-shadow', 'inset 0 0 0 2px red');
        }

        
    }).blur(function () {
        $('#create_key').removeClass('animate__headShake');
        $('#create_key').css('box-shadow', 'none');
        $(this).attr('value', 'Create Key');
    })
    
    // NOT WORKING, DOUBLE CLICK ON MOBILE
    // $('.map_submit').click(function () {
    //     // On Enter Press
    //     output = addToDictionary();
    //     console.log(output);
    //     if (addToDictionary() == true) {
    //         $('#create_key').addClass('animate__animated');
    //         $('#create_key').addClass('animate__headShake');
    //     }
    // })

    function addToDictionary() {
        var key = $('#create_key').val();
        var value = $('#create_value').val();
        
        if (key == '') {
            return true
        }
        if (value == '') { value = "null" }
        dict[key] = value
        $('#create_key').val('');
        $('#create_value').val('');
        $('#create_key').attr('placeholder', 'Key');
        return false
    }
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

var $gallery = $('.gallery#array_list').flickity({
    // options
    // cellAlign: 'left',
    // contain: true,
    draggable: true,
    autoPlay: 1000,
    selectedAttraction: 0.01,
    friction: 0.15,
    pageDots: true,
        
});

$('.gallery#array').flickity({
    // options
    draggable: true,
    autoPlay: 1000,
    selectedAttraction: 0.01,
    friction: 0.15,
    pageDots: true,
        
});

var gallery_length = 3;

// Button Press
$("#add_item").click(function () {
    var inner = $(createCell());
    if (gallery_length > 30) {
        $('#add_item').attr('value', 'Size Limit Reached')
        return
    }
    $gallery.flickity('append', inner);
// $(".gallery").append('<div class="gallery-cell"></div>');
});

// Enter Press
$("#submit_array_list").click(function () {
    var inner = $(createCell());
    if (gallery_length > 30) {
        $('#add_item').attr('value', 'Size Limit Reached')
        return
    }
    $gallery.flickity('append', inner);
// $(".gallery").append('<div class="gallery-cell"></div>');
});



function createCell() {
    gallery_length++;
    var content = ""
    content = $('#addInput').val();
    $('#addInput').val('');
    if (content == '') {
        return  `<div class="gallery-cell">
                    <div class="cell_content">
                        <p>Index = ${gallery_length - 1}</p>
                        <p>"Box ${gallery_length}"</p>
                    </div>
                </div>
                `
    }
    var fontSize = Math.min(((Math.min(8 / (Math.log(content.length + 1) * 1.2), 2.4))), 2.5) / 1.5;

    if (screen.width <= 600) {
        fontSize = fontSize * 2;
    }

    return `<div class="gallery-cell">
                <div class="cell_content">
                    <p>Index = ${gallery_length - 1}</p>
                    <p style="font-size: ${fontSize}vw"> "${content}" </p>
                </div>
            </div>
            `
    // return '<div class="gallery-cell"> <p style="font-size: ' + (8/(Math.log(content.length + 1)*2)) + 'rem ">' + content + '</p></div>';
}

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
            // element.classList.remove('hidden');
            element.classList.add('animate__fadeInUp');
    }
    }
}
