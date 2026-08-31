# JavaScript solution using HashMap

**Author:** kebetsi
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/1876229/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/1876229/)

---

```javascript
/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    const wMap = {};
    for (let i=0; i<wordsDict.length; i++) {
        if (wMap[wordsDict[i]] == null) wMap[wordsDict[i]] = [];
        wMap[wordsDict[i]].push(i);
    }
    WordDistance.prototype.wMap = wMap;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const wMap = WordDistance.prototype.wMap
    const pos1 = wMap[word1]
    const pos2 = wMap[word2]
    if (pos1 == null || pos2 == null) return null
    let min = Infinity
    for (const p1 of pos1) {
        for (const p2 of pos2) {
            min = Math.min(min, Math.abs(p1-p2))
        }
    }
    return min
};
```