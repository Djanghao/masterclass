# Swift

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/5442322/](https://leetcode.com/problems/relocate-marbles/solutions/5442322/)

---

```
class Solution {
    func relocateMarbles(_ nums: [Int], _ moveFrom: [Int], _ moveTo: [Int]) -> [Int] {
        let m = moveFrom.count
        var set = Set(nums)

        for i in 0..<m {
            set.remove(moveFrom[i])
            set.insert(moveTo[i])
        }

        return set.sorted()
    }
}
```