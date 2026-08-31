# Simple, clear and fast!

**Author:** AbdulazimIslomjonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3022733/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/3022733/)

---

# Upvoat, please!
```
class Solution {
  int maximumProduct(List<int> nums) {
    nums.sort();
    return max(
      nums[0] * nums[1] * nums[nums.length - 1],
      nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
    );
  }
}
```