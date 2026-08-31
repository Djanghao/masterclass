# Simple JS/TS solution

**Author:** wajeshubham
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/3044830/](https://leetcode.com/problems/longest-univalue-path/solutions/3044830/)

---

# Code
```
function longestUnivaluePath(root: TreeNode | null): number {
    if(!root) return 0
    let universalPath = 0

    function postOrderHelper(node: TreeNode | null, parent:TreeNode | null): number {
        let leftTreePath = 0, rightTreePath = 0

        if(node.left) leftTreePath = postOrderHelper(node.left, node) 
        if(node.right) rightTreePath = postOrderHelper(node.right, node) 
        let totalChildrenPath = leftTreePath + rightTreePath

        universalPath = Math.max(universalPath, totalChildrenPath)
        
        if(!parent) return universalPath
        return node.val === parent.val ? Math.max(leftTreePath, rightTreePath) + 1 : 0
    }

    return postOrderHelper(root, null)
};
```