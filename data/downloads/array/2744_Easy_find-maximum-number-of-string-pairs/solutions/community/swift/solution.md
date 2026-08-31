# One line solution

**Author:** likils
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3763010/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3763010/)

---

# Code
```
class Solution {
    func maximumNumberOfStringPairs(_ words: [String]) -> Int {
        return words.count - Set(words.map(Set.init)).count
    }
}
```