# JavaScript Clean O(N) Solution

**Author:** control_the_narrative
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/781168/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/781168/)

---

```javascript
var maxNonOverlapping = function(nums, target) {
    const seen = new Set();
    let total = 0, result = 0;
    
    for(let n of nums) {
        total += n;
        
        if(total === target || seen.has(total - target)) {
            total = 0;
            result++;
            seen.clear()
        } else seen.add(total)
    }
    return result;
};
```