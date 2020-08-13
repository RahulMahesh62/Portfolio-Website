$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 350;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function scrollToTop() {
    $(window).scrollTop(0);
}

$(document).ready(function() {
    $(".sbtn").click(function() {
        var name = $(this).attr("data-filter");
        if (name == "all") {
            $(".filter").show("2000");
        } else {
            $(".filter").not("." + name).hide("2000");
            $(".filter").filter("." + name).show("2000");
        }
    });
    $(".snav a").click(function() {
        $(this).addClass("actv").siblings().removeClass("actv");
    });
});

document.querySelector('.toggle').addEventListener('click', function() {
    this.classList.add('animate');

    setTimeout(() => {
        this.classList.toggle('active');
        document.querySelector('.wave').classList.toggle('active');
        document.documentElement.classList.toggle('theme-dark');
    }, 150);

    setTimeout(() => this.classList.remove('animate'), 300);
});

function menuToggle() {
    var mnav = document.getElementById('menu-overlay');
    mnav.classList.toggle('actva');
    var mnav = document.getElementById('toggle-icon');
    mnav.classList.toggle('actva');
}