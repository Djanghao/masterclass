# JavaScript Clean Solution

**Author:** control_the_narrative
**Votes:** 38
**Link:** [https://leetcode.com/problems/word-pattern/solutions/834256/](https://leetcode.com/problems/word-pattern/solutions/834256/)

---

```javascript
var wordPattern = function(pattern, str) {
    const words = str.split(/\\s+/);
    const map = new Map();
    
    if(words.length !== pattern.length) return false;
    if(new Set(words).size !== new Set(pattern).size) return false;
    
    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && 
           map.get(pattern[i]) !== words[i]) return false;
        map.set(pattern[i], words[i]);
    }
    return true;
};
```