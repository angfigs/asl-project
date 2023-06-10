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

function generate_alphabet(alphabet_obj) {
    let alphabet_list = [];
    for (let key in alphabet_obj) {
        if (key === '') {
            ;
        } else {
            alphabet_list.push(key);
        }
    }
    return alphabet_list;
}

let alphabet = generate_alphabet(alphabet_object);
let alphabet_index = -1;

function shuffle_alphabet() {
    alphabet_index++;
    if (alphabet_index === 26) {
        alphabet_index = 0;
    }
    return alphabet[alphabet_index];
}

function generate_random_letter() {
    const random_index = Math.floor(Math.random() * alphabet.length);
    const random_letter = alphabet[random_index];
    return random_letter;
}

const next_card_button = document.getElementById('next_button');
const shuffle_cards_button = document.querySelector('.buttons button:last-of-type');
const shuffle_alphabet_button = document.getElementById('shuffle_alphabet_button');
const previous_button = document.getElementById('previous_button');
const flashcard = document.getElementById('flashcard');
const current_letter = document.querySelector('.updated_letter');

let flashcard_letter = generate_random_letter();
current_letter.textContent = flashcard_letter;

let previous_flashcard_list = [];
let index = 1;
previous_button.addEventListener('click', function () {
    remove_image();
    if (previous_flashcard_list.length === 0) {
        flashcard_letter = '';
        current_letter.textContent = flashcard_letter;
    }
    else if (index === previous_flashcard_list.length) {
        flashcard_letter = previous_flashcard_list[0];
        current_letter.textContent = flashcard_letter
        index = 1;
        previous_flashcard_list = [];
    }
    else if (index >= 1 && previous_flashcard_list.length != 0) {
        flashcard_letter = previous_flashcard_list[previous_flashcard_list.length - index];
        current_letter.textContent = flashcard_letter;
        index++;
    }
});

shuffle_alphabet_button.addEventListener('click', function () {
    remove_image();
    previous_flashcard = flashcard_letter;
    previous_flashcard_list.push(previous_flashcard)
    flashcard_letter = shuffle_alphabet();
    current_letter.textContent = flashcard_letter;
});

function shuffle_cards() {
    remove_image();
    previous_flashcard = flashcard_letter;
    previous_flashcard_list.push(previous_flashcard)
    flashcard_letter = generate_random_letter();
    current_letter.textContent = flashcard_letter;
};

next_card_button.addEventListener('click', shuffle_cards);
shuffle_cards_button.addEventListener('click', shuffle_cards);

function add_image(image_path) {
    const image = document.createElement('img');
    image.src = image_path;
    image.style.width = '750px';
    image.style.height = '550px';
    image.style.opacity = '0';
    image.style.transition = 'opacity 1s ease-in-out';
    flashcard.appendChild(image);
    setTimeout(() => {
        image.style.opacity = '1';
    }, 10);
};

function remove_image() {
    const existing_image = flashcard.querySelector('img');
    if (existing_image) {
        flashcard.removeChild(existing_image);
    }
};

let img_on = true;
function display_image() {
    if (img_on) {
        const image_path = alphabet_object[flashcard_letter];
        add_image(image_path);
        current_letter.textContent = '';
        img_on = false;
    } else {
        remove_image();
        current_letter.textContent = flashcard_letter;
        img_on = true;
    }
};

flashcard.addEventListener('click', function () {
    display_image();
});