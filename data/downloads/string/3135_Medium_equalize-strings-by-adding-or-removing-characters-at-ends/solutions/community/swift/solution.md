# Swift DP

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5103700/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5103700/)

---

**Bottom-Up DP Basic (accepted answer)**
```
class Solution {
  func minOperations(_ s: String, _ t: String) -> Int {
    var dp = Array(repeating:Array(repeating:0,count:t.count+1),count:s.count+1)
    for (i,c) in s.enumerated() {
        for (j,d) in t.enumerated() where c==d {
            dp[i+1][j+1] = dp[i][j] + 1 
        }
    }
    return s.count + t.count - 2 * dp.reduce(0){max($0,$1.max()!)}
  }
}
```

---

**Bottom-Up DP Optimized (accepted answer)**
```
class Solution {
    func minOperations(_ s: String, _ t: String) -> Int {
        var dp = Array(repeating: Array(repeating: 0, count: t.count+1), count: 2)
        var maxDiffs = 0
        for (i,c) in s.enumerated() {
            for (j,d) in t.enumerated()  {
                dp[i&1][j+1] = c==d ? dp[i&1^1][j] + 1 : 0
                maxDiffs = max(maxDiffs, dp[i&1][j+1])
            }
        }
        return s.count + t.count - 2 * maxDiffs
    }
}
```