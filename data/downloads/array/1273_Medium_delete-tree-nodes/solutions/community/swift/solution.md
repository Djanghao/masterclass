# Simple DFS solution (100% faster)

**Author:** varunadit2
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/5254971/](https://leetcode.com/problems/delete-tree-nodes/solutions/5254971/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simple DFS approach. We start at the leaves and work our way back to the root of the tree

# Approach
<!-- Describe your approach to solving the problem. -->
We create a dictionary to keep a track of the node's children, i.e., the nodes that will have an efffect on the subtree sum. 
Then use DFS for a bottom-up approach of pruning subtrees whose node sums equal zero.


# Code
```
class Solution {
    func deleteTreeNodes(_ nodes: Int, _ parent: [Int], _ value: [Int]) -> Int {

        var dict = [Int:[Int]]()

        for i in 0..<parent.count {
            if parent[i] != -1 {
                dict[parent[i], default:[]].append(i)
            }
        }

        func dfs(_ root: Int) -> (Int, Int) {
            var totSum = value[root]
            var totNodes = 1

            guard let rootChildren = dict[root] else {
                return totSum != 0 ? (totSum, totNodes) : (0,0)
            }

            for child in rootChildren {
                let (childSum, childNodes) = dfs(child)
                totSum += childSum
                totNodes += childNodes
            }

            if totSum == 0 {
                totNodes = 0
            }

            return (totSum, totNodes)
        }

        return dfs(0).1
    }
}
```