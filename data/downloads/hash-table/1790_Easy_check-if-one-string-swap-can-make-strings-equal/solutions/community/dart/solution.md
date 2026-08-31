# Easy method

**Author:** 0varun
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/4216570/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/4216570/)

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
  bool areAlmostEqual(String s1, String s2) {
      if(s1 == s2) return true;

      List diff =[];
      for(var i = 0; i < s1.length; i++){
          if(s1[i] != s2[i])
              diff.add(i);     
      }
      if(diff.length != 2) return false;
      int ft = diff[0], st = diff[1];

      return s1[ft] == s2[st] && s1[st] == s2[ft];


  }
}
```