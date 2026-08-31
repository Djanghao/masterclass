# Dart Solution

**Author:** tashtanov333
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3386343/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3386343/)

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
```
class Solution {
  List<List<int>> findDifference(List<int> nums1, List<int> nums2) {
      Set<int> set1 = Set<int>.from(nums1);
  Set<int> set2 = Set<int>.from(nums2);
      List<int>n1=set1.difference(set2).toList();
      List<int>n2=set2.difference(set1).toList();
      return [n1,n2];
  }
}
```