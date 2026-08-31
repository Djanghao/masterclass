# Swift💯1liners

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5717565/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5717565/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
  func construct2DArray(_ original: [Int], _ m: Int, _ n: Int) -> [[Int]] {
    original.count == m*n ? (0..<m).map{Array(original[$0*n..<($0+1)*n])} : []
  }
}
```
**Using Algorithms (accepted answer)**
```
import Algorithms

class Solution {
  func construct2DArray(_ original: [Int], _ m: Int, _ n: Int) -> [[Int]] {
    original.count == m*n ? original.chunks(ofCount: n).map(Array.init) : []
  }
}
```