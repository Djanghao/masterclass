# Recursive Approach

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/target-sum/solutions/5455275/](https://leetcode.com/problems/target-sum/solutions/5455275/)

---

# Complexity
- Time complexity: O(2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int findTargetSumWays(List<int> nums, int target) {
    int countWays([int i = 0, int sum = 0]) {
      if (i == nums.length) return sum == target ? 1 : 0;
      
      final adding = countWays(i + 1, sum + nums[i]);
      final subtracting = countWays(i + 1, sum - nums[i]);

      return adding + subtracting;
    }  

    return countWays();
  }  
}
```