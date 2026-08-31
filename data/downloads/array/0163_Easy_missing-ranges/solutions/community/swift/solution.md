# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/6141256/](https://leetcode.com/problems/missing-ranges/solutions/6141256/)

---

**One-Liner (accepted answer)**
Unfortunate that `.chain()` cannot take three parameters...
```
import Algorithms
class Solution {
    func findMissingRanges(_ nums: [Int], _ lower: Int, _ upper: Int) -> [[Int]] {
        chain([lower-1], chain(nums, [upper+1]))
            .adjacentPairs()
            .filter{a,b in a+1 != b}
            .map{a,b in [a+1,b-1]}
    }
}
```

**Conventional Form (accepted answer)**
```
import Algorithms
class Solution {
    func findMissingRanges(_ nums: [Int], _ lower: Int, _ upper: Int) -> [[Int]] {
        var result = [[Int]]()
        let nums = [lower-1] + nums + [upper+1]
        for (a,b) in nums.adjacentPairs() where a+1 != b {
            result.append([a+1, b-1])
        }
        return result
    }
}
```