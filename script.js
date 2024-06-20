function isPalindrome(word) {
    var cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

function checkPalindrome() {
    var word = document.getElementById("wordInput").value;
    var result = isPalindrome(word);
    var resultText = result ? "adalah palindrom" : "bukan palindrom";
    document.getElementById("result").innerText = `Kata "${word}" ${resultText}.`;
}

document.getElementById("checkButton").addEventListener("click", checkPalindrome);