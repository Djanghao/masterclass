# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/4201162/](https://leetcode.com/problems/valid-triangle-number/solutions/4201162/)

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
  int triangleNumber(List<int> nums) {
      nums.sort();
      var count = 0;
      for (int i = 0; i < nums.length - 2; i++) {
          for (int j = i + 1; j < nums.length - 1; j++) {
              for (int k = j + 1; k < nums.length; k++) {
                  final a = nums[i];
                  final b = nums[j];
                  final c = nums[k];
                  if (isValidTriangle(a, b, c)) {
                      count += 1;
                  }
              }
          }
      }

      return count;
  }

  bool isValidTriangle(int a, int b, int c) {
      return (a + b > c && a + c > b && b + c > a);
  }
}

```