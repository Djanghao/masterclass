# Simple solution with DFS - TS|JS

**Author:** nursultanbegaliev
**Votes:** 4
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/3298711/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/3298711/)

---

# Code
```
function flatten(root: TreeNode | null): void {
    function dfs(root: TreeNode | null) {
        if (!root) return;

        const leftTail: TreeNode | null = dfs(root.left);
        const rightTail: TreeNode | null = dfs(root.right);

        if(root.left) {
            leftTail.right = root.right;
            root.right = root.left;
            root.left = null;
        }

        return rightTail || leftTail || root;
    }

    dfs(root);
};
```