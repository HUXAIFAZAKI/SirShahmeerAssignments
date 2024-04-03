function palindrome(str:string)
{
    str = str.toLowerCase();
    let revStr = str.split("").reverse().join("")

    if(str === revStr)
    {
        console.log("Is Palindrome");
    }
    else
    {
        console.log("Not a Palindrome");
    }
}

palindrome("eye");