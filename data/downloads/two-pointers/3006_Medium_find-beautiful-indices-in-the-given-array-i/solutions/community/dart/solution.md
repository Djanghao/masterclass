# Dart quick solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5140804/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5140804/)

---

# Code
```
class Solution {
  List<int> beautifulIndices(String s, String a, String b, int k) {
    var ans = <int>[];
    var m_b = <int>[];
    for (var j = 0; j != -1 && j <= s.length - a.length; j++) {
      j = s.indexOf(b, j);
      if (j == -1) break;
      m_b.add(j);
    }

    for (var i = 0; i != -1 && i <= s.length - a.length; i++) {
      i = s.indexOf(a, i);
      if (i == -1) break;
      if (m_b.any((j) => (j - i).abs() <= k)) {
        ans.add(i);
      }
    }
    return ans;
  }
}

```