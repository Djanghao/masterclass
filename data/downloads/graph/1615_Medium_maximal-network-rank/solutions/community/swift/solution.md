# 🚀 Swift | Graph |Time: O(roads.count + n^2) | Space: O(roads.count)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/4400369/](https://leetcode.com/problems/maximal-network-rank/solutions/4400369/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Save connections of each city. 
Iterate though all city's pairs, calculate sum of pair's connections, in case if cities in pair are connected decrement sum by 1.

# Complexity
- Time complexity: O(roads.count + n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(roads.count)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximalNetworkRank(_ n: Int, _ roads: [[Int]]) -> Int {
        var connections: [Int: Set<Int>] = [:]
        
        for i in 0 ..< roads.count {
            let road = roads[i]
            let from = road[0]
            let to = road[1]
            
            if var roadConnections = connections[from] {
                roadConnections.insert(to)
                connections[from] = roadConnections
            } else {
                connections[from] = .init([to])
            }
            
            if var roadConnections = connections[to] {
                roadConnections.insert(from)
                connections[to] = roadConnections
            } else {
                connections[to] = .init([from])
            }
        }
        
        var res: Int = .min
        
        for i in 0 ..< n {
            for j in i + 1 ..< n {
                var networkRank = (connections[i]?.count ?? 0) + (connections[j]?.count ?? 0)
                let isIConnectedWithJ = connections[i]?.contains(j) ?? false
                if isIConnectedWithJ {
                    networkRank -= 1
                }
                res = max(res, networkRank)
            }
        }
        
        return res
    }
}
```