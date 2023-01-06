function home_btn() {
    // document.querySelector("#home").style.display = "block";
    // document.querySelector(".section-about").style.display = "none";
    // document.querySelector(".section-1-detail").style.display = "block";
    // document.querySelector(".container-1").style.backgroundImage = "url('img/bg-img.png')";
    // document.querySelector(".container-1").style.display = "contents";

}

function aboutCam() {
    // document.querySelector(".section-about").style.display = "block";
    // document.querySelector(".section-1-detail").style.display = "none";
    // document.querySelector(".container-1").style.backgroundImage = "none";
    // document.querySelector(".container-1").style.display = "contents";
}

var slideIndex = 0;
const b = setInterval(changePic, 2000);

// changePic();
function changePic() {
    var x = document.getElementsByClassName("myDish");
    slideIndex++;

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (slideIndex > x.length) {
        slideIndex = 1;
    }

    x[slideIndex - 1].style.display = "block";
    // setTimeout(changePic, 2000);

}






function bazarJanaHai() {

}

setTimeout(bazarJanaHai, 20000)


alarm1 = setInterval(bazarJanaHai, 20000)
clearInterval(alarm1)