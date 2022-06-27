function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (myBody.classList.contains(darkModeClass)) {
        myBtn.innerHTML = lightMode;
        myH1.innerHTML = darkMode + " ON";
        return;
    }

    myBtn.innerHTML = darkMode;
    myH1.innerHTML = lightMode + " ON";
}

const myBody = document.getElementsByTagName("body")[0];
const myH1 = document.getElementsByTagName("h1")[0];
const myBtn = document.getElementById("mode-selector");
const myFooter = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

const listener = function () {
    myBtn.addEventListener("click", () => {
        myBody.classList.toggle(darkModeClass);
        myH1.classList.toggle(darkModeClass);
        myBtn.classList.toggle(darkModeClass);
        myFooter.classList.toggle(darkModeClass);

        changeText();
    });
};

listener();