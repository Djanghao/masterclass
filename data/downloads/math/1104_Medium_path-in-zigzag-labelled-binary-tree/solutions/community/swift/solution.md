# [Swift] Solution

**Author:** sairamkotha
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/781732/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/781732/)

---

```
final class Solution {
    func pathInZigZagTree(_ label: Int) -> [Int] {
        var labelCopy = label

        var level = 0
        while labelCopy > 0 {
            level += 1
            labelCopy = labelCopy/2
        }

        var output = [Int]()
        var nextLevel = label
        while level > 0 {
            let min = Double(pow(Double(2.0), Double(level - 1)))
            let max = Double(pow(Double(2.0), Double(level)) - 1.0)
            output.append(nextLevel)
            nextLevel = (Int(max + min) - nextLevel) / 2
            level -= 1
        }
        return output.reversed()
    }
 }
```