# Swift | 2 pointers

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/5392308/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/5392308/)

---

This is essentially optimal. No extra space and we only consider each word at most once.

# Code
```
class Solution {
    func closetTarget(_ words: [String], _ target: String, _ startIndex: Int) -> Int {
        let n = words.count

        var offset = 0
        while offset <= n / 2 {
            if words[(startIndex + offset) % n] == target { return offset }
            if words[(n + startIndex - offset) % n] == target { return offset }
            offset += 1
        }
        return -1
    }
}
```