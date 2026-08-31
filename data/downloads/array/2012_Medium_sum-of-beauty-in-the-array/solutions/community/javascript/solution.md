# [Javascript] Easy Solution | Prefix | Postfix

**Author:** vj98
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471980/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471980/)

---

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    
    let preMin = [];
    let postMax = [];
    
    preMin[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        preMin[i] = Math.max(nums[i], preMin[i-1]); 
    }
    
    postMax[nums.length-1] = nums[nums.length-1];
    for (let i = nums.length-2; i >= 0; i--) {
        postMax[i] = Math.min(nums[i], postMax[i+1]);
    }
    
    let ans = 0;
    for (let i = 1; i < nums.length-1; i++) {
        if (preMin[i-1] < nums[i] && nums[i] < postMax[i+1]) {
            ans += 2;
        }
        else if (nums[i-1] < nums[i] && nums[i] < nums[i+1]) {
            ans += 1;
        }
    }
    
    return ans;
};
```