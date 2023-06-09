const alphabet_object = {
    A: './images/alphabet/a.png',
    B: './images/alphabet/b.png',
    C: './images/alphabet/c.png',
    D: './images/alphabet/d.png',
    E: './images/alphabet/e.png',
    F: './images/alphabet/f.png',
    G: './images/alphabet/g.png',
    H: './images/alphabet/h.png',
    I: './images/alphabet/i.png',
    J: './images/alphabet/j.gif',
    K: './images/alphabet/k.png',
    L: './images/alphabet/l.png',
    M: './images/alphabet/m.png',
    N: './images/alphabet/n.png',
    O: './images/alphabet/o.png',
    P: './images/alphabet/p.png',
    Q: './images/alphabet/q.png',
    R: './images/alphabet/r.png',
    S: './images/alphabet/s.png',
    T: './images/alphabet/t.png',
    U: './images/alphabet/u.png',
    V: './images/alphabet/v.png',
    W: './images/alphabet/w.png',
    X: './images/alphabet/x.png',
    Y: './images/alphabet/y.png',
    Z: './images/alphabet/z.gif',
    '': './images/alphabet/dance.gif',
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

// Change the flashcard on click 
const flashcard = document.getElementById('flashcard');

function add_image_element(image_path) {
    const image = document.createElement('img');
    image.src = image_path;
    image.style.width = '750px';
    image.style.height = '550px';
    image.style.opacity = '0'; 
    image.style.transition = 'opacity 0.5s ease-in-out';
    flashcard.appendChild(image);
    setTimeout(() => {
        image.style.opacity = '1';
    }, 10);
}


//Check if an image element already exists and remove it
function remove_image() {
    const existingImage = flashcard.querySelector('img');
    if (existingImage) {
        flashcard.removeChild(existingImage);
    }
}

img_on = true
function display_image() {
    if (img_on === true) {
        letter_element.textContent = '';
        const image_path = alphabet_object[current_flashcard];
        remove_image();
        add_image_element(image_path);
        img_on = false;
    } else {
        remove_image();
        letter_element.textContent = current_flashcard;
        img_on = true;
    }
}

flashcard.addEventListener('click', function () {
    this.classList.toggle('opaque');
    display_image();
});

let previous_flashcard_list = []
let index = 1
// Event listener for the previous flashcard button
previous_button.addEventListener('click', function () {
    if (previous_flashcard_list.length === 0) {
        current_flashcard = '';
        letter_element.textContent = current_flashcard;
    }
    else if (index === previous_flashcard_list.length) {
        current_flashcard = previous_flashcard_list[0];
        letter_element.textContent = current_flashcard
        index = 1;
        previous_flashcard_list = [];
    }
    else if (index >= 1 && previous_flashcard_list.length != 0) {
        current_flashcard = previous_flashcard_list[previous_flashcard_list.length - index];
        letter_element.textContent = current_flashcard;
        index++;
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
function shuffle_cards() {
    previous_flashcard = current_flashcard;
    previous_flashcard_list.push(previous_flashcard)
    current_flashcard = generate_random_letter();
    letter_element.textContent = current_flashcard;
};

generate_button.addEventListener('click', shuffle_cards);
shuffle_cards_button.addEventListener('click', shuffle_cards);