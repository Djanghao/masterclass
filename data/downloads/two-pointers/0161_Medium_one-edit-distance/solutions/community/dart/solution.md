# Dart: One pass algorithm

**Author:** felixrzayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/3013936/](https://leetcode.com/problems/one-edit-distance/solutions/3013936/)

---

# Code
```
class Solution {
  bool isOneEditDistance(String s, String t) {
    int ns = s.length;
    int nt = t.length;


    if (ns > nt) {
      return isOneEditDistance(t, s);
    }


    if (nt - ns > 1) {
      return false;
    }

    for (var i = 0; i < ns; i++) {
      if (s[i] != t[i]) {

        if (ns == nt) {
          return s.substring(i + 1) == t.substring(i + 1);
        } else {
          return s.substring(i) == t.substring(i + 1);
        }
      }
    }

    return (ns + 1 == nt);
  }
}
```