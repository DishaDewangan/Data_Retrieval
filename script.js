const saveBut = document.querySelector("#save");
const retBut = document.querySelector("#retrieve");
const textInp = document.querySelector("#textInp");
const output = document.querySelector("#output");

saveBut.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = textInp.value.trim();
    if (inputValue) {
        localStorage.setItem("savedText", inputValue);
        textInp.value = "";
        alert("Text saved successfully!");
    } else {
        alert("Please enter some text.");
    }
});

retBut.addEventListener("click", function (event) {
    event.preventDefault();
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        output.textContent = savedText;
    } else {
        output.textContent = "No text found.";
    }
});
