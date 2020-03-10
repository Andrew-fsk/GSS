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

$(document).ready(function () {
    $('.review-slider').slick({
        dots: false,
        arrows: false,
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
    if (elem.className.includes("menu-item")) {
        this.show(elem.id)
    }
};




let menuItems = document.querySelectorAll('.menu-item');
let itemList = document.querySelectorAll('.item-list');

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].setAttribute('id', `${i}`);
}



for (let menuItem of menuItems) {
    menuItem.addEventListener('mouseenter', e => {
        showMenu(e.srcElement.id);
    });
}

for (let item of itemList) {
    item.addEventListener('mouseleave', e => {
        hideMenu(item.index);
    });
}






function hideMenu(id) {
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].style.display = "none"
    }
}


function showMenu(id) {
    for (let i = 0; i < itemList.length; i++) {
        if (i == id) {
            itemList[i].style.display = "flex"
        } else {
            itemList[i].style.display = 'none'
        }
    }
}