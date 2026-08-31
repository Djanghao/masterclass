# Javascript | Clean Hash Solution O(n)

**Author:** timkrausedev
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2297220/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2297220/)

---

Runtime: 63 ms, faster than 100.00% of JavaScript online submissions for Maximum Number of Pairs in Array.
Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions for Maximum Number of Pairs in Array.

```
var numberOfPairs = function(nums) {
    const map = {};
    let pairs = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            delete map[nums[i]];
            pairs++;
        } else {
            map[nums[i]] = 1;
        }
    }
    
    return [pairs, Object.values(map).length]  
};
```