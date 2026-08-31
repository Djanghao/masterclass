# Swift | DFS

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3061022/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3061022/)

---

**DFS (accepted answer)**
```
class Solution {
    func maxOutput(_ n: Int, _ edges: [[Int]], _ price: [Int]) -> Int {
        var result = 0
        let graph = edges.reduce(into: [0: [-1]]) { graph, edge in
            graph[edge[0], default: .init()].append(edge[1])
            graph[edge[1], default: .init()].append(edge[0])
        }
        
        func dfs(_ node: Int, _ prev: Int = -1) -> [Int] {
            graph[node]!.filter { $0 != prev }.reduce(into: [0, price[node]]) { nodeMax, next in
                let adjacentMax = dfs(next, node)
                result = max(result, zip(nodeMax, adjacentMax.reversed()).map{ $0.0 + $0.1 }.max()!)
                nodeMax = zip(nodeMax, adjacentMax).map { max($0.0, $0.1 + price[node]) }
            }
        }
        
        dfs(0)
        return result
    }
}

```