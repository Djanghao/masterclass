# JavaScript O(n) time | Easy to understand | Short code

**Author:** rallina
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/3093874/](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/solutions/3093874/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are just two options to make the biggest sum: add pattern's first element in the bigining or add second one at the end of the text;
If pattern's elements are equal then use formul for number of combinations

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
    let fc = 0;
    let sc = 0;

    let res = 0;

    for (let el of text) {
        if (el === pattern[0]) fc++;
        else if (el === pattern[1]) {
            sc++;
            res += fc;
        }
    }

    if (pattern[0] === pattern[1]) return fc * (fc + 1) / 2;
    
    return res + Math.max(fc, sc);
};
```