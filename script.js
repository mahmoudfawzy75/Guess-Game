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
    'launch', 'latest', 'listen', 'market', 'medium', 'method', 'nation', 'native','absorb', 'admire', 'affect', 'allege', 'anchor', 'animal', 'annual', 'appeal', 'assign', 'attack',
    'author', 'bakery', 'battle', 'beauty', 'become', 'before', 'beggar', 'behave', 'belong', 'beside',
    'better', 'beyond', 'borrow', 'bounce', 'bother', 'bottle', 'bottom', 'bright', 'burden', 'button',
    'cancel', 'candle', 'canvas', 'career', 'carpet', 'carton', 'casual', 'change', 'charge', 'cheese',
    'choice', 'choose', 'church', 'circle', 'client', 'closet', 'coffee', 'column', 'combat', 'comply',
    'convey', 'cookie', 'copper', 'corner', 'couple', 'course', 'create', 'credit', 'crisis', 'custom',
    'damage', 'danger', 'debate', 'decade', 'decent', 'decide', 'defeat', 'defend', 'define', 'degree',
    'demand', 'depend', 'deputy', 'desire', 'detail', 'detect', 'device', 'differ', 'dining', 'direct',
    'divide', 'doctor', 'donate', 'double', 'driven', 'driver', 'during', 'easily', 'effort', 'either',
    'enable', 'ending', 'energy', 'engage', 'engine', 'ensure', 'entire', 'escape', 'estate', 'ethnic',
    'expand', 'expect', 'expert', 'export', 'extend', 'fabric', 'facial', 'factor', 'failed', 'family',
    'famous', 'father', 'fellow', 'female', 'figure', 'filing', 'finger', 'finish', 'flight', 'follow',
    'forest', 'forget', 'formal', 'format', 'former', 'foster', 'fourth', 'friend', 'future', 'gather',
    'gender', 'global', 'golden', 'govern', 'guilty', 'handle', 'health', 'hidden', 'holder', 'honest',
    'impact', 'import', 'income', 'indeed', 'inform', 'injury', 'inside', 'intend', 'invest', 'island',
    'itself', 'junior', 'killed', 'labour', 'laptop', 'larger', 'lasted', 'latest', 'leader', 'league',
    'letter', 'likely', 'listen', 'living', 'locate', 'losing', 'lovely', 'luxury', 'mainly', 'making',
    'manage', 'manner', 'manual', 'margin', 'marine', 'marker', 'market', 'master', 'matter', 'medium',
    'member', 'memory', 'mental', 'merely', 'method', 'middle', 'miller', 'mining', 'minute', 'mirror',
    'mobile', 'modern', 'modest', 'modify', 'module', 'moment', 'mother', 'motion', 'motive', 'moving',
    'murder', 'muscle', 'museum', 'mutual', 'myself', 'nation', 'native', 'nature', 'nearby', 'nearly',
    'neither', 'nobody', 'normal', 'notice', 'notion', 'number', 'object', 'office', 'online', 'option',
    'origin', 'output', 'packet', 'parent', 'partly', 'people', 'period', 'permit', 'person', 'phrase',
    'picked', 'planet', 'player', 'please', 'plenty', 'pocket', 'police', 'policy', 'prefer', 'pretty',
    'prince', 'prison', 'profit', 'proper', 'proven', 'public', 'purely', 'pursue', 'random', 'rarely',
    'rather', 'rating', 'reader', 'really', 'reason', 'recall', 'recent', 'recipe', 'record', 'reduce',
    'reform', 'regard', 'regime', 'region', 'relate', 'relief', 'remain', 'remind', 'remote', 'remove',
    'render', 'repair', 'repeat', 'report', 'rescue', 'resort', 'result', 'return', 'reveal', 'review',
    'reward', 'riding', 'rising', 'robust', 'ruling', 'safely', 'safety', 'salary', 'sample', 'saving',
    'scheme', 'school', 'screen', 'search', 'season', 'second', 'secret', 'sector', 'secure', 'seeing',
    'select', 'seller', 'senior', 'series', 'server', 'settle', 'severe', 'sexual', 'should', 'signal',
    'silent', 'silver', 'simple', 'simply', 'singer', 'single', 'sister', 'slight', 'smooth', 'soccer',
    'social', 'solely', 'sought', 'source', 'speech', 'spirit', 'spoken', 'spread', 'spring', 'square',
    'stable', 'status', 'stayed', 'steady', 'strike', 'string', 'strong', 'struck', 'studio', 'submit',
    'subtle', 'sudden', 'suffer', 'summer', 'summit', 'supply', 'surely', 'symbol', 'target', 'taught',
    'tenant', 'tender', 'tennis', 'thanks', 'theory', 'thirty', 'though', 'threat', 'ticket', 'timely',
    'timing', 'tissue', 'toward', 'travel', 'treaty', 'trying', 'unable', 'unique', 'united', 'unless',
    'unlike', 'update', 'useful', 'valley', 'vendor', 'versus', 'victim', 'voting', 'walker', 'wealth',
    'weekly', 'weight', 'window', 'winner', 'winter', 'within', 'wizard', 'worker', 'writer', 'yellow',
    'younger', 'zipper'
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
