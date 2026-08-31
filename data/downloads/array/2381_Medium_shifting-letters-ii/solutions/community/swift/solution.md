# Swift | Line sweep

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/5292513/](https://leetcode.com/problems/shifting-letters-ii/solutions/5292513/)

---

# Code
```
class Solution {
    func shiftingLetters(_ s: String, _ shifts: [[Int]]) -> String {
        let n = s.count

        var offsets = Array(repeating: 0, count: n + 1)
        for shift in shifts {
            let offset = shift[2] == 0 ? -1 : 1
            offsets[shift[0]] += 26 + offset
            offsets[shift[1] + 1] -= offset
        }

        let alpha = Array("abcdefghijklmnopqrstuvwxyz")
        var res = ""
        var totalOffset = 0
        for (i, c) in s.enumerated() {
            totalOffset += offsets[i]
            res.append(alpha[(alpha.firstIndex(of: c)! + totalOffset) % 26])
        }

        return res
    }
}
```