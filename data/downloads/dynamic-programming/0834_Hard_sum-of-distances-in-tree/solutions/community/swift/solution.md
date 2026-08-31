# ✅ Swift 2 dfs solution! Runtime 1037 ms - Beats 100%

**Author:** protodimbo
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/2937756/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/2937756/)

---

# Code
```
class Solution {
    func sumOfDistancesInTree(_ n: Int, _ edges: [[Int]]) -> [Int] {
        // formula = parentSum - closerNodes + furtherNodes
        let graph = edges.reduce(into: Array(repeating: [Int](), count: n)) { graph, edge in 
            graph[edge[0]].append(edge[1])
            graph[edge[1]].append(edge[0])
        }
        var closerNodesCount = Array(repeating: 0, count: n)
        var answer = Array(repeating: 0, count: n)
        var seen = Set<Int>()

        func dfs(_ cur: Int) -> Int {
            var closerNodes = 1

            for child in graph[cur] {
                if !seen.contains(child) {
                    seen.insert(child)
                    var childNodesCount = dfs(child)
                    closerNodes += childNodesCount
                    answer[0] += childNodesCount
                }
            }
            closerNodesCount[cur] = closerNodes
            return closerNodes
        }

        seen.insert(0)
        dfs(0) // populate closerNodesCount and answer[0]

        func dfs2(_ cur: Int) {
            for child in graph[cur] {
                if !seen.contains(child) {
                    seen.insert(child)
                    answer[child] = answer[cur] - closerNodesCount[child] + (n - closerNodesCount[child])
                    dfs2(child)
                }
            }
        }

        seen = Set<Int>()
        seen.insert(0)
        dfs2(0) // using answer[0] as base to populate all the other nodes

        return answer
    }
}
```