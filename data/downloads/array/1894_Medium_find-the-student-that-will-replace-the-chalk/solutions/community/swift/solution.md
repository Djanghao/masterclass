# [Swift] 1 line, reductions(_:), partitioningIndex(where:)

**Author:** iamhands0me
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5722947/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5722947/)

---



# Code
```swift []
import Algorithms

class Solution {
    func chalkReplacer(_ chalk: [Int], _ k: Int) -> Int {
        chalk.reductions(+).partitioningIndex { $0 > k % chalk.reduce(into: 0, +=) }
    }
}
```