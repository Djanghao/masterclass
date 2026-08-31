# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431685/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431685/)

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
  List<String> validStrings(int n) {
      List<String> ans = [];
      void backtrack(String cand) {
          if (cand.length == n) {
              ans.add(cand);
              return;
          }
          backtrack(cand + '1');
          if (cand.length == 0 || cand[cand.length - 1] != '0') {
              backtrack(cand + '0');
          }
      }     
      backtrack("");
      return ans;
  }
}
```