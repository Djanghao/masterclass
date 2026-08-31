# [Python3] line sweep

**Author:** ye15
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1119686/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1119686/)

---


```
class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        ans = 0
        for i, x in enumerate(nums): 
            if not i or nums[i-1] >= nums[i]: val = 0 # reset val 
            val += nums[i]
            ans = max(ans, val)
        return ans 
```

Edited on 3/22/2021
Adding C++ implementation
```
class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int ans = 0, val = 0; 
        for (int i = 0; i < nums.size(); ++i) {
            if (i == 0 || nums[i-1] >= nums[i]) val = 0; 
            val += nums[i]; 
            ans = max(ans, val); 
        }
        return ans; 
    }
};
```