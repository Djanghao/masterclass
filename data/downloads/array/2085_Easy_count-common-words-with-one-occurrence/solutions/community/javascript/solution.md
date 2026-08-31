# JavaScript(JS) | HashMap | Easy to understand

**Author:** codemasterjin
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1598984/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1598984/)

---

```
var countWords = function(words1, words2) {
    const map1 = new Map();
    const map2 = new Map();
    let count = 0;
    
    for (const word of words1) {
        map1.set(word, map1.get(word) + 1 || 1);
    }
    for (const word of words2) {
        map2.set(word, map2.get(word) + 1 || 1);
    }
    for (const word of words1) {
        if (map1.get(word) === 1 && map2.get(word) === 1) count++;
    }
    
    return count;
};
```