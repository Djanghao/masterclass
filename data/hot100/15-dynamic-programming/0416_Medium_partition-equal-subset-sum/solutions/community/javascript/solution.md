# JS - DP Faster with comments

**Author:** arunkumars08
**Votes:** 10
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/625295/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/625295/)

---

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var sum = nums.reduce((a, b) => a + b, 0);
    
    if (sum % 2 !== 0) {
        return false;
    }
    
    var half = sum / 2; // Never will have decimal, hence safe to just divide.
    
    // Now, our aim is to find if atleast one subarray has the sum equal to the value `half`
    // As we can be sure that the other half of the subarray will have the same value
    
    var dp = [];
    
    // Base cases
    dp[0] = true;
    
    for (var index = 0; index < nums.length; ++ index) {
        var num = nums[index];
        for (var i = half; i >= num; -- i) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[half] || false;
};
```