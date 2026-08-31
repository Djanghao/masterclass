# Swift | Short Solution

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-game/solutions/5379161/](https://leetcode.com/problems/sum-game/solutions/5379161/)

---

=# Code
```
class Solution {
    func sumGame(_ num: String) -> Bool {
        let n = num.count
        let nums = num.map { $0.wholeNumberValue.flatMap(Double.init) ?? 4.5 }

        return nums[0..<n / 2].reduce(0, +) != nums[n / 2..<n].reduce(0, +)
    }
}
```