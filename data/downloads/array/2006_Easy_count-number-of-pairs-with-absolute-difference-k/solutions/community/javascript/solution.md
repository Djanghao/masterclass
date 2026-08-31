# Simple Javascript Solution

**Author:** NileshSaini_99
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1480690/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/1480690/)

---

```
var countKDifference = function(nums, k) {
    let map = {};
    for(let i of nums) {
        map[i] ? map[i]++ : map[i] = 1 
    }
    
    let pairs = 0;
    
    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]-k]) {
            pairs += map[nums[i] - k]
        }
    }
    
    return pairs;
    
};


```