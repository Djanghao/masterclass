# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6138970/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6138970/)

---

```
class Solution {
    func minOperations(_ nums: [Int], _ k: Int) -> Int {
        
        let nums = Set(nums)
        let mi = nums.min()!

        guard mi >= k else { return -1 }

        var res = nums.count
        if k == mi { res -= 1 }

        return res
    }
}
```