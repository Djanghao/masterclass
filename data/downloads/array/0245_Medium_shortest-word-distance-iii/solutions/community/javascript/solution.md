# Self explained

**Author:** jokerm
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/1207057/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/1207057/)

---

```
var shortestWordDistance = function(wordsDict, word1, word2) {
    let min = Infinity;
    
    let a = -1;
    let b = -1;
    
    for(let i=0; i<wordsDict.length; i++) {
        if(wordsDict[i] === word1) a = i;
        
        if(a >= 0 && b >= 0 && a !== b) {
            min = Math.min(min, Math.abs(a-b));
        }
        
        if(wordsDict[i] === word2) b = i;
    }
    
    if(a >= 0 && b >= 0 && a !== b) {
        min = Math.min(min, Math.abs(a-b));
    }
    
    return min;
};