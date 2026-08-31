# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/4012862/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/4012862/)

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
  int minMoves2(List<int> nums) {
    nums.sort();
    final median = nums.length.isOdd ? nums[nums.length ~/ 2] : (nums[nums.length ~/ 2] + nums[(nums.length ~/ 2) - 1]) ~/ 2;
    var c = 0;
    for (var num in nums) {
        c += ((num - median).abs());
    }

    return c;
  }
}
```