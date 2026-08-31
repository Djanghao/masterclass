# Swift Solution using two pointers O(n)

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3623152/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3623152/)

---

# Code
```
class Solution {
    func longestSemiRepetitiveSubstring(_ s: String) -> Int {
        let s = Array(s)
        var res = 1
        var j = 0
        var last = 0

        for i in s.indices.dropFirst() {
            if s[i] == s[i - 1] {
                j = last
                last = i
            }
            res = max(res, i - j + 1)
        }

        return res
    }
}
```