# TypeScript Easy Understand

**Author:** iamboy1150
**Votes:** 1
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1174796/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1174796/)

---

```
function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
    function dfs(root: TreeNode | null, sum: number): TreeNode | null {
        
        // if there is no root
        if (!root) return null
        
        // if it is the leaf
        if (root && !root.left && !root.right) {
            if (sum + root.val >= limit) {
                return root
            } else {
                return null
            }
        }
        
        // if not leaf and has left node
        if (root && root.left) {
            root.left = dfs(root.left, sum + root.val)
        }
        
        // if not leaf and has right node
        if (root && root.right) {
            root.right = dfs(root.right, sum + root.val)
        }
        
        // if both left and right node are null return null
        if (!root.left && !root.right) return null
        
        return root
    }
    
    
    return dfs(root, 0)
};
```