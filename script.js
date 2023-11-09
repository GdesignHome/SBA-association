const bar = document.querySelector(".barmenu");
// console.log(bar);
const nav = document.querySelector(".nav2");
// console.log(nav);
const header = document.querySelector("header");

var scroolTopValue = 400;

nav.scrollTop = scroolTopValue;

bar.addEventListener("click", function() {
    // console.log('click');
    bar.classList.toggle("active");
    nav.classList.toggle("active");
    header.classList.toggle("active");

});



window.addEventListener("scroll", function() {
    // console.log('scroll');
    if (window.scrollY > 0) {
        header.style.background = "white";
    }
    else {
        header.style.background = "transparent";
    }

})


// console.log(homeImg);
document.oncontextmenu = function(){
    return false;
}