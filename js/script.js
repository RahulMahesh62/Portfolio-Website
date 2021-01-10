$(document).ready(function() { preloaderFadeOutTime = 350, $(".spinner-wrapper").fadeOut(preloaderFadeOutTime) });
const inputs = document.querySelectorAll(".input");

function focusFunc() { this.parentNode.classList.add("focus") }

function blurFunc() { let t = this.parentNode; "" == this.value && t.classList.remove("focus") }

function scrollToTop() { $(window).scrollTop(0) }

function menuToggle() { document.getElementById("menu-overlay").classList.toggle("actva"), document.getElementById("toggle-icon").classList.toggle("actva") }
inputs.forEach(t => { t.addEventListener("focus", focusFunc), t.addEventListener("blur", blurFunc) }), $(document).ready(function() { $(".sbtn").click(function() { var t = $(this).attr("data-filter"); "all" == t ? $(".filter").show("2000") : ($(".filter").not("." + t).hide("2000"), $(".filter").filter("." + t).show("2000")) }), $(".snav a").click(function() { $(this).addClass("actv").siblings().removeClass("actv") }) }), document.querySelector(".toggle").addEventListener("click", function() { this.classList.add("animate"), setTimeout(() => { this.classList.toggle("active"), document.querySelector(".wave").classList.toggle("active"), document.documentElement.classList.toggle("theme-dark") }, 150), setTimeout(() => this.classList.remove("animate"), 300) }), $(document).ready(function() { $(".tech-grid").hide(), $(".hidebtn").hide(), $(".showbtn").click(function() { $(".showbtn").hide(), $(".hidebtn").show(), $(".tech-grid").show() }), $(".hidebtn").click(function() { $(".showbtn").show(), $(".hidebtn").hide(), $(".tech-grid").hide() }) });

VanillaTilt.init(document.querySelectorAll(".skills .skill"), {
    max: 25,
    speed: 450,
});

$('#toggle-icon').click(function() {
    $(this).toggleClass('open');
});


$('#menu-overlay li').on('click', function() {
    $("#menu-overlay").hide();
    $("#toggle-icon").removeClass("open");
    // $("#toggle-icon").addClass("open");
    $('#menu-overlay').toggleClass('actva').show();
});

