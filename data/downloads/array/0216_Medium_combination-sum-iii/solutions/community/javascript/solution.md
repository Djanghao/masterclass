# JavaScript Clean Code [72 ms]

**Author:** control_the_narrative
**Votes:** 22
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/844197/](https://leetcode.com/problems/combination-sum-iii/solutions/844197/)

---

```javascript
var combinationSum3 = function(k, n) {
    const res = []
    
    function permute(arr, sum, start) {
        if(sum > n) return;
        
        if(arr.length === k) {
            if(sum === n) res.push(arr);
            return;
        }
        
        for(let i = start; i < 10; i++) {
            permute([...arr, i], sum+i, i+1);
        }
    }
    permute([], 0, 1);
    return res;
};
```