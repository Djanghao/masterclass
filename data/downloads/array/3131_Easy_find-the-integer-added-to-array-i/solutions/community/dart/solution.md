# Dart simple

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/6090676/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/6090676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int addedInteger(List<int> nums1, List<int> nums2) {
    nums1.sort();
    nums2.sort();
    return nums2[0] - nums1[0];
  }
}
```