# Simple Typescript Solution

**Author:** marioattieh
**Votes:** 12
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/3758373/](https://leetcode.com/problems/merge-strings-alternately/solutions/3758373/)

---

# Approach
For loop from 0 to the max of the lengths of the two words and check for each iteration whether the index is less than the word length, if yes we add the character at the index.

# Complexity
- Time complexity: $$O(N)$$. N being the length of the longest of the two words.

- Space complexity: $$O(N)$$. N being the length of the longest of the two words.

# Code
```
function mergeAlternately(word1: string, word2: string): string {
    let response = "";

    for (let i = 0; i < Math.max(word1.length, word2.length); i++){
        if (i < word1.length) response += word1[i];
        if (i < word2.length) response += word2[i];
    }

    return response;
};
```