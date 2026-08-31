# My kotlin solution with time O(logN) and spae O(1)

**Author:** hj-core
**Votes:** 2
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/2413952/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/2413952/)

---

Below is my solution using recursive binary-search process. Since root is a BST, we can use its node's value to judge which branch to process the further search, or stop right at that node as it is the LCA.
```
class Solution {
    /* Complexity:
     * Time O(logN) where N is the number of nodes in root;
     * Space O(1);
     */
    tailrec fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
        require(root != null && p != null && q != null)
        val (small, large) = if (p.`val` < q.`val`) p.`val` to q.`val` else q.`val` to p.`val`
        val currentVal = root.`val`
        return when {
            large < currentVal -> lowestCommonAncestor(root.left, p, q)
            small > currentVal -> lowestCommonAncestor(root.right, p, q)
            else -> root
        }
    }
}
```