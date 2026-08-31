# Easiest Approach Ever

**Author:** Aslam37
**Votes:** 6
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/3489514/](https://leetcode.com/problems/max-consecutive-ones/solutions/3489514/)

---

# Intuition
Simple Dart solution without using any inbuilt functions
# Approach
Itrate through elements and set a flag to find longest count and update it whenever longer found.

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(1)$$
# Code
```
class Solution {
  int findMaxConsecutiveOnes(List<int> nums) {
      int count=0,flag=0;
      for(int i=0;i<nums.length;i++){
          if(nums[i]==1){
              count++;
              if(count>flag){
                  flag=count;
              }
          }else{
              count=0;
          }
      }
      return flag;
  }
}
```