function generate_letter() {
    let alphabet = [];
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        alphabet.push(letter);
    }
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    return randomLetter;
}

console.log(generate_letter());

// Get the HTML element where you want to display the result
document.getElementsByClassName("flashLeft").innerHTML = "Hello!"




// load a random value on the left side - shuffle card function 
// click the card and the answer is revealed in the right 
// click the button to trigger the shuffle card - generate another random card
// load a random value on left side  