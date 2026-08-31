# Swift fast solution

**Author:** Akromium
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/2693382/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/2693382/)

---

```
class Solution {
    func canPartition(_ nums: [Int]) -> Bool {
        let sum = nums.reduce(0, +)
        if sum % 2 != 0 {
            return false
        }
        let target = sum / 2
        var dp = Array(repeating: false, count: target + 1)
        dp[0] = true
        for num in nums {
            for i in stride(from: target, through: num, by: -1) {
                dp[i] = dp[i] || dp[i - num]
            }
        }
        return dp[target]
    }
}
```
Please upvote if you find it helpful