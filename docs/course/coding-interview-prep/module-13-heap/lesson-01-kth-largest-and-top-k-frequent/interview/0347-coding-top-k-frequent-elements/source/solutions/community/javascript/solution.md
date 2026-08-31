# JavaScript No Sorting O(N) Time

**Author:** control_the_narrative
**Votes:** 153
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/669782/](https://leetcode.com/problems/top-k-frequent-elements/solutions/669782/)

---

```javascript
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};
```