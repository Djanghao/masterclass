# simplest way

**Author:** bibinpeter2018
**Votes:** 1
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/4992237/](https://leetcode.com/problems/wildcard-matching/solutions/4992237/)

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
  bool isMatch(String s, String p) {
    int sIndex = 0, pIndex = 0, sStar = -1, pStar = -1;

    while (sIndex < s.length) {
      if (pIndex < p.length && (p[pIndex] == '?' || s[sIndex] == p[pIndex])) {
        sIndex++;
        pIndex++;
      } else if (pIndex < p.length && p[pIndex] == '*') {
        sStar = sIndex;
        pStar = pIndex++;
      } else if (sStar != -1) {
        sIndex = ++sStar;
        pIndex = pStar + 1;
      } else {
        return false;
      }
    }

    while (pIndex < p.length && p[pIndex] == '*') {
      pIndex++;
    }

    return pIndex == p.length;
  }
}

```