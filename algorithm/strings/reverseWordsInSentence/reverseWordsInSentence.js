function reverseWordsInSentence(text) {
    console.log(text.split(" ").map(word => word.split('').reverse().join('')).join(' '))
}

reverseWordsInSentence("Welcome to this Javascript Guide!")