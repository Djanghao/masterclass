# Swift Solution | One Liner

**Author:** chsherbak_sergey
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1594102/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1594102/)

---

```
class Solution {
  func arrayStringsAreEqual(_ word1: [String], _ word2: [String]) -> Bool {
    word1.joined() == word2.joined()
  }
}
```