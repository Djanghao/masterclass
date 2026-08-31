# Swift😎

**Author:** OrchidHunter
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3479513/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3479513/)

---

**Set Operations (accepted answer)**
```
class Solution {
    func findDifference(_ p: [Int], _ q: [Int]) -> [[Int]] {
        [Set(p).subtracting(q), Set(q).subtracting(p)].map(Array.init) 
    }
}

```