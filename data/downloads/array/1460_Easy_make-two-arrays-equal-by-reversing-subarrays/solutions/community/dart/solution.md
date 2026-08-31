# sort -> check

**Author:** Alto-b
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/4432089/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/4432089/)

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
  bool canBeEqual(List<int> target, List<int> arr) {
    arr.sort();
    target.sort();
    return arr.toString() == target.toString();
  }
}
```