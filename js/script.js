$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 700;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.style.display = 'block';
});
btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
});
window.addEventListener('appinstalled', (evt) => {
    app.logEvent('a2hs', 'installed');
});

$(document).ready(function() {

    'use strict';

    var c, currentScrollTop = 0,
        header = $('.headerstyle');

    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = header.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            header.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            header.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

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