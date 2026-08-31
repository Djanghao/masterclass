# JavaScript Solution - O(n) Approach

**Author:** Deadication
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/2067089/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/2067089/)

---

```
var elementInNums = function(nums, queries) {
    const n = nums.length;
    
    const res = [];
    
    for (const [time, idx] of queries) {
        const rounds = Math.floor(time / n);
        
        if (rounds % 2 === 0) { // deletion phase
            const rem = time % n;
            const maxIdx = n - rem - 1;
            
            if (maxIdx < idx) res.push(-1);
            else res.push(nums[rem + idx]);
        }
        else { // addition phase
            const rem = time % n;
            const maxIdx = rem - 1;

            if (maxIdx < idx) res.push(-1);
            else res.push(nums[idx]);
        }
    }
    
    return res;
};
```