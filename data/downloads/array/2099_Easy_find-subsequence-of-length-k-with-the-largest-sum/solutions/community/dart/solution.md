# Easy Dart solution

**Author:** mshabeel999
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/4319194/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/4319194/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 239ms

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 142.40MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    List<int> maxSubsequence(List<int> nums, int k) {
    while (nums.length > k) {
      nums.remove(nums.reduce((a, b) => a < b ? a : b));
    }
    return nums;
  }
}

```