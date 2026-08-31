# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/5902957/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/5902957/)

---

# Code
```dart []
class Solution {
  int getMinDistance(List<int> nums, int target, int start) {
    int minimize = nums.length;
    for(int i = 0; i < nums.length; i++){
        if(nums[i] == target) {
            minimize = min((i - start).abs(),minimize);
        }
    }
    return minimize;
  }
}
```