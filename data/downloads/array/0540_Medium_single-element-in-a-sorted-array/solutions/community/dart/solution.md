# 100% faster solution in DART using Binary Search.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/5198721/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/5198721/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int singleNonDuplicate(List<int> nums) {
    int start = 0;
    int end = nums.length - 1;

    while (start < end) {
      int mid = start + (end - start) ~/ 2;

      // Ensure mid is even to make pairs comparison easy
      if (mid % 2 == 1) mid--;

      // If we have a pair at mid and mid+1, the single element is further in the array
      if (nums[mid] == nums[mid + 1]) {
        start = mid + 2;
      } else {
        end = mid;
      }
    }

    // start should point to the single element
    return nums[start];
  }
}
```