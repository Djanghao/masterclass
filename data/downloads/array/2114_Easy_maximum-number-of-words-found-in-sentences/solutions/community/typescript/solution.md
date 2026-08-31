# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/6091248/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/6091248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the sentence with the most words, we simply need to count the words in each sentence and keep track of the maximum count. Splitting each sentence by spaces gives us the words in the sentence.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `max` to store the maximum word count, starting at 0.
2. Iterate through the array `sentences`:
   - Split each sentence into an array of words using `.split(' ')`.
   - Calculate the number of words in the sentence (length of the array).
   - Update `max` if the current sentence has more words than the previously recorded maximum.
3. Return `max` after processing all sentences.

# Code
```javascript []
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for (let sentence of sentences) {
        let words = sentence.split(' ');
        max = Math.max(max, words.length)
    }
    return max;  
};
```

```typescript []
function mostWordsFound(sentences: string[]): number {
    let max = 0;
    for (const sentence of sentences) {
        const words = sentence.split(' ');
        max = Math.max(max, words.length);
    }
    return max;
}