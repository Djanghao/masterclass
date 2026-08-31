# JavaScript Solution - Sliding Window

**Author:** Deadication
**Votes:** 1
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/1901357/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/1901357/)

---

```
var distinctNumbers = function(nums, k) {
    const n = nums.length;
    const map = new Map();
    
    const res = [];
    
    let left = 0;
    
    for (let i = 0; i < n; ++i) {
        const num = nums[i];
        
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
        
        if (i + 1 > k) {
            const startNum = nums[left];
            
            map.set(startNum, map.get(startNum) - 1);
            if (map.get(startNum) === 0) map.delete(startNum);
            left++;
        }
        
        if (i + 1 >= k) {
            res.push(map.size);
        }
    }
    
    return res;
};
```