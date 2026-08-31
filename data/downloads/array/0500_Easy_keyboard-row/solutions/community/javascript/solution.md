# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 29
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/97867/](https://leetcode.com/problems/keyboard-row/solutions/97867/)

---

```
var findWords = function(words) {
    return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};
```