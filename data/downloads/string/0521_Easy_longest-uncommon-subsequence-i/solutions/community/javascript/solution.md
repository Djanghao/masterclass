# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 12
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/99426/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/99426/)

---

```
var findLUSlength = function(a, b) {
    // identical strings don't have uncommon subsequence
    if (a === b) return -1;
    // the longer string itself is the longest uncommon subsequence
    else return Math.max(a.length, b.length);
};
```