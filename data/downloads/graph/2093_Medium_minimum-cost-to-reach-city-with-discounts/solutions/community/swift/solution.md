# ✅ Swift | 100 % | O(V + ElogE) | O(V^2)

**Author:** rnin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5522675/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5522675/)

---

# Code
```
import Collections

class Solution { 
    func minimumCost(_ n: Int, _ highways: [[Int]], _ discounts: Int) -> Int {
        var graph: [Int: [(Int, Int)]] = [:]

        // Build graph
        for highway in highways {
            let (start, destination, toll) = (highway[0], highway[1], highway[2])
            graph[start, default: []].append((destination, toll))
            graph[destination, default: []].append((start, toll))
        }

        var dp = Array(repeating: Array(repeating: Int.max, count: discounts + 1), count: n)

        dp[0][0] = 0
        
        var queue: [(Int, Int, Int)] = [(0, 0, 0)]

        while !queue.isEmpty {
            let (city, cost, discountsUsed) = queue.removeFirst()

            if dp[city][discountsUsed] < cost {
                continue
            }

            for (neighbor, toll) in graph[city] ?? [] {
                if cost + toll < dp[neighbor][discountsUsed] {
                    dp[neighbor][discountsUsed] = cost + toll
                    queue.append((neighbor, dp[neighbor][discountsUsed], discountsUsed))
                }

                if discountsUsed < discounts {
                    let newCost = cost + (toll / 2)
                    if newCost < dp[neighbor][discountsUsed + 1] {
                        dp[neighbor][discountsUsed + 1] = newCost
                        queue.append((neighbor, newCost, discountsUsed + 1))
                    }
                }
            }
        }

        return dp[n - 1].min()! == .max ? -1 : dp[n - 1].min()!
    }
}
```