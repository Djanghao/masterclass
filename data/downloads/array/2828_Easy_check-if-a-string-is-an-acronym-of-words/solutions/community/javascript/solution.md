# one line solution - Javascript | Easy

**Author:** brijesh178
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3972516/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3972516/)

---



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return s === words.map((str) => str[0]).join("")
}
```