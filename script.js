const alphabet_object = {
    A: './images/a.png',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z'
};

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

const generate_letter = document.getElementById('flashcard'); 
const generate_button = document.getElementById('generate_button');
const shuffle_cards_button = document.querySelector('.buttons button:last-of-type');
const generate_alphabet_button = document.getElementById('generate_alphabet');
// const letter_element = generate_letter.querySelector('.updated_letter');
const previous_button = document.getElementById('prev_button')
// Initialize the current flashcard value
const letter_element = document.querySelector('.updated_letter');
// Set the initial flashcard value
let current_flashcard = generate_random_letter();
letter_element.textContent = current_flashcard;


let previous_flashcard_list = []
let index = 1
// Event listener for the previous flashcard button
previous_button.addEventListener('click', function () {
    if (previous_flashcard_list.length === 0) {
        letter_element.textContent = '';
    }
    else if (index === previous_flashcard_list.length) {
        letter_element.textContent = previous_flashcard_list[0];
        index = 1;
        previous_flashcard_list = [];
    }
    else if (index >= 1 && previous_flashcard_list.length != 0) {
        letter_element.textContent = previous_flashcard_list[previous_flashcard_list.length - index];
        index += 1;
    }
});

// Event listener for the alphabet button
generate_alphabet_button.addEventListener('click', function () {
    previous_flashcard = current_flashcard;
    previous_flashcard_list.push(previous_flashcard)
    current_flashcard = generate_alphabet();
    letter_element.textContent = current_flashcard;
});

// Event listener for the next/shuffle cards button
const shuffle_cards = function () {
    previous_flashcard = current_flashcard;
    previous_flashcard_list.push(previous_flashcard)
    current_flashcard = generate_random_letter();
    letter_element.textContent = current_flashcard;
};

generate_button.addEventListener('click', shuffle_cards);
shuffle_cards_button.addEventListener('click', shuffle_cards);

// Change the flashcard on click 
const flashcard = document.getElementById('flashcard');

function add_image(image_path) {
    console.log(image_path)
    const image = document.createElement('img');
    image.src = image_path;

    // Apply custom styles to the image
    image.style.width = '750px';
    image.style.height = '550px';

    flashcard.appendChild(image);
}

function display_image() {
    const current_value = letter_element.textContent;
    if (current_value === current_flashcard) {
        letter_element.textContent = '';
        const image_path = alphabet_object[current_value];
        console.log(image_path)
        add_image(image_path);
    } else {
        console.log(current_value);
        flashcard.removeChild(flashcard.children[1]);
        letter_element.textContent = current_flashcard;
    }
}

flashcard.addEventListener('click', function () {
    this.classList.toggle('opaque');
    display_image();
});