//carousel capa
 var index = 0;

carousel();

function carousel() {
    var i;

    var imgSlides = document.getElementsByClassName("header-capa");

    for (i = 0; i < imgSlides.length; i++) {
            imgSlides[i].style.display = "none";
    }

    index++;

    if (index > imgSlides.length) {
            index = 1;
    }

    imgSlides[index - 1].style.display = "block";

    setTimeout(carousel, 5000);
}
