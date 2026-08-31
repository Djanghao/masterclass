# DFS solution

**Author:** protodimbo
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/2969760/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/2969760/)

---



# Code
```
class Solution {
    func allPathsSourceTarget(_ graph: [[Int]]) -> [[Int]] {
        var answer = [[Int]]()

        func dfs(_ node: Int, _ path: [Int]) {
            var path = path
            if node == graph.count - 1 {
                answer.append(path)
                return
            }

            for v in graph[node] {
                path.append(v)
                dfs(v, path)
                path.removeLast()
            }
        }

        dfs(0, [0])
        return answer
    }
}
```