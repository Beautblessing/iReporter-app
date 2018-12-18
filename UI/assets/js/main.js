let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});


// geolocation
let geoCoords = document.getElementById("geo-coordinates");
let geoBtn = document.getElementById("geo-btn");
var geoErr = document.getElementById("geo-err");
geoBtn.onclick = () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        geoErr.textContent = "Geolocation is not supported by this browser.";
    }
};
function showPosition(position) {
    let geo = `Latitude:${position.coords.latitude} Longitude:${position.coords.longitude}`;
    geoCoords.value = geo;
    geoErr.innerHTML = "";
}

function showError(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
        geoErr.textContent = "User denied the request for Geolocation.";
        break;
    case error.POSITION_UNAVAILABLE:
        geoErr.textContent = "Location information is unavailable.";
           
        break;
    case error.TIMEOUT:
        geoErr.textContent = "The request to get user location timed out.";
        break;
    case error.UNKNOWN_ERROR:
        geoErr.textContent = "An unknown error occurred.";
        break;
    }
    geoCoords.value = "";

}


// Modal for delete confirmation 
// Get the modal
let modal = document.getElementById("myModal");
        
// Get the button that opens the modal
let btn = document.getElementById("deleteBtn");
 
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the button for No delete
let btnNo = document.getElementsByClassName("noDelete")[0];
 
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
};
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
 
// When the user clicks on No, close the modal
btnNo.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//

// get geolocation

// let geoData = document.getElementById("geo-data");
// let geoBtn = document.getElementById("geo-btn");
// var x = document.getElementById("demo");
// geoBtn.onclick = () => {

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         x.textContent = "Geolocation is not supported by this browser.";
//     }
// };
// function showPosition(position) {
//     let geo = `Latitude:${position.coords.latitude} Longitude:${position.coords.longitude}`;
//     geoData.value = geo;
//     x.innerHTML = "";
// }

// function showError(error) {
//     switch (error.code) {
//     case error.PERMISSION_DENIED:
//         x.textContent = "User denied the request for Geolocation.";
//         break;
//     case error.POSITION_UNAVAILABLE:
//         x.textContent = "Location information is unavailable.";
           
//         break;
//     case error.TIMEOUT:
//         x.textContent = "The request to get user location timed out.";
//         break;
//     case error.UNKNOWN_ERROR:
//         x.textContent = "An unknown error occurred.";
//         break;
//     }
//     geoData.value = "";

// }