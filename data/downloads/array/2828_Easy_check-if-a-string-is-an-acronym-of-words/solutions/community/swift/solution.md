# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3940069/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3940069/)

---

```
class Solution {
    func isAcronym(_ words: [String], _ s: String) -> Bool {
        String(words.compactMap(\\.first)) == s
    }
}
```