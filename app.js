let alphabets = [
    'a', 'b', 'c', 'd', 'e',  
    'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 
    'x', 'y', 'z'
]
let number = [
        '1', '2', '3', '4',
        '5', '6', '7', '8','9'
]
let symmbols = ['!','@','#','$','&','*']


function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

let password = document.querySelector('.password')
function generatePassword() {
    let lengthOfPassword = +prompt("Enter the length of the password you want.");
    if (isNaN(lengthOfPassword) || lengthOfPassword <= 0) {
        alert("Invalid input. Please enter a valid length for the password.");
        return;
    }
    password.innerHTML = ''
    for (let i = 0; i < lengthOfPassword; i++) {
        let p = document.getElementById('p')
            const random =  getRandomElement([alphabets,number,symmbols])
                // password.innerHTML += `your password :`
                p.innerHTML += `${getRandomElement(random)}`
        }
}
function reset() {
    let p = document.getElementById('p')
    p.innerHTML = ''
    
}


