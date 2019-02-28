// This can be used to set the Particles Effects.
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#4c477e',
    lineColor: '#2d2a4b'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

var modal = document.querySelector(".modal");
    var trigger = document.getElementById("trigger");
    var closeButton = document.querySelector(".close-button");
console.log(trigger);
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);




function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
