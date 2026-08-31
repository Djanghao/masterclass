# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/6161720/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/6161720/)

---

**One-Liner, terse (accepted answer)**
```
import Algorithms
class Solution {
    func maxChunksToSorted(_ arr: [Int]) -> Int {
        zip(0...,arr.reductions(max)).filter(==).count
    }
}
```
**One-Liner, Swift 6, terse (accepted answer)**
```
zip(0...,arr.reductions(max)).count(where: ==) // Requires Swift 6
```
`.reductions()` reference: [https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/reductions](https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/reductions)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func maxChunksToSorted(_ arr: [Int]) -> Int {
        var maxItem = 0
        return arr.indices.reduce(into: 0)  { count, i in 
            maxItem = max(maxItem, arr[i])
            count += maxItem == i ? 1:0
        }
    }
}
```
