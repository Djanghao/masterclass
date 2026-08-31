# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/3273836/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/3273836/)

---

```
class Solution {
    func minOperations(_ boxes: String) -> [Int] {
        
        let bs = boxes
            .map { $0 }
            .enumerated()
            .filter { $0.element == "1" }
            .map { $0.offset }
        
        return (0..<boxes.count).map { i in bs.map({ abs(i - $0) }).reduce(0, +) }
    }
}
```