# Easy Solution

**Author:** abbos2101
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/5424334/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/5424334/)

---

```
class Solution {
  String generateTheString(int n) {
    if (n.isOdd) {
      return List.generate(n, (_) => "a").join();
    }
    return "a${List.generate(n - 1, (_) => "b").join()}";
  }
}
```