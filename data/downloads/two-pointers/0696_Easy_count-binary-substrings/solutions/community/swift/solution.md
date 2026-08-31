# Swift solution O(n) runtime & O(1) memory

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/454115/](https://leetcode.com/problems/count-binary-substrings/solutions/454115/)

---

Swift solution O(n) runtime & O(1) memory
```
class Solution {
    func countBinarySubstrings(_ s: String) -> Int {
        var result: Int = 0
        var iS = s.startIndex
        var eS = s.endIndex
        var startChar: Character = s[iS]
        var startCharCount: Int = 1
        var diffCharCount: Int = 0
        var wasDiff: Bool = false
        s.formIndex(after: &iS)
        while iS < eS {
            if s[iS] == startChar {
                if !wasDiff {
                    startCharCount += 1
                } else {
                    startChar = s[iS] == "0" ? "1" : "0"
                    startCharCount = diffCharCount
                    diffCharCount = 1
                    wasDiff = true
                    result += 1
                }
            } else {
                wasDiff = true
                diffCharCount += 1
                if diffCharCount <= startCharCount {
                    result += 1
                } else {
                    startChar = s[iS]
                    startCharCount = diffCharCount
                    diffCharCount = 0
                    wasDiff = false
                }
            }
            s.formIndex(after: &iS)
        }
        return result
    }
}
```