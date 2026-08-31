# Dart: Two pointer + Map

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/2939810/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/2939810/)

---

# Code
```
import 'dart:math';
class Solution {
  int lengthOfLongestSubstringKDistinct(String s, int k) {
      if (k == 0) return 0;
      int answer = 0;
      var l = 0, r = 0;
      Map dic = <String, int>{};

      while (r < s.length){
          if (!dic.containsKey(s[r])) dic[s[r]] = 0;
          dic[s[r]] += 1;

          while (dic.keys.length > k){
            dic[s[l]] -= 1;
            if (dic[s[l]] == 0) dic.remove(s[l]);
            l += 1;
          }
          
          answer = max(answer, r - l + 1);
          r += 1;
      }

      return answer;
  }
}
```