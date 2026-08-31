# JavaScript Solution - Hash Map

**Author:** Deadication
**Votes:** 0
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/1981913/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/1981913/)

---

```
var widestPairOfIndices = function(nums1, nums2) {
    const n = nums1.length;
    
    const map = new Map();
    
    map.set(0, -1);
    
    let maxLen = 0;
    
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0; i < n; ++i) {
        const num1 = nums1[i];
        const num2 = nums2[i];
        
        sum1 += num1;
        sum2 += num2;
        
        const diff = sum1 - sum2;
        
        if (map.has(diff)) {
            const left = map.get(diff);
            const len = i - left;
            
            maxLen = Math.max(maxLen, len);
        }
        
        if (!map.has(diff)) map.set(diff, i);
    }
    
    return maxLen;
};
```