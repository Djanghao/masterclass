# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/3820532/](https://leetcode.com/problems/summary-ranges/solutions/3820532/)

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
  List<String> summaryRanges(List<int> nums) {
      final res = <String>[];
      if (nums.isEmpty) {
          return res;
      }
      var start = nums[0];
      for (int i = 0; i < nums.length; i++) {
          if (i == nums.length - 1) {
              if (start == nums[i]) {
                  res.add("$start");
              } else {
                  res.add("$start->${nums[i]}");
              }
          } else {
              if (nums[i + 1] != nums[i] + 1) {
                if (start == nums[i]) {
                    res.add("$start");
                } else {
                    res.add("$start->${nums[i]}");
                }
                start = nums[i + 1];
            }
          }       
      }

      return res;
  }
}
```