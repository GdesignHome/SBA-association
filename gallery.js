let slideIndex = 0;

function diapo (){
  const mySlides = document.querySelectorAll(".mySlides");
  mySlides.forEach(function(img,index){
    if(index === slideIndex){
      
      img.style.display = "block";

      

    } else {
     
      img.style.display = "none";
     

      
    }
  });
    slideIndex++;

    if(slideIndex >= mySlides.length){
      slideIndex = 0;
    }
    setTimeout(diapo,7000)
}
diapo();

