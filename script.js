const homeDropdown = document.getElementById("home__dropdown");
const featureDropdown = document.getElementById("feature__dropdown");
const megamenuDropdown = document.getElementById("megamenu__dropdown");
const pageDropdown = document.getElementById("page__dropdown");
const bodyaside = document.getElementById("body__aside");
const bodymain = document.getElementById("body__main");
const formopen = document.getElementById("form-open");
const headersearch = document.getElementById("headersearch");
const scrollaside = document.getElementById("scroll-aside");
const scrollaside2 = document.getElementById("scroll-aside2");

function showHomeDropdown() {
  homeDropdown.classList.remove("d-none");
  homeDropdown.classList.add("d-block");
  homeDropdown.classList.add("animate-menu");
}

function hideHomeDropdown() {
  homeDropdown.classList.remove("d-block");
  homeDropdown.classList.add("d-none");
  homeDropdown.classList.remove("animate-menu");
}

function showFeatureDropdown() {
  featureDropdown.classList.remove("d-none");
  featureDropdown.classList.add("d-block");
  featureDropdown.classList.add("animate-menu");
}

function hideFeatureDropdown() {
  featureDropdown.classList.remove("d-block");
  featureDropdown.classList.add("d-none");
  featureDropdown.classList.remove("animate-menu");
}

function showmegamenuDropdown() {
  megamenuDropdown.classList.remove("d-none");
  megamenuDropdown.classList.add("d-block");
  megamenuDropdown.classList.add("animate-menu");
}

function hidemegamenuDropdown() {
  megamenuDropdown.classList.remove("d-block");
  megamenuDropdown.classList.add("d-none");
  megamenuDropdown.classList.remove("animate-menu");
}

function showPageDropdown() {
  pageDropdown.classList.remove("d-none");
  pageDropdown.classList.add("d-block");
  pageDropdown.classList.add("animate-menu");
}

function hidePageDropdown() {
  pageDropdown.classList.remove("d-block");
  pageDropdown.classList.add("d-none");
  pageDropdown.classList.remove("animate-menu");
}

function formdblock() {
  formopen.classList.remove("d-none");
  formopen.classList.add("d-flex");
  formopen.classList.add("animate-bottom");
  headersearch.classList.add("d-none");
}

function formclose() {
  formopen.classList.remove("d-flex");
  formopen.classList.add("d-none");
  formopen.classList.remove("animate-bottom");
  headersearch.classList.remove("d-none");
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 1000) {
    megamenuDropdown.classList.remove("position-absolute");
    megamenuDropdown.classList.remove("animate-menu");
    megamenuDropdown.classList.add("position-sticky");
    featureDropdown.classList.remove("position-absolute");
    featureDropdown.classList.remove("animate-menu");
    featureDropdown.classList.add("position-sticky");
    homeDropdown.classList.remove("position-absolute");
    homeDropdown.classList.remove("animate-menu");
    homeDropdown.classList.add("position-sticky");
    pageDropdown.classList.remove("position-absolute");
    pageDropdown.classList.remove("animate-menu");
    pageDropdown.classList.add("position-sticky");
    scrollaside.classList.add("d-none");
  } else {
    megamenuDropdown.classList.remove("position-sticky");
    megamenuDropdown.classList.add("position-absolute");
    megamenuDropdown.classList.add("animate-menu");
    featureDropdown.classList.remove("position-sticky");
    featureDropdown.classList.add("position-absolute");
    featureDropdown.classList.add("animate-menu");
    homeDropdown.classList.remove("position-sticky");
    homeDropdown.classList.add("position-absolute");
    homeDropdown.classList.add("animate-menu");
    pageDropdown.classList.remove("position-sticky");
    pageDropdown.classList.add("position-absolute");
    pageDropdown.classList.add("animate-menu");
    scrollaside.classList.remove("d-none");
  }
});

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    scrollaside2.classList.remove("d-none");
    scrollaside2.classList.add("d-flex");
  } else {
    scrollaside2.classList.remove("d-flex");
    scrollaside2.classList.add("d-none");
  }
};
