# 🔥🔥 Easy, short, Fast Python/Swift DP

**Author:** blest
**Votes:** 12
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/2852517/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/2852517/)

---

**Python**
```
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        total, n = 0, len(nums)
        dp = [defaultdict(int) for _ in nums]
        for i in range(1, n):
            for j in range(i):
                diff = nums[j] - nums[i]
                dp[i][diff] += dp[j][diff] + 1
                total += dp[j][diff]
        return total
```

**Swift**
```
class Solution {
    func numberOfArithmeticSlices(_ nums: [Int]) -> Int {
        var total = 0
        let n = nums.count
        var dp = Array(repeating: [Int: Int](), count: n)
        for i in 1..<n {
            for j in 0..<i {
                let diff = nums[j] - nums[i]
                dp[i][diff, default: 0] += dp[j][diff, default: 0] + 1
                total += dp[j][diff, default: 0]
            }
        }
        return total
    }
}
```