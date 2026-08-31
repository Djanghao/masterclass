# JavsScript | Easy 1-line Solution

**Author:** ngseke
**Votes:** 11
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3803820/](https://leetcode.com/problems/split-strings-by-separator/solutions/3803820/)

---

# Approach
1. Concatenate all the words into a string and insert the separator (e.g. `.`) between them
   e.g. `['a.b', 'c.d', '.e']` will become `'a.b.c.d..e'`
2. Split the newly-formed string using the separator
   e.g.`'a.b.c.d..e'` will split into `['a', 'b', 'c', 'd', '', 'e']`
3. Remove all empty strings from the array

# Complexity
- Time complexity: `O(n)`
- Space complexity: `O(n)`

# Code
```
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
  return words.join(separator).split(separator).filter(Boolean)
};
```