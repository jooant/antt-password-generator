const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = characters.filter(char => /[a-zA-Z]/.test(char))
const numbers = characters.filter(char => /[0-9]/.test(char))
const symbols = characters.filter(char => /[^a-zA-Z0-9]/.test(char))

let passwordEl1 = document.getElementById("password-1")
let passwordEl2 = document.getElementById("password-2")

let activeCharacters=""


function generate(){
    updatedChar = updateCharacter()
    passwordEl1.textContent = ""
    passwordEl2.textContent = ""
    for(let i = 0; i < 15; i++){
        passwordEl1.textContent += updatedChar[Math.floor(Math.random() * updatedChar.length)]
        passwordEl2.textContent += updatedChar[Math.floor(Math.random() * updatedChar.length)]
    }
}

function clickOnCopy(el){
    const original = el.textContent.trim()
    if(original === ""){
        let mess = "password hasn't been generated!!!"
        fadeInOut(el, mess, original)
        return;  
    }
    navigator.clipboard.writeText(original);
    let mess = "Copied"
    fadeInOut(el, mess, original)
}

function fadeInOut(el, message, text){
    el.style.opacity = 0
    setTimeout(() => {
        el.textContent = message;
        el.style.opacity = 1
    }, 200);

    setTimeout(() => {
        el.style.opacity = 0
        setTimeout(() => {
            el.textContent = text
            el.style.opacity = 1
        }, 200)
    }, 1200)
}

function updateCharacter(){
    activeCharacters = letters
    if(document.getElementById("numbers").checked === true){
        activeCharacters = activeCharacters.concat(numbers)
    }
    if(document.getElementById("symbols").checked === true) {
        activeCharacters = activeCharacters.concat(symbols)
    }
    return activeCharacters
}





