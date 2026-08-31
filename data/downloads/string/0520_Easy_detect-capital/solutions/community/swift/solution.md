# Swift Easy solution

**Author:** samiul110107
**Votes:** 4
**Link:** [https://leetcode.com/problems/detect-capital/solutions/1714691/](https://leetcode.com/problems/detect-capital/solutions/1714691/)

---

```
class Solution {
    func detectCapitalUse(_ word: String) -> Bool {
        var cap = 0
        for c in word {
            cap += c.isUppercase ? 1 :  0
        }
        return cap == word.count || cap == 0 || (cap == 1 && word.first!.isUppercase)
    }
}
```