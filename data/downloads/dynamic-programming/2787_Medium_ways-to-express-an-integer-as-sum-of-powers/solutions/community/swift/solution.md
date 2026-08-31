# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/4687625/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/4687625/)

---

```
class Solution {
    func numberOfWays(_ n: Int, _ x: Int) -> Int {
        
        func powi(_ a: Int, _ b: Int) -> Int {
            Int(pow(Double(a), Double(b)))
        }

        let len = (0...Int.max).lazy.first(where: { powi($0, x) > n })! - 1
        let cands = (1...len).map { powi($0, x) }

        var dp = Array(
            repeating: Array(repeating: 0, count: cands.count),
            count: n + 1
        )

        for n in 1...n {
            for i in cands.indices {
                let c = cands[i]
                guard c <= n else { break }
                if c == n { dp[n][i] += 1 }
                dp[n][i] = dp[n - c][0..<i].reduce(dp[n][i]) { ($0 + $1) % 1000_000_007 }
            }
        }

        return dp.last!.reduce(0) { ($0 + $1) % 1000_000_007 }
    }
}
```