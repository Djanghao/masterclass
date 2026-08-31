# Dart Solution

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3025236/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3025236/)

---

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

class Solution {
  int lengthOfLongestSubstringTwoDistinct(String s) {
      var answer = 0, n = s.length;
      var left = 0, right = 0;
      Map<String, int> added = {};

      while (right < n) {
          added[s[right]] = right;
          if (added.length >= 3){
            var minVal = added.entries.reduce((cur, next) => cur.value < next.value ? cur : next);
            left = minVal.value + 1;
            added.remove(minVal.key);
          }
          answer = max(answer, right - left + 1);
          right += 1;
      }
      
      return answer;
  }
}
```