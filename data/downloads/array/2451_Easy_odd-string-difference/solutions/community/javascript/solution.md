# JavaScript ✅ Map | TC O(n) | SC O(n)

**Author:** ThakurBallary
**Votes:** 7
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2756495/](https://leetcode.com/problems/odd-string-difference/solutions/2756495/)

---

```
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const map = {};
    const ans = {};
    
    for (const word of words) {
        let key = '';
        for (let i = 1; i < word.length; i++) {
            key += `_${word[i].charCodeAt() - word[i-1].charCodeAt()}`;
        }
        map[key] = ++map[key] || 1;
        ans[key] = word;
    }
    
    const key = Object.keys(map).find(e => map[e] === 1);
    
    return ans[key];
};
```