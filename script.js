//SHARED JS 

//function to create a list of all the key values in an object 
function create_key_list(object) {
    let key_list = [];
    for (let key in object) {
        if (key === '') {
            ;
        } else {
            key_list.push(key);
        };
    };
    return key_list;
};

//function to shuffle items in list of key
let list_index = -1;
function shuffle_key_list(key_list) {
    list_index++;
    if (list_index === key_list.length) {
        list_index = 0;
    };
    return key_list[list_index];
};

//function to get random element from list
function get_random_element(key_list) {
    list_index = -1;
    const random_index = Math.floor(Math.random() * key_list.length);
    const random_element = key_list[random_index];
    return random_element;
};

const shuffle_alphabet_button = document.getElementById('shuffle_alphabet_button');
const previous_button = document.getElementById('previous_button');
const next_card_button = document.getElementById('next_button');
const shuffle_cards_button = document.querySelector('.buttons button:last-of-type');
const flashcard = document.getElementsByClassName('flashcard')[0];
const current_output = document.querySelector('.updated_output');

//function to create previous button event listener
let previous_flashcard_output = [];
let flashcard_index = 1;
previous_button.addEventListener('click', function () {
    list_index = -1;
    remove_image();
    if (previous_flashcard_output.length === 0) {
        flashcard_output = '';
        current_output.textContent = flashcard_output;
    }
    else if (flashcard_index === previous_flashcard_output.length) {
        flashcard_output = previous_flashcard_output[0];
        current_output.textContent = flashcard_output
        flashcard_index = 1;
        previous_flashcard_output = [];
    }
    else if (flashcard_index >= 1 && previous_flashcard_output.length != 0) {
        flashcard_output = previous_flashcard_output[previous_flashcard_output.length - flashcard_index];
        current_output.textContent = flashcard_output;
        flashcard_index++;
    };
});

//function to output random shuffle from the list of keys
function shuffle_cards(key_list) {
    remove_image();
    previous_flashcard = flashcard_output;
    previous_flashcard_output.push(previous_flashcard);
    flashcard_output = get_random_element(key_list);
    current_output.textContent = flashcard_output;
};

//function to create img element
function add_image(image_path) {
    const image = document.createElement('img');
    image.src = image_path;
    image.style.opacity = '0';
    image.style.transition = 'opacity 1s ease-in-out';
    flashcard.appendChild(image);
    function update_image_size() {
        const window_width = window.innerWidth;
        if (window_width <= 785) {
            image.style.width = '450px';
            image.style.height = '550px';
        } else {
            image.style.width = '750px';
            image.style.height = '550px';
        };
    };
    update_image_size();
    window.addEventListener('resize', update_image_size);
    setTimeout(() => {
        image.style.opacity = '1';
    }, 10);
};

//function to remove img if it exists
function remove_image() {
    const existing_image = flashcard.querySelector('img');
    if (existing_image) {
        flashcard.removeChild(existing_image);
    };
};

//function to display img on web page
function display_image(object) {
    const existing_image = flashcard.querySelector('img');
    if (existing_image) {
        remove_image();
        current_output.textContent = flashcard_output;
    } else {
        const image_path = object[flashcard_output];
        add_image(image_path);
        current_output.textContent = '';
    };
};