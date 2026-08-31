# [Swift] Solution with DP

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/2052405/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/2052405/)

---

```
class Solution {
    func maxSumDivThree(_ nums: [Int]) -> Int {
        
        // dp[0] = largest sum which is divisible by 3
        // dp[1] = largest sum when divided by 3, remainder = 1
        // dp[2] = largest sum when divided by 3, remainder = 2
        var dp = Array(repeating: 0, count: 3)
        for n in nums {
            var arr = dp
            for val in arr {
                arr[(val + n) % 3] = max(val + n, arr[(val + n) % 3])
            }
            dp = arr
        }
        return dp[0]
    }
}
```