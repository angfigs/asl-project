const alphabet_object = {
    A: 'sa',
    B: 'sb',
    C: 'sc',
    D: '',
    E: '',
    F: '',
    G: '',
    H: '',
    I: '',
    J: '',
    K: '',
    L: '',
    M: '',
    N: '',
    O: '',
    P: '',
    Q: '',
    R: '',
    S: '',
    T: '',
    U: '',
    V: '',
    W: '',
    X: '',
    Y: '',
    Z: ''
};
console.log(Object.keys(alphabet_object).length)


// function create_alphabet() {
//     for (let i = 65; i <= 90; i++) {
//         const letter = String.fromCharCode(i);
//         alphabet.push(letter);
//     }
//     return alphabet;
// }

function create_alphabet(alphabet_obj) {
    let alphabet = []
    for (let key in alphabet_obj) {
        alphabet.push(key);
    }
    return alphabet;
}



let alphabet = create_alphabet(alphabet_object)
function generate_random_letter() {
    alphabet_index = -1
    const random_index = Math.floor(Math.random() * alphabet.length);
    const random_letter = alphabet[random_index];
    return random_letter;
}

alphabet_index = -1
function generate_alphabet() {
    alphabet_index++
    if (alphabet_index === 26) {
        alphabet_index = 0
    }
    return alphabet[alphabet_index]    
}

//store the current letter in a variable and return it when the previous card button is pressed 

// function previous_card() {

// }



const generate_letter = document.getElementById('flashcard_alphabet'); 
const generate_button = document.getElementById('generate_button');
const generate_alphabet_button = document.getElementById('generate_alphabet');
const letter_element = generate_letter.querySelector('.updated_letter');


// function hello() {
//     if (letter_element.textContent === Object.keys(imgs).toString()) {
//         console.log('hi');
//         //return img (value of that key that matches)
//     }
// }


//make an object with key:value pairs
//loop through the key pairs then return the value (img) 
//graph that img to the const flashcard alphabet 


isButtonClicked = false
letter_element.textContent = generate_random_letter();




function alphabet_button() {
    letter_element.textContent = generate_alphabet();
    isButtonClicked = true
    return letter_element.textContent;
}

generate_alphabet_button.addEventListener('click', alphabet_button);

function random_letter_button() {
    letter_element.textContent = generate_random_letter();
    isButtonClicked = true;
    return letter_element.textContent;
}

generate_button.addEventListener('click', random_letter_button);

// console.log(random_letter_button())

function hello() {
    if (alphabet_button() === 'B') {
        console.log('hello')
    }
}


const flashcard_alphabet = document.getElementById('flashcard_alphabet');

flashcard_alphabet.addEventListener('click', function () {
    this.classList.toggle('opaque');
});