# Simple TS Solution | O(n)

**Author:** btirthamouli
**Votes:** 0
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1948711/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1948711/)

---

```
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    // Base case
    if(!root) {
        return null;
    }
    
    // When greater
    if(root.val > high) {
        return trimBST(root.left, low, high);
    }
    
    // When lesser
    if(root.val < low) {
        return trimBST(root.right, low, high);
    }
    
    // When in-between
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};
```