const medentryList = document.getElementById("medentry-ul");
const medentryShowButton = document.querySelector("#medentry-li .show-toggle");
const medentryHideButton = document.querySelector("#medentry-ul .show-toggle");

medentryShowButton.addEventListener("click", () => {
    console.log("Show button working")
    medentryList.style.display = "block";
    medentryHideButton.style.display = "block";
    medentryShowButton.style.display = "none";

})

medentryHideButton.addEventListener("click", () => {
    medentryList.style.display = "none";
    medentryHideButton.style.display = "none";
    medentryShowButton.style.display = "block";
})