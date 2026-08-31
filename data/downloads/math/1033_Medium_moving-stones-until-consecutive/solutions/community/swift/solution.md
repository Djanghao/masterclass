# My Swift solution beats 100% runtime & memory

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/508093/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/508093/)

---

My Swift solution beats 100% runtime & memory
```
class Solution {
    func numMovesStones(_ a: Int, _ b: Int, _ c: Int) -> [Int] {
        let nums = [a, b, c].sorted()
        let w = nums[2] - nums[0]
        let k = min(nums[1] - nums[0], nums[2] - nums[1])
        return [w == 2 ? 0 : (k < 3 ? 1 : 2), w - 2]
    }
}
```