// problem-3:

type CountWordOccurrences = (sentence: string, word: string) => number;

const countWordOccurrences : CountWordOccurrences = (sentence, word) => {
    const targetSentence = sentence.toLowerCase().split(" ");
    const targetWord = word.toLowerCase();
    return targetSentence.filter(words => words === targetWord).length;
  
}

console.log(countWordOccurrences("I love typescript", "typescript"));
