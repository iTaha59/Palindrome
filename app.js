function palindrome(word) {
    word = word.toUpperCase();
    var count = [];
    for (var i = 0; i < word.length; i++) {
        var reverse = word[i];
        count.unshift(reverse);
    }

    var check = count.join("");
    if (check == word) {
        alert("Yes");
    } else {
        alert("No");
    }
}

palindrome(prompt("Type a word to check whether it is a palindrome or not"));