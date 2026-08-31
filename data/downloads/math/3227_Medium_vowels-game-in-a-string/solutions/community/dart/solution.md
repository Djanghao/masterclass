# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5508939/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5508939/)

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
  bool doesAliceWin(String s) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      var vowelCount = 0;
      for (int i = 0; i < s.length; i++) {
          if (vowels.contains(s[i])) {
              vowelCount++;
          }
      }
      
      if (vowelCount == 0) {
          return false;
      }
      
      return true;
  }
}
```