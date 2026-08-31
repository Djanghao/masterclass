# JavaScript | Beats 94.82% | Set Lookup Approach

**Author:** helmiqatqat
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/5683176/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/5683176/)

---

# Complexity
- Time complexity: $$O(n * m)$$
$$n$$ = Number of the words
$$m$$ = Average length of the words

- Space complexity: $$O(k)$$
$$k$$ = Number of allowed words

# Code
```javascript []
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = words.length;
  const allowedSet = new Set(allowed);

  for (const word of words) {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        counter--;
        break;
      }
    }
  }

  return counter;
};
```
``` TypeScript []
function countConsistentStrings(allowed: string, words: string[]): number {
  let counter = words.length;
  const allowedSet = new Set(allowed);

  for (const word of words) {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        counter--;
        break;
      }
    }
  }

  return counter;
}
```