# Swift | DFS

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3381206/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3381206/)

---

**DFS (accepted answer)**
```
class Solution {
    func findShortestCycle(_ n: Int, _ edges: [[Int]]) -> Int {
        let graph = edges.reduce(into: [Int: [Int]]()) { graph, edge in
            graph[edge[0], default:[]].append(edge[1])
            graph[edge[1], default:[]].append(edge[0])
        }

        var minCycleLength = Int.max
        var visited = Set<Int>()

        func dfs(_ node:Int, _ path:[Int] = []) {
            guard
                !visited.contains(node),
                let neighbors = graph[node]
            else { return }
            
            for (i, n) in path.dropLast().enumerated().reversed() where neighbors.contains(n) {
                minCycleLength = min(minCycleLength, path.count - i + 1)
                return
            }

            let newPath = path + [node]
            guard newPath.count < minCycleLength else { return }
            for neighbor in neighbors where !path.contains(neighbor) {
                dfs(neighbor, newPath)
            }
        }

        for node in 0 ..< n {
            dfs(node)
            visited.insert(node)
        }

        return minCycleLength == Int.max ? -1 : minCycleLength
    }
}
```