# [DFS] JS Solution w/ explanation

**Author:** hbjORbj
**Votes:** 2
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1250917/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/1250917/)

---

```
/*
1. We try all paths and remove all inefficient nodes.
How do we identify inefficient nodes?
- leaf node: if its value is less than limit (not given limit; it will change as we go down the tree), it is insufficient.
Hence, we return null in order to remove these leaf nodes.
- inner node: if both of its children are null, that means every root to leaf path that includes this node is invallid.
Hence, this node is insufficient as well.
*/
var sufficientSubset = function(root, limit) {
    return dfs(root, limit);
    // T.C: O(N) 
    // S.C: O(H)
};

function dfs(root, limit) {
    if (!root) {
        return null;
    }
    if (!root.left && !root.right) {
        return root.val < limit ? null : root;
    }
    root.left = dfs(root.left, limit - root.val);
    root.right = dfs(root.right, limit - root.val);
    // this node became a new leaf (hence it is insufficient node)
    // remove it by returning null
    if (!root.left && !root.right) {
        return null;
    } else {
        return root;
    }
}
```