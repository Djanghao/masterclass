# Swift 🪶

**Author:** WallaWonka
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/3409034/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/3409034/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var children: [Node]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.children = []
 *     }
 * }
 */

class Solution {
    func levelOrder(_ root: Node?) -> [[Int]] {
        var output = [[Int]]()
        guard let root = root else { return [] }
        var nodesToVisit = [root]
        while !nodesToVisit.isEmpty {
            var newNodesToVisit = [Node]()
            var nodesValInLevel = [Int]()
            for node in nodesToVisit {
                nodesValInLevel.append(node.val)
                newNodesToVisit.append(contentsOf: node.children)
            }
            output.append(nodesValInLevel)
            nodesToVisit = newNodesToVisit
        }
        return output
    }
}
```