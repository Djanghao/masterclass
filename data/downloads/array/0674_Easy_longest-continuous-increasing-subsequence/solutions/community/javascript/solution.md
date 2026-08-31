# JavaScript Clean 2 Sliding-Window Approaches

**Author:** control_the_narrative
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/670447/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/670447/)

---

## Solution 1

```
var findLengthOfLCIS = function(nums) {
    let len = 1, maxLen = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i+1]) len++;
        else len = 1;
        maxLen = Math.max(len, maxLen);
    }
    return maxLen;  
};
```

## Solution 2

```javascript
var findLengthOfLCIS = function(nums) {
    if(nums.length < 2) return nums.length;
    let left = 0, right = 1, maxLen = 0;
    
    while(right < nums.length) {
        if(nums[right-1] >= nums[right]) left = right;
        right++;
        maxLen = Math.max(right - left, maxLen);
    }
    return maxLen    
};
```