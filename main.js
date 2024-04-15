// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeIcon = document.querySelectorAll(".like-glyph");
const errorModal =document.querySelector(".modal")

mimicServerCall()
.then(() => {
  likeIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.innerHTML === FULL_HEART
      ? (icon.innerText = EMPTY_HEART)
      : (icon.innerText = FULL_HEART);
      icon.classList.toggle("activated-heart");
    });
  });
})
.catch(() => {
  errorModal.textContent = "Err";
  errorModal.classList.remove("hidden");
  setTimeout(() => errorModal.classList.add("hidden"), 3000)
})


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