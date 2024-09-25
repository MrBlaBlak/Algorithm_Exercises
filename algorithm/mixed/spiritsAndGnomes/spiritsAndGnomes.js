// Input: ["1807", "7810"]
// Output: 1S3G
function spiritsAndGnomes(password, guess) {
    let passwordArray = Array.from(password);
    let guessArray = Array.from(guess)
    let spliceCount =0;
    let spirits = 0;
    let gnomes = 0;
    let passwordEachDigitCount = {}
    for (let i = 0; i < password.length; i++) {
        if (password[i] === guess[i]) {
            spirits++
            passwordArray.splice(i-spliceCount, 1)
            guessArray.splice(i-spliceCount, 1)
            spliceCount++
        }
    }

    for (let i = 0; i < passwordArray.length; i++) {
        if (passwordEachDigitCount[passwordArray[i]]) {
            passwordEachDigitCount[passwordArray[i]]++
        } else {
            passwordEachDigitCount[passwordArray[i]] = 1;
        }
    }

    for (let i = 0; i < passwordArray.length; i++) {
        if(passwordEachDigitCount[guessArray[i]] && passwordEachDigitCount[guessArray[i]]>0){
            gnomes++;
            passwordEachDigitCount[guessArray[i]]--;
        }
    }
    console.log(`${spirits}S${gnomes}G`)
}

spiritsAndGnomes("1807", "7810"); // Output: "1S3G"

spiritsAndGnomes("1123", "0111"); // Output: "1S1G"

spiritsAndGnomes("112300", "011178"); // Output: "1S2G"

spiritsAndGnomes("", ""); // Output: "0S0G"

spiritsAndGnomes("123", "1234"); // Output: "3S0G"

spiritsAndGnomes("1111", "1122"); // Output: "2S0G"

spiritsAndGnomes("1234", "5678"); // Output: "0S0G"

spiritsAndGnomes("112233", "332211"); // Output: "2S4G"

spiritsAndGnomes("12345678901234567890", "09876543211234567890"); // Output: "10S10G"

spiritsAndGnomes("abc@123", "cba@456"); // Output: "2S2G"
