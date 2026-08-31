# JavaScript Solution - Top Down Approach with Memoization

**Author:** Deadication
**Votes:** 1
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/804182/](https://leetcode.com/problems/toss-strange-coins/solutions/804182/)

---

```
var probabilityOfHeads = function(probs, target) {
    const n = probs.length;
    const memo = new Map();
    
    return findProbs(n - 1, 0);
    
    function findProbs(index, count) {
        const key = `${index}#${count}`;
        
        // base case
        if (index < 0) {
            return count == target ? 1.0 : 0.0;
        }
        if (count > target) return 0.0;
        if (memo.has(key)) return memo.get(key);
        
        const res = probs[index] * findProbs(index - 1, count + 1) + (1 - probs[index]) * findProbs(index - 1, count);
        memo.set(key, res);
        
        return res;
    }
};
```