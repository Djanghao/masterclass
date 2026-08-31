# Simple Dart Brute Force Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/3555939/](https://leetcode.com/problems/3sum-closest/solutions/3555939/)

---



# Approach
Iterate through every possiblity and save the closest value into a new closer one is found.
# Complexity
- Time complexity:
O(n^3)
# Code
```
class Solution {
  int threeSumClosest(List<int> nums, int target) {
    int closest = (nums[0] + nums[1] + nums[2] - target).abs(); 
    int val = nums[0] + nums[1] + nums[2];
    for(int i = 0 ; i < nums.length ; ++i){
      for(int x = i + 1; x < nums.length ; ++x){
        for(int z = x + 1; z < nums.length ; ++z){
          if((nums[i] + nums[x] + nums[z] - target).abs() < closest){
            closest = (nums[i] + nums[x] + nums[z] - target).abs();
            val = nums[i] + nums[x] + nums[z];
          }
        }
      }
    }
    return val;
  }
}
```