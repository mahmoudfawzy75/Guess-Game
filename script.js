// إعداد خيارات اللعبة
let gameName = 'Guess The Word';
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Mahmoud Fawzy`;

// إعداد خيارات اللعبة
let numbersOfTries = 6;
let numbersOfLetters = 6;
let currentTry = 1;

// إدارة الكلمات
let wordToGuess = '';
const words = [
    'create', 'update', 'delete', 'master', 'branch', 'mainly', 'python', 'school',
    'submit', 'layout', 'camera', 'custom', 'report', 'filter', 'button', 'driver',
    'system', 'author', 'backup', 'browse', 'charge', 'choose', 'client', 'coffee',
    'column', 'cookie', 'course', 'credit', 'design', 'device', 'editor', 'export',
    'follow', 'format', 'global', 'import', 'laptop', 'leader', 'letter', 'listen',
    'manage', 'module', 'object', 'option', 'output', 'policy', 'prefer', 'random',
    'resize', 'return', 'review', 'script', 'server', 'source', 'speech', 'status',
    'stream', 'submit', 'symbol', 'target', 'theory', 'update', 'upload', 'vector',
    'window', 'wizard', 'worker', 'action', 'agenda', 'answer', 'attack', 'ballot',
    'beyond', 'camera', 'career', 'castle', 'charge', 'choice', 'clause', 'commit',
    'defend', 'define', 'demand', 'double', 'effort', 'engine', 'ensure', 'expand',
    'finish', 'forget', 'future', 'gather', 'handle', 'impact', 'income', 'invest',
    'launch', 'latest', 'listen', 'market', 'medium', 'method', 'nation', 'native'
];
  // اختيار الكلمة عشوائياً
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(wordToGuess);

let messageArea = document.querySelector(".message");

function genrateInput() {
    const inputsContainer = document.querySelector(".inputs");
    // إنشاء div لكل محاولة
    for (let i = 1; i <= numbersOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try ${i}</span>`;

        if (i !== 1) { tryDiv.classList.add("disabled-inputs"); }
        // إنشاء الحقول
        for (let x = 1; x <= numbersOfLetters; x++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter${x}`;
            input.setAttribute("maxLength", "1");
            tryDiv.appendChild(input);
        }
        inputsContainer.appendChild(tryDiv);
    }

    // فوكس على أول عنصر
    inputsContainer.children[0].children[1].focus();

    // قفل كل الحقول ماعدا الأول
    const inputsInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputsInDisabledDiv.forEach((input) => (input.disabled = true));
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
        // تحويل كل الحروف لأحرف كبيرة
        input.addEventListener("input", function () {
            this.value = this.value.toUpperCase();
            // الانتقال التلقائي للمدخل التالي
            const nextInput = inputs[index + 1];
            if (nextInput && this.value.length > 0) nextInput.focus();
            
        });
        // nextInput.children[i].children[1].focus();
        
        // التنقل باستخدام الأسهم و backspace و enter
        input.addEventListener("keydown", function (event) {
            const currentIndex = Array.from(inputs).indexOf(event.target);
            if (event.key === "ArrowRight") {
                const nextInput = currentIndex + 1;
                if (nextInput < inputs.length) inputs[nextInput].focus();
            } else if (event.key === "ArrowLeft") {
                const prevInput = currentIndex - 1;
                if (prevInput >= 0) inputs[prevInput].focus();
            } else if (event.key === "Backspace") {
                if (this.value === "") {
                    const prevInput = currentIndex - 1;
                    if (prevInput >= 0) inputs[prevInput].focus();
                }
            } else if (event.key === "Enter") {
                document.querySelector(".check").click();
            }
        });
    });
}

const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handleGuesses);

function handleGuesses() {
    let successGuess = true;
    for (let i = 1; i <= numbersOfLetters; i++) {
        const inputField = document.querySelector(`#guess-${currentTry}-letter${i}`);
        const letter = inputField.value.toLowerCase();
        const actualLetter = wordToGuess[i - 1];
        // منطق اللعبة
        if (letter === actualLetter) {
            inputField.classList.add("yes-in-place");
        } else if (wordToGuess.includes(letter) && letter !== "") {
            inputField.classList.add("not-in-place");
            successGuess = false;
        } else {
            inputField.classList.add("no");
            successGuess = false;
        }
    }

    // في حالة الإجابة الصحيحة
    if (successGuess) {
        messageArea.innerHTML = `congrats! you guessed the word`;
        document.querySelectorAll("input").forEach(input => input.disabled = true);
        guessButton.disabled = true;
        guessButton.innerHTML = "Play Again";
        guessButton.disabled = false;

        // عند الضغط على "إلعب مره اخرى" قم بإعادة تحميل الصفحة
        guessButton.addEventListener("click", function () {
            location.reload();
        });
    } else {
        // الانتقال إلى المحاولة التالية
        document.querySelectorAll(`.try-${currentTry} input`).forEach(input => input.disabled = true);
        currentTry++;

        if (currentTry <= numbersOfTries) {
            const nextTryDiv = document.querySelector(`.try-${currentTry}`);
            nextTryDiv.classList.remove("disabled-inputs");
            document.querySelectorAll(`.try-${currentTry} input`).forEach(input => input.disabled = false);
            nextTryDiv.children[0].focus();
        } else {
            messageArea.innerHTML = `you lost! the word was<span>${wordToGuess}</span>`;
            guessButton.disabled = true;
            guessButton.innerHTML = "Try Again";
            guessButton.disabled = false;

            // عند الضغط على "إعادة المحاولة" قم بإعادة تحميل الصفحة
            guessButton.addEventListener("click", function () {
                location.reload();
            });
        }
    }
}

const hintButton = document.querySelector(".hint");
let hintCounter = 0; // عدد مرات طلب المساعدة

hintButton.addEventListener("click", function () {
    let hintSpan = document.querySelector(".hint span");
    if (hintCounter === 0) {
        // المرة الأولى: أول وآخر حرف
        hintSpan.innerHTML = `The first letter is: ${wordToGuess[0].toUpperCase()} and the last letter is: ${wordToGuess[wordToGuess.length - 1].toUpperCase()}`;
        hintCounter++;
    } else if (hintCounter === 1) {
        // المرة الثانية: أول، ثالث، وآخر حرف
        hintSpan.innerHTML = `The first letter is: ${wordToGuess[0].toUpperCase()}, the third letter is: ${wordToGuess[2].toUpperCase()}, and the last letter is: ${wordToGuess[wordToGuess.length - 1].toUpperCase()}`;
        hintCounter++;
    } else {
        // إذا تم طلب المساعدة أكثر من مرتين، يمكنك إما إظهار نفس التلميح أو التعامل معها بشكل آخر
        hintSpan.innerHTML = `No more hints available!`;
    }
});


window.onload = function () {
    genrateInput();
};
