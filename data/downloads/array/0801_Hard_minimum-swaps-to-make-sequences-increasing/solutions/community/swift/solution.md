# Swift DP solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/1074346/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/1074346/)

---

Swift DP solution
```
class Solution {
    func minSwap(_ A: [Int], _ B: [Int]) -> Int {
        let c = min(A.count, B.count)
        var dp = [[Int]](repeating: [Int](repeating: 0, count: 2), count: c)
        dp[c - 1][1] = 1
        for i in stride(from: c - 2, through: 0, by: -1) {
            let normal = A[i] < A[i + 1] && B[i] < B[i + 1], swap = A[i] < B[i + 1] && B[i] < A[i + 1]
            dp[i][0] = min(normal ? dp[i + 1][0] : Int.max, swap ? dp[i + 1][1] : Int.max)
            dp[i][1] = min(normal ? dp[i + 1][1] + 1 : Int.max, swap ? dp[i + 1][0] + 1 : Int.max)
        }
        return min(dp[0][0], dp[0][1])
    }
}
```