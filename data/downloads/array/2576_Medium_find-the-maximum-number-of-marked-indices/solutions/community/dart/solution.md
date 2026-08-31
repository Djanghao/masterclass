# [Dart] Both Two Pointer and Binary Search Answer

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3235710/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3235710/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(LogN)

- Space complexity:
O(1)

# Two Pointer
```
  int maxNumOfMarkedIndices(List<int> nums) {
    nums.sort();
    int n = nums.length;
    int res = 0;
    for (var i = 0, j = (n + 1) ~/ 2; j < n; j++) {
      if (nums[j] >= nums[i] * 2) {
        i++;
        res += 2;
      }
    }

    return res;
  }
```

# Binary Search Answer
```
class Solution {
  int maxNumOfMarkedIndices(List<int> nums) {
    nums.sort();
    int n = nums.length;
    int res = 0;
    int mid = (n + 1) ~/ 2;
    for (var i = 0; i < n / 2; i++) {
      mid = lowerBound(nums, 2 * nums[i], start: mid);
      if (mid == n) {
          break;
      }
      mid++;
      res += 2;
    }

    return res;
  }

}
```