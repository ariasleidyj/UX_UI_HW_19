console.log("Hello world!"); 

console.log("Your index.js file is loaded correctly"); 

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('contactModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Bouncing arrow bottom of full screen
// Fades away as you scroll down

$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
//250 is fade pixels
});