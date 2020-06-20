'use strict'

var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        $("nav").addClass("navbar-dark");
        $("#favicon").attr("href", "/img/favicon dark-16x16.png");
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        $("nav").addClass("navbar-dark");
        $("#favicon").attr("href", "/img/favicon dark-16x16.png");
}
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        $("nav").removeClass("navbar-dark");
        $("#favicon").attr("href", "/img/favicon light-16x16.png");
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

$(document).ready(function () {

    $('.navbar-toggler').on('click', function () {
  
      $('.animado').toggleClass('open');
  });
});

function sidenav() {
    let ancho=document.getElementById("sn").style.width;

    if(ancho=="250px"){
        document.getElementById("sn").style.width="0px";
    }else{
        document.getElementById("sn").style.width="250px";
    }
}