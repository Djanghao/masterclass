# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/6088801/](https://leetcode.com/problems/find-words-containing-character/solutions/6088801/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find the indices of words that contain a specific character. By iterating through the list of words and checking if each word contains the character, we can build the result.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an empty array `number` to store the indices of matching words.
2. Loop through each word in the input `words` array:
   - If the word contains the character `x` (using `.includes()`), add its index to the `number` array.
3. Return the `number` array as the result.

# Code
```javascript []
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let number=[]
    for (let i=0;i<words.length;i++){
        if (words[i].includes (x) ){
            number.push(i)
        }
    }
    return number;
};
```

```typescript []
function findWordsContaining(words: string[], x: string): number[] {
    let indices: number[] = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indices.push(i);
        }
    }
    return indices;
}
```