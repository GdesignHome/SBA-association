
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



const arrow = document.querySelector(".arrow");



window.addEventListener("scroll", function(){
    if (window.scrollY>200){
        arrow.style.display="block";
    } else {
        arrow.style.display = "none"
    }
})

arrow.addEventListener("click", function(){
    
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
})


// ------------------------------------------------------------

const target = document.getElementById("target");
// console.log(target)
let array = ["Inner", "Rythm"];
let wordIndex = 0;
let letterIndex = 0;

// target.textContent = array[wordIndex][letterIndex];
const createLetter = function(){
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(function() {
        letter.remove();
    }, 2800)
    
}


 const loop = function(){
    setTimeout(function() {
        if(wordIndex >= array.length){
            wordIndex = 0;
            letterIndex = 0;
            loop();
        }
         else if (letterIndex < array[wordIndex].length){
             createLetter();
             loop();
             letterIndex++;

        } else { 
            wordIndex++;
            letterIndex = 0;
            setTimeout(function() {       
                loop();
            }, 2800);
        }

    },60);

 }

 loop();






