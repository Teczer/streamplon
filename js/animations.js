let inputsearch = document.getElementById("search");
let loupe = document.getElementById("loupe");

let swapinput = true;

function animateSearchInput() {
  if (swapinput == false) {
    inputsearch.style.width = "0px";
    swapinput = true;
  } else {
    inputsearch.style.width = "150px";
    swapinput = false;
  }
}

function showMovieDescription(movieDescriptionId) {
  const movieDescription = document.getElementById(movieDescriptionId);
  movieDescription.style.height = "200px";
  movieDescription.parentElement.style.zIndex = "1";
}

function hideMovieDescription(movieDescriptionId) {
  const movieDescription = document.getElementById(movieDescriptionId);
  movieDescription.style.height = "11px";
  movieDescription.parentElement.style.zIndex = "0";
}
