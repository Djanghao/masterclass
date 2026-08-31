# Swift Simple solution O(N)

**Author:** punk9595
**Votes:** 1
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/803081/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/803081/)

---

```
	func lcaDeepestLeaves(_ root: TreeNode?) -> TreeNode? {
        return getDepth(root).node
    }
    
    func getDepth(_ node: TreeNode?) -> (node: TreeNode?,depth: Int) {
        guard let root = node else {
            return (node, 0)
        }
        let left = getDepth(root.left) 
        let right = getDepth(root.right)

        if left.depth == right.depth { return (root, left.depth + 1)} 
        else if left.depth > right.depth { return (left.node, left.depth + 1)}
        return (right.node, right.depth + 1)
    }
```