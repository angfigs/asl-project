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

//make an object with key:value pairs
//loop through the key pairs then return the value (img) 
//graph that img to the const flashcard alphabet



const generate_letter = document.getElementById('flashcard'); 
const generate_button = document.getElementById('generate_button');
const generate_alphabet_button = document.getElementById('generate_alphabet');
// const letter_element = generate_letter.querySelector('.updated_letter');
const previous_button = document.getElementById('prev_button')
// Initialize the current flashcard value
let current_flashcard = generate_random_letter();
const letter_element = document.querySelector('.updated_letter');

// Set the initial flashcard value
letter_element.textContent = current_flashcard;

let previous_flashcard_list = []
let index = 1
// Event listener for the previous flashcard button
previous_button.addEventListener('click', function () {
    console.log(previous_flashcard_list)
    if (index === previous_flashcard_list.length) {
        letter_element.textContent = previous_flashcard_list[0];
    }
    else if (index < previous_flashcard_list.length) {
        index = 1;
    }
    else {
        letter_element.textContent = previous_flashcard_list[previous_flashcard_list.length - index];
        index += 1;
    }
    
});

// if the list reaches the end don't print out anymore and empty the list


// Event listener for the alphabet button
generate_alphabet_button.addEventListener('click', function () {
    previous_flashcard = current_flashcard;
    previous_flashcard_list.push(previous_flashcard)
    current_flashcard = generate_alphabet();
    letter_element.textContent = current_flashcard;
});

// Event listener for the next flashcard button
generate_button.addEventListener('click', function () {
    previous_flashcard = current_flashcard;
    previous_flashcard_list.push(previous_flashcard)
    current_flashcard = generate_random_letter();
    letter_element.textContent = current_flashcard;
});






// letter_element.textContent = generate_random_letter();



// generate_alphabet_button.addEventListener('click', function() {
//     letter_element.textContent = generate_alphabet()
// });

// generate_button.addEventListener('click', function() {
//     letter_element.textContent = generate_random_letter();
// });


// change the flashcard on click 
const flashcard = document.getElementById('flashcard');

flashcard.addEventListener('click', function () {
    this.classList.toggle('opaque');
});