# Simple stupid javascript logic with comments - 84 ms

**Author:** eforce
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422482/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422482/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    let result = 0;

    for (let i = 0; i < word.length; ++i) {
        if (word[i] === "a") {
            if (word[i + 1] === "b" && word[i + 2] === "c") i += 2; // we have abc
            else if (word[i + 1] === "b" || word[i + 1] === "c") { // ab or ac only
                ++i;
                ++result;
            } else { // just a
                result += 2;
            }
        } else if (word[i] === "b") { // we start from b
            ++result;
            if (word[i + 1] === "c") { // it is bc
                ++i;
            } else ++result; // just b
        } else {
            result += 2; // only c
        }
    }

    return result;
};
```