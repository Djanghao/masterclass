# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-operations/solutions/6049189/](https://leetcode.com/problems/minimum-total-operations/solutions/6049189/)

---

**Good Interview Answer (accepted answer)**
Filter out adjacent values that are the same, and return the count of the remaining values. Use `.lazy` to make the solution space-efficient.
```
import Algorithms
class Solution {
    func minOperations(_ nums: [Int]) -> Int {
        nums.adjacentPairs().lazy.filter(!=).count
    }
}
```
`.adjacentPairs()` reference: [https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/swift/collection/adjacentpairs()](https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/swift/collection/adjacentpairs())