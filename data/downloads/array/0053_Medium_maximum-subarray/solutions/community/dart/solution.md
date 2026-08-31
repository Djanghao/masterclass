# Dart. Runtime 76.60%. Memory 82.98%

**Author:** Di72
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/3185033/](https://leetcode.com/problems/maximum-subarray/solutions/3185033/)

---


# Code
```
class Solution {
  int maxSubArray(List<int> nums) {
       int maxSum = nums[0];
       int curSum = nums[0];


        for(int i = 1; i < nums.length; i++){
            
           curSum = max(curSum + nums[i], nums[i]);
           maxSum = max(maxSum, curSum);

        }

       return maxSum;
  }
}
```