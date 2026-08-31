# ✔️ [Python3] 5-LINES ☜ ( ͡❛ 👅 ͡❛), Explained

**Author:** artod
**Votes:** 29
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/1681647/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/1681647/)

---

We use the recursive Depth First Search here to build all binary numbers from the root-to-leaf path and sum them together. When a leaf node is reached, the function returns the built number. For the rest of the nodes, the function simply sums results from recursive calls. For building the binary number in the path we use a binary operation `(path << 1)` which shifts all bits to the left by one bit to free space for the current bit which we simply add to the path. Example:

`path=0  => (path<<1) + 1 = 01`
`path=01 => (path<<1) + 1 = 11`
`path=11 => (path<<1) + 0 = 110`
`path=110 => (path<<1) + 1 = 1101`

Time: **O(N)** - for DFS
Space: **O(N)** - recursive stack for binary tree is equal to the tree height

Runtime: 36 ms, faster than **80.51%** of Python3 online submissions for Sum of Root To Leaf Binary Numbers.
Memory Usage: 14.4 MB, less than **96.20%** of Python3 online submissions for Sum of Root To Leaf Binary Numbers.

```
class Solution:
    def sumRootToLeaf(self, root: Optional[TreeNode]) -> int:
        def dfs(node, path):
            if not node: return 0

            path = (path << 1) + node.val
			
            if not node.left and not node.right:
                return path
            
            return dfs(node.left, path) + dfs(node.right, path)
            
        return dfs(root, 0)
```