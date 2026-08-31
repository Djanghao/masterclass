# [Swift] 1-liner, combinations(ofCount:)

**Author:** iamhands0me
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931329/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931329/)

---



# Code
```swift []
import Algorithms

class Solution {
    func countMaxOrSubsets(_ nums: [Int]) -> Int {
        nums
        .combinations(ofCount: 1...)
        .map { $0.reduce(into: 0) { $0 = $0 | $1 } }
        .reduce(into: [:]) { $0[$1, default: 0] += 1 }
        .max { $0.key < $1.key }?.value ?? 0
    }
}
```