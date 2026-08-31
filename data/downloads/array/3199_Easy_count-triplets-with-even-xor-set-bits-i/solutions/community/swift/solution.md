# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/6057687/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/6057687/)

---

**One-Liner (accepted answer)**
```
import Algorithms
class Solution {
    func tripletCount(_ a: [Int], _ b: [Int], _ c: [Int]) -> Int {
        product(product(a,b).map(^), c).map(^).map(\\.nonzeroBitCount).filter{$0&1 == 0}.count
    }
}
```