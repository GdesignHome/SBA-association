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