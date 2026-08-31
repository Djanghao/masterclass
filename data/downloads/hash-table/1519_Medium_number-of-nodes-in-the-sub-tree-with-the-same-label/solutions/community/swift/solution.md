# Swift | DFS

**Author:** OrchidHunter
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3037976/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3037976/)

---

**DFS (accepted answer)**
```
class Solution {
    func countSubTrees(_ n: Int, _ edges: [[Int]], _ labels: String) -> [Int] {
        let graph = edges.reduce(into: Array(repeating: [Int](), count:n)) { graph, edge in 
            graph[edge[0]].append(edge[1])
            graph[edge[1]].append(edge[0])
        }        
        let labels = labels.map { Int($0.asciiValue!) - 97 }
        var result = Array(repeating: 0, count: n)
        var ancestors = Array(repeating: [Int](), count: 26)
        
        func visit(_ node:Int, _ label: Int) {
            ancestors[label].append(node)
            ancestors[label].forEach { i in
                result[i] += 1
            }
            for child in graph[node] where result[child] == 0 {
                visit(child, labels[child])                
            }
            ancestors[label].removeLast()
        }
        
        visit(0, labels[0])
        return result
    }
}
```