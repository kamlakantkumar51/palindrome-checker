

function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);

    return cleanStr === reverseStr;
}

function palindromChecker(){
    const inputText = document.getElementById("inputText");
    const result = document.getElementById("result");

    if(isPalindrome(inputText.value)){
        result.textContent  = `"${inputText.value}" is a palindrom`
    }else{
        result.textContent  = `"${inputText.value}" is not an palindrom`
    }
    result.classList.add('fadeIn');
    inputText.value = "";

}

document.getElementById('checkBtn').addEventListener("click",palindromChecker);
