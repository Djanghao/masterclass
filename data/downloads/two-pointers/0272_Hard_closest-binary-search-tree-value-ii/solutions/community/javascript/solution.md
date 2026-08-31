# Javascript - inorder DFS, no sort, with sliding window. O(n)

**Author:** jinwer
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/1530823/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/1530823/)

---

```
var closestKValues = function(root, target, k) {
    const res = [];
    
    const getDist = x => {
        return Math.abs(x - target);
    }
    
    const inorder = node => {
        if (!node) return;
        
        inorder(node.left);
        
        const dist = getDist(node.val);
        if (res.length === k) {
            const firstD = getDist(res[0]);
            const lastD = getDist(res[res.length - 1]);
            if (dist < firstD) {
                res.shift();
            } else {
                return;
            }
        }
        res.push(node.val);
        
        inorder(node.right);
    }
    
    inorder(root);
    return res;
};

```