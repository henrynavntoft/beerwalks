window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-800px";
}
}

document.getElementById("some-button").style.display = "none";

function showStuff() {
    document.getElementById("some-button").style.display = "inline";
}

function myFunction() {
    window.location = "project.html"
}

setTimeout(showStuff, 52000);

