var m = document.getElementById("the-modal");
var mc = document.getElementById("the-modal-content");

// Activate the modal
async function show_modal() {
    m.style.display = "block";
};

// Deactivate the modal
window.onclick = function(event) {
    if (event.target == m) {
        // Apply and play the animation for clicking off the modal
        m.style.animation = "blur-out 200ms ease-out 0ms";
        mc.style.animation = "slide-out 200ms ease-out 0ms";

        // Completely hide modal, reset animations
        setTimeout(function() {
            m.style.display = "none";
            m.style.animation = "blur-in 200ms ease-out 0ms";
            mc.style.animation = "slide-in 200ms ease-out 0ms";
        }, 150);
    };
};
