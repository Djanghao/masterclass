# Swift solution

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/5658036/](https://leetcode.com/problems/tree-diameter/solutions/5658036/)

---

# Intuition
Nicely explained in one of the you tube video if you want more details. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func treeDiameter(_ edges: [[Int]]) -> Int {
        
        var node: TreeNode?
        var graph: [Set<Int>] = Array(repeating: [], count: edges.count + 1)

        for edge in edges {
            let node1 = edge[0]
            let node2 = edge[1]
            graph[node1].insert(node2)
            graph[node2].insert(node1)
        }

        // print("graph \\(graph)")
        var res = 0 
        func dfs(_ x: Int, _ parent: Int) -> Int {
            var leftLength = 0

            for y in graph[x] {
                // to avoid a circular path
                if parent == y {
                    continue
                }
                let rightLength = dfs(y, x) + 1
                res = max(res, leftLength + rightLength)
                leftLength = max(leftLength, rightLength)
            }
            
            return leftLength
        }

        dfs(0, -1)

        return res
        
    }
}
```