const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ";", ":", "<", ">", ".", ",", "?", "/"];

const charactersEl = document.querySelector("#characters");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const lengthValueEl = document.querySelector("#lengthValue");
const lengthEl = document.querySelector("#length");
const generateBtn = document.querySelector("#generateBtn");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
charactersEl.checked = true;
const containerEl = document.querySelector(".container");



lengthEl.addEventListener("input", () => {
    lengthValueEl.textContent = lengthEl.value < 10 ? `0${lengthEl.value}` : lengthEl.value;
});


function generatePassword() {
    let passwords = [];
    for (let i = 0; i < 2; i++) {
        let arr = [];
        let password = "";
        const includesCharacters = charactersEl.checked;
        const includesNumbers = numbersEl.checked;
        const includesSymbols = symbolsEl.checked;

        if (includesCharacters) {
            arr = arr.concat(characters);
        }
        if (includesNumbers) {
            arr = arr.concat(numbers);
        }
        if (includesSymbols) {
            arr = arr.concat(symbols);
        }

        if (arr.length === 0) {
            arr = characters.concat(numbers, symbols);
        }

        for (let i = 0; i < lengthEl.value; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            password += arr[randomIndex];
        }
        passwords.push(password);
    }

    password1El.textContent = passwords[0];
    password2El.textContent = passwords[1];
}

function dayNight() {
    const dayNightEl = document.querySelector("#dayNight");
    if (dayNightEl.classList.contains("fa-moon")) {
        dayNightEl.classList.remove("fa-moon");
        dayNightEl.classList.add("fa-sun");
        dayNightEl.style.color = "#f5f5f5";
        containerEl.classList.remove("day");
    } else {
        dayNightEl.classList.remove("fa-sun");
        dayNightEl.style.color = "#1f2937";
        dayNightEl.classList.add("fa-moon");
        containerEl.classList.add("day");
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
}

password1El.addEventListener("click", () => copyToClipboard(password1El.textContent));
password2El.addEventListener("click", () => copyToClipboard(password2El.textContent));