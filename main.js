// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Grabs all the like buttons
let likeElement = document.querySelectorAll(".like-glyph")

//Loops through HTML collection to add event listener to ever element
likeElement.forEach(function(element) {
  element.addEventListener("click", likeButton)})

//Changes button depending on it being FULL or EMPTY
  function likeButton(e) {
    let heart = e.target
    mimicServerCall()
    .then(() => {
      if(heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.className = "activated-heart"
      } else {
        heart.innerText = EMPTY_HEART
        heart.className = " "
      }
    })

    .catch((error) => {
      const popUp = document.querySelector("#modal")
      popUp.className = " "
      popUp.innerText = error
      setTimeout(() => popUp.className = "hidden", 3000)
    })
  }

  












//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
