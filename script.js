// Get the envelope
const envelope = document.getElementById("envelope");

// Get the letter overlay
const letterOverlay =
    document.getElementById("letterOverlay");

// Get the close button
const closeButton =
    document.getElementById("closeButton");


// ============================
// OPEN LETTER
// ============================

envelope.addEventListener("click", function () {

    letterOverlay.classList.add("show");

});


// ============================
// CLOSE LETTER
// ============================

closeButton.addEventListener("click", function () {

    letterOverlay.classList.remove("show");

});


// ============================
// CLOSE WHEN CLICKING OUTSIDE
// ============================

letterOverlay.addEventListener("click", function(event) {

    if (event.target === letterOverlay) {

        letterOverlay.classList.remove("show");

    }

});