# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/4308104/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/4308104/)

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
  int minimumOperations(String num) {
      final List<int> compatible = [00, 25, 50, 75];
      final digits = num.split('');
      var ans = digits.length;
      var zeroCount = 0;

      for (var k in digits) {
          if (k == '0') {
              zeroCount++;
          }
      }

      if (zeroCount == 1) {
          ans = digits.length - 1;
      }

      for (int i = 0; i < digits.length - 1; i++) {
          for (int j = i + 1; j < digits.length; j++) {
              final cand = int.parse(digits[i]) * 10 + int.parse(digits[j]);
              if (compatible.contains(cand)) {
                  ans = min(ans, digits.length - i - 2);
              }
          }
      }

      return ans;
  }
}
```