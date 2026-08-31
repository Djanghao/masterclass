# [JavaScript] Dynamic Programming

**Author:** stevenkinouye
**Votes:** 6
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/1563775/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/1563775/)

---

```javascript
var countVowels = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let total = 0;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.has(word[i])) {
            count += i + 1;
        }
        total += count;
    }
    return total;
};
```