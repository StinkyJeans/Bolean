function countCharacters(inputString) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    let numbersCount = 0;
    let specialCharactersCount = 0;
    let whiteSpacesCount = 0;

    const vowels = /[aeiouAEIOU]/;
    const numbers = /[0-9]/;
    const specialCharacters = /[^a-zA-Z0-9\s]/;

    for (let char of inputString) {
        if (vowels.test(char)) {
            vowelsCount++;
        } else if (numbers.test(char)) {
            numbersCount++;
        } else if (specialCharacters.test(char)) {
            specialCharactersCount++;
        } else if (char === ' ') {
            whiteSpacesCount++;
        } else {
            consonantsCount++;
        }
    }

    return {
        vowels: vowelsCount,
        consonants: consonantsCount,
        numbers: numbersCount,
        specialCharacters: specialCharactersCount,
        whiteSpaces: whiteSpacesCount
    };
}

function main() {
    const inputString = prompt("Enter a string: ");

    const counts = countCharacters(inputString);

    const message =
        "v: " + counts.vowels + "\n" +
        "c: " + counts.consonants + "\n" +
        "n: " + counts.numbers + "\n" +
        "sc: " + counts.specialCharacters + "\n" +
        "ws: " + counts.whiteSpaces;

    alert(message);
}

main();