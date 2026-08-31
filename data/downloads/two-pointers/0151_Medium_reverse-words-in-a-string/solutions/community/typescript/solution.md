# Simple Solution | Beginner Friendly | Easy Approach with Explanation

**Author:** Jithinp96
**Votes:** 9
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/6087769/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/6087769/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To reverse the words in a string, we can utilize string and array methods. The approach involves splitting the string into an array of words, removing extra spaces, reversing the array, and joining the result back into a string.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Split the string into an array of words using `split(" ")`.
2. Remove empty strings caused by extra spaces using `filter`.
3. Reverse the filtered array using `reverse`.
4. Join the reversed array back into a single string using `join(" ")`.

# Code
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").filter(w => w !='').reverse().join(' ')
};
```


```typescript []
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s: string): string => {
    return s.split(" ").filter(w => w !== '').reverse().join(' ');
};
```