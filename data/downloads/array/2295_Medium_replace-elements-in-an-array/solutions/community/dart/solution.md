# Dart solution with map

**Author:** ninuulia
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/4948873/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/4948873/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n+m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> arrayChange(List<int> nums, List<List<int>> operations) {
    Map map = {};
    for (int i = 0; i < nums.length; i++) {
      map[nums[i]] = i;
    }
    for (int i = 0; i < operations.length; i++) {
      map[operations[i][1]] = map[operations[i][0]];
      map.remove(operations[i][0]);
    }
    for (var x in map.entries) {
      nums[x.value] = x.key;
    }
    return nums;
  }
}
```