# Beat 100% using TS, Detailed Explaination.

**Author:** vupa141
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5200355/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5200355/)

---

![Screenshot 2024-05-24 125208.png](./images/0.png)

# Intuition
We will use backtracking to solve this problem. We iterate through each word in the words array, and at each word, we decide to include this word in our solution or not, and update the remain words and letters left we can use, calculate the new score, update max score if the new score is higher, then continue to the end of words array.
# Approach
1. We have 2 objects **wordOccurences** and **letterOccurences** to store the occurences of each word and each letter, and **maxScore** will be the highest score we can find.
```
    const wordOccurences = {}
    const letterOccurences = {}
    let maxScore = 0
    for (const word of words) {
        wordOccurences[word] = wordOccurences[word] 
            ? wordOccurences[word] + 1 
            : 1
    }
    for (const letter of letters) {
        letterOccurences[letter] = letterOccurences[letter] 
            ? letterOccurences[letter] + 1 
            : 1
    }
```
2. We have 2 helper function which is **getWordScore** to calculate score of a word and **canFormWord** to check if we can form selected word with the remaining words and characters
```
    function getWordScore(word: string): number {
        return word.split('').reduce((acc, char) => acc + score[char.charCodeAt(0) - 97], 0)
    }
    function canFormWord(
        word: string,
        letters: Record<string, number>,
        words: Record<string, number>
    ) {
        if (words[word] == 0) {
            return false
        }
        const charOccurencesInWord = {}
        for (const char of word) {
            charOccurencesInWord[char] = charOccurencesInWord[char] 
                ? charOccurencesInWord[char] + 1 
                : 1
        }
        for (const key in charOccurencesInWord) {
            if (
                !letters[key] 
                || letters[key] < charOccurencesInWord[key]
            ) {
                return false
            }
        }
        return true
    }
```
3. And the most important function is **calculateScore**. This function will receive 4 paramters, which are *index*, *wordOccurences*, *letterOccurences* and *currentScore*. *Index* is the index of the element in the words array which we are checking. *wordOccurences* are the words left to use. *letterOccurences* are the letters left to use. *currentScore* is the score until this step. 
```
    function calculateScore(
        index: number,
        wordOccurences: Record<string, number>,
        letterOccurences: Record<string, number>,
        currentScore: number
    )
```
- First we will check if index is equal to the length of words array, if yes, we stop the recursive function and set maxScore = max(maxScore, currentScore)
```
        if (index == words.length) {
            maxScore = Math.max(maxScore, currentScore)
            return
        }
```
- Then, we check if we can form the word of current index in the words array from letters and words we have left. If yes, we will add this word to our solution. We add the score of the current word to currentScore, update letterOccurences by decreasing all letters key in the current word by 1, update wordOccurences by decreasing current word key by 1, and then recursively call the function again with index + 1 and the newly calculated parameters.
```
        if (canFormWord(words[index], letterOccurences, wordOccurences)) {
            const newScore = currentScore + getWordScore(words[index])
            const newLetterOccurences = { ...letterOccurences }
            for (const char of words[index]) {
                newLetterOccurences[char] -= 1
            }
            const newWordOccurences = { ...wordOccurences, [words[index]]: wordOccurences[words[index]] -1 }
            calculateScore(index + 1, newWordOccurences, newLetterOccurences, newScore)
        }
```
- We also recursively call the function again with index + 1 and the left parameters are the same, in case we didn't include the current word in our solution
```
calculateScore(index + 1, wordOccurences, letterOccurences, currentScore)
```
4. We call calculateScore(0, wordOccurences, letterOccurences, 0) to start backtracking.
```
calculateScore(0, wordOccurences, letterOccurences, 0)
```

# Code
```
function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    const wordOccurences = {}
    const letterOccurences = {}
    let maxScore = 0
    for (const word of words) {
        wordOccurences[word] = wordOccurences[word] 
            ? wordOccurences[word] + 1 
            : 1
    }
    for (const letter of letters) {
        letterOccurences[letter] = letterOccurences[letter] 
            ? letterOccurences[letter] + 1 
            : 1
    }
    function getWordScore(word: string): number {
        return word.split('').reduce((acc, char) => acc + score[char.charCodeAt(0) - 97], 0)
    }
    function canFormWord(
        word: string,
        letters: Record<string, number>,
        words: Record<string, number>
    ) {
        if (words[word] == 0) {
            return false
        }
        const charOccurencesInWord = {}
        for (const char of word) {
            charOccurencesInWord[char] = charOccurencesInWord[char] 
                ? charOccurencesInWord[char] + 1 
                : 1
        }
        for (const key in charOccurencesInWord) {
            if (
                !letters[key] 
                || letters[key] < charOccurencesInWord[key]
            ) {
                return false
            }
        }
        return true
    }
    function calculateScore(
        index: number,
        wordOccurences: Record<string, number>,
        letterOccurences: Record<string, number>,
        currentScore: number
    ) {
        if (index == words.length) {
            maxScore = Math.max(maxScore, currentScore)
            return
        }
        if (canFormWord(words[index], letterOccurences, wordOccurences)) {
            const newScore = currentScore + getWordScore(words[index])
            const newLetterOccurences = { ...letterOccurences }
            for (const char of words[index]) {
                newLetterOccurences[char] -= 1
            }
            const newWordOccurences = { ...wordOccurences, [words[index]]: wordOccurences[words[index]] -1 }
            calculateScore(index + 1, newWordOccurences, newLetterOccurences, newScore)
        }
        calculateScore(index + 1, wordOccurences, letterOccurences, currentScore)
    }
    calculateScore(0, wordOccurences, letterOccurences, 0)
    return maxScore
};
```

Please upvote if you find this helpful. Happy Coding!
