# JavaScript Solution - Set

**Author:** Deadication
**Votes:** 4
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/1138930/](https://leetcode.com/problems/sentence-similarity/solutions/1138930/)

---

```
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length != sentence2.length) return false;
    
    const n = sentence1.length;
    const set = new Set();
    
    for (const [word1, word2] of similarPairs) {
        set.add(word1 + "#" + word2);     
    } 
    
    return sentence1.every((_, i) => isSimilar(sentence1[i], sentence2[i]));
    
    function isSimilar(word1, word2) {
        return word1 == word2 || set.has(word1 + "#" + word2) || set.has(word2 + "#" + word1);
    }
};
```