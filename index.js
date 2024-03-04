const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charSpecial = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


let passElL = document.getElementById("pass1")
let passElR = document.getElementById("pass2")
let generateBtn = document.getElementById("generate-btn") 
let settingsBtn = document.getElementById("settings-btn")

let PassLenght = document.getElementById("length")
let hasNumbers = document.getElementById("hasNumber")
let hasSpecial = document.getElementById("hasSymbols")
console.log(hasNumbers)

function passGen(){
    let pLen = PassLenght.valueAsNumber
    let char = characters
    if (hasNumbers.checked === true){
        char = char.concat(charNums)
    }
    if (hasSpecial.checked === true){
        char = char.concat(charSpecial)
    }
    console.log(char)
    let result = ""
    for (let i = 0; i < pLen ; i++){
        let rNum = Math.floor(Math.random() * char.length)
        result += char[rNum]
    }
    return result
}
generateBtn.addEventListener("click", setElements)

function setElements(){
    passElL.textContent = passGen()
    passElR.textContent = passGen()
}

function copyText(textC){
    navigator.clipboard.writeText(textC);
}

passElL.addEventListener("click", () => copyText(passElL.textContent))
passElR.addEventListener("click", () => copyText(passElR.textContent))

settingsBtn.addEventListener("click", toggleSettings)
function toggleSettings() {
    let settingsEl = document.getElementById("settings-div")
    if(settingsEl.style.display === 'flex'){
        settingsEl.style.display = 'none'
    } else {
        settingsEl.style.display = 'flex'
    }
}
