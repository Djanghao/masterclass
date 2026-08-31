# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3656720/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3656720/)

---

```
class Solution {
    func findValueOfPartition(_ nums: [Int]) -> Int {

        let nums = nums.sorted()
        var res = Int.max

        for i in 1..<nums.count {
            res = min(res, nums[i] - nums[i - 1])
        }

        return res
    }
}
```