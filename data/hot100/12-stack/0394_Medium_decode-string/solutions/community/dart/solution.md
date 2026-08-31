# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-string/solutions/4139235/](https://leetcode.com/problems/decode-string/solutions/4139235/)

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
  String decodeString(String s) {
      final List<String> stack = [];
      for (int i = 0; i < s.length; i++) {
          if (s[i] != "]") {
              stack.add(s[i]);
          } else {
              var cand = "";
              while (stack.last != "[") {
                  cand = stack.removeLast() + cand;
              }

              stack.removeLast();

              var curVal = "";
              while (stack.isNotEmpty && stack.last.isDigit) {
                  curVal = stack.removeLast() + curVal;
              }
              stack.add(cand.multiply(int.parse(curVal)));
          }
      }

      return stack.join("");
  }
}

extension Digit on String {
      bool get isDigit => int.tryParse(this) != null ? true : false;

      String multiply(int k) {
          var res = "";
          for (int i = 0; i < k; i++) {
              res += this;
          }

          return res;
      }
  }
```