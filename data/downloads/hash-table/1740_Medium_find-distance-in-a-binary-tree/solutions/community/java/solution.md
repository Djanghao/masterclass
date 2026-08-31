# Easy to understand LCA Java 100%

**Author:** luoyingqi001
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1556612/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1556612/)

---

step 1: find lca
step 2: find level of p and q from lca
level 3: add up the levels from lca to get the result

    class Solution {
    public int findDistance(TreeNode root, int p, int q) {
        TreeNode lca = lowestCommonAncestor(root, p, q); // step 1: find lca
        int h1 = findDepth2(lca, p, 0); // step 2: find level of p from lca
        int h2 = findDepth2(lca, q, 0); // step 2: find level of q from lca
        return h1 + h2; // level 3: add up the level from lca
    }
    
    // find the level of node p
    private int findDepth2(TreeNode root, int p, int index) {
        if (root == null) return 0;
        if (root.val == p) return index;
        int d = findDepth2(root.left, p, index + 1);
        // if d is 0, p was not found in previous nodes, so go to the other side; 
		//if d is not 0, then p was found, then just return d, which is the level of p
        if (d != 0) {
            return d;
        } else {
            d = findDepth2(root.right, p, index + 1);
            return d;
        }
    }
    // find LCA
    private TreeNode lowestCommonAncestor(TreeNode node, int p, int q) {
        if (node == null || node.val == p || node.val == q) {
            return node;
        }
        TreeNode left = lowestCommonAncestor(node.left, p, q);
        TreeNode right = lowestCommonAncestor(node.right, p, q);
        if (left != null && right != null) return node;
        return left != null ? left : right;
    }
}