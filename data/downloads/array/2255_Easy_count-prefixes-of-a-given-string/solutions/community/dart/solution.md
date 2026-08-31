# 🟢🔴🟢 Beats 100.00%👏 1 Line Code 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/5979603/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/5979603/)

---

```
class Solution {
  int countPrefixes(List<String> words, String s) {
    return words.where((word)=> s.startsWith(word)).length;
  }
}
```