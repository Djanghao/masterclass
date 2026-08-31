# Beats 100% of dart submission

**Author:** user0102eK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/5143138/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/5143138/)

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
  String kthLargestNumber(List<String> nums, int k) {
    var lint = nums.map(BigInt.parse).toList();
    lint.sort((a,b)=>b.compareTo(a));
    String val=lint[k-1].toString();
    return val;
  }
}
```