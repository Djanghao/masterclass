# 1-line JavaScript solution, no regex

**Author:** loctn
**Votes:** 66
**Link:** [https://leetcode.com/problems/detect-capital/solutions/99300/](https://leetcode.com/problems/detect-capital/solutions/99300/)

---

```
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};
```