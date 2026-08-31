# JavaScript Code For Beginner 👉 Easy Solution

**Author:** Ugam
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3288913/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3288913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:


- Space complexity:


# Code
```
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const regex = /[aeiou]/;
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (words[i][0].match(regex) && words[i].at(-1).match(regex)) {
            count++;
        }
    }
    return count;
};
```