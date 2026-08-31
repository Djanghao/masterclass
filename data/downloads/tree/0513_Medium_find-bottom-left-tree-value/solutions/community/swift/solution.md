# Swift | BFS

**Author:** dashchak
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4793267/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4793267/)

---

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(2^d)$$ where d is the depth of the tree. The space complexity is driven by the maximum number of nodes at any level in the tree.

# Code
```
class Solution {
    func findBottomLeftValue(_ root: TreeNode?) -> Int {
        var levelStack = [root!]
        var result = 0
        while !levelStack.isEmpty {
            result = levelStack[0].val
            levelStack = levelStack.flatMap{ [$0.left, $0.right].compactMap{ $0 } }
        }
        return result
    }
}
```