
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
    footer.classList.remove("active")

});




window.addEventListener("scroll", function() {
    // console.log('scroll');
    if (window.scrollY > 0) {
        header.style.background = "white";
        header.classList.add("active")
    }
    else {
        header.classList.remove("active");
    }

})

const footer= document.querySelector(".footerContent");
// console.log(footer);
const foot = document.querySelector("footer");
const contact= document.querySelector(".nav-link5");

const contact2= document.querySelector(".nav-link1");
// console.log(contact);

    contact.addEventListener("click",function(){
        console.log('click');
        footer.classList.toggle("active")
        
    });
    contact2.addEventListener("click",function(){
        console.log('click2');
        footer.classList.toggle("active")
        
    });

    
    


    






// document.oncontextmenu = function(){
//     return false;
// }



const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
   
})

window.addEventListener("scroll", function(){
    if (window.scrollY>200){
        arrow.style.display="block";
    } else {
        arrow.style.display = "none"
    }
})

// ------------------------------------------------------------





// Initial call to start the slideshow




