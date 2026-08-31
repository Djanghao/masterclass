# Dart...

**Author:** 0varun
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/5293865/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/5293865/)

---


# Code
```
class Solution {
  int maxProduct(List<int> nums) {
    int n = nums.length;

     for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        int temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
    
    int ans = ((nums[nums.length - 1]- 1) * (nums[nums.length - 2]- 1));
    return ans;
  }
}
```