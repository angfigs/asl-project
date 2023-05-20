function create_alphabet() {
    let alphabet = [];
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        alphabet.push(letter);
    }
    return alphabet;
}

alphabet = create_alphabet()
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

const generate_letter = document.getElementsByClassName('flashcard')[0]; 
const generate_button = document.getElementById('generate_button');
const generate_alphabet_button = document.getElementById('generate_alphabet');
const letter_element = generate_letter.querySelector('.updated_letter');

// Generate a random letter on page load
letter_element.textContent = generate_random_letter();

// Add event listener to the button to generate a new letter or the alphabet in order
generate_button.addEventListener("click", function () {
    letter_element.textContent = generate_random_letter();
});

generate_alphabet_button.addEventListener("click", function () {
    letter_element.textContent = generate_alphabet();
});








// load a random value on the left side - shuffle card function 
// click the card and the answer is revealed in the right 
// click the button to trigger the shuffle card - generate another random card
// load a random value on left side  