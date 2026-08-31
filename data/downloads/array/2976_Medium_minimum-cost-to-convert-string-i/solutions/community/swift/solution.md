# Swift💯Fast FloydWarshall

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5541342/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5541342/)

---

**Floyd-Warshall (accepted answer)**
```
import Algorithms

class Solution {
    func minimumCost(_ source: String, _ target: String, _ original: [Character], _ changed: [Character], _ cost: [Int]) -> Int {
        var dp = Array(repeating: Array(repeating: Int.max, count:26), count:26)
        let index = {(ch:Character) in Int(ch.asciiValue!) - 97}
        var lower = 25, upper = 0
        
        for i in original.indices  {
            let (s,t) = (index(original[i]), index(changed[i]))
            dp[s][t] = min(dp[s][t], cost[i])
            lower = min(lower, s, t)
            upper = max(upper, s, t)
        }
        
        let range = lower...upper
        for i in range {
            for (s,t) in product(range, range) { 
                let (cost, overflow) = dp[s][i].addingReportingOverflow(dp[i][t])
                guard !overflow, cost<dp[s][t] else { continue }
                dp[s][t] = cost
            }
        }

        var totalCost = 0
        for (s,t) in zip(source,target) where s != t {
            let cost = dp[index(s)][index(t)]
            guard cost < .max else { return -1 }
            totalCost += cost
        }
        return totalCost
    }
}
```