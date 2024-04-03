"use strict";
function palindrome(str) {
    str = str.toLowerCase();
    let revStr = str.split("").reverse().join("");
    if (str === revStr) {
        console.log("Is Palindrome");
    }
    else {
        console.log("Not a Palindrome");
    }
}
palindrome("eye");
