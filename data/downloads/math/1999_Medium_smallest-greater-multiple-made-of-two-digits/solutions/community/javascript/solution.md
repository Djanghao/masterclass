# JavaScript Solution - DFS Approach

**Author:** Deadication
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/1985408/](https://leetcode.com/problems/smallest-greater-multiple-made-of-two-digits/solutions/1985408/)

---

```
var findInteger = function(k, digit1, digit2) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const res = helper(0);
    
    return res === MAX ? -1 : res;
   
    
    function helper(currNum) {
        if (currNum > 2**31 - 1) return MAX;
        if (currNum > k && currNum % k === 0) return currNum;
        
        const nextNum1 = (currNum * 10) + digit1;
        const nextNum2 = (currNum * 10) + digit2;
       
        let res1 = MAX;
        let res2 = MAX;
        
        if (nextNum1 > 0) res1 = Math.min(res1, helper(nextNum1));
        if (nextNum2 > 0) res2 = Math.min(res2, helper(nextNum2));
        
        return Math.min(res1, res2);
    }
};
```