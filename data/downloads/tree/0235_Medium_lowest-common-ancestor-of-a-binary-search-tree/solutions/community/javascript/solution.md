# JavaScript Iterative / Recursive

**Author:** hon9g
**Votes:** 58
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/541362/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/541362/)

---

### Iterative solution
- Time Complexity: O(H)
- Space Complexity: O(1)
```JavaScript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};
```
### Recursive solution
- Time Complexity: O(H)
- Space Complexity: O(H)

```JavaScript
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};
```