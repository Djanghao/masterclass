# 2248. Intersection of Multiple Arrays | Dart | Simple Solution

**Author:** user4343mG
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/5474275/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/5474275/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The first thought was that the task was really simple)

# Approach
<!-- Describe your approach to solving the problem. -->
Thus, for the solution, the brute force method was used, for this, the first array was taken as the main one and on the basis of this, all other arrays were checked, if one of them has a missing value, the check is automatically interrupted, if all arrays have a common value, then this value is added to the resulting array. The task also requires returning the array in increasing order, for this the sort() method is used.

# Complexity
- Time complexity: O(N\u2217M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(M)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> intersection(List<List<int>> nums) {
    if (nums.length < 2) {
      nums[0].sort();
      return nums[0];
    }
    List<int> result = [];
    for (var i = 0; i < nums[0].length; i++) {
      bool isContain = true;
      for (var j = 1; j < nums.length; j++) {
        if (!nums[j].contains(nums[0][i])) {
          isContain = false;
          break;
        }
      }
      if (isContain) result.add(nums[0][i]);
    }
    result.sort();
    return result;
  }
}
```