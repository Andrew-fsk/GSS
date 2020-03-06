$(document).ready(function () {
    $('.top-slider').slick({
        dots: true,
        autoplay: true,
    });
});

$(document).ready(function () {
    $('.team-slider').slick({
        dots: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dotsClass: 'slick-dots-team',
    });
});

let contentSliders = document.querySelectorAll(".content-slide");
let contentSlidersBtns = document.querySelectorAll(".content-slider-btn");

function hide(number) {
    for (let slide = 0; slide < contentSliders.length; slide++) {
        if (slide != number) {
            contentSliders[slide].style.display = "none";
            contentSlidersBtns[slide].classList.remove("contentSliderBtnActive");
            contentSlidersBtns[slide].lastChild.previousSibling.classList.add('hidden');
        } else {
            contentSliders[number].style.display = "flex";
            contentSlidersBtns[slide].classList.add("contentSliderBtnActive");
            contentSlidersBtns[slide].lastChild.previousSibling.classList.remove('hidden');
        }
    }
}

hide(0);



window.onclick = function (e) {
    let elem = e ? e.target : window.event.srcElement;
    if (elem.className.includes("content-slider-btn")) {
        this.hide(elem.id)
    }
};
