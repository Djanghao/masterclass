# ✅ JavaScript | Stack | Reverse | TC O(nr) | SC O(n)

**Author:** ThakurBallary
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2425588/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2425588/)

---

```
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const ans = [];
    let stack = [];
    
    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);
        if (pattern[i] === 'I' || i === pattern.length) {
            ans.push(...stack.reverse());
            stack = [];
        }
    }
    
    return ans.join('');
};
```