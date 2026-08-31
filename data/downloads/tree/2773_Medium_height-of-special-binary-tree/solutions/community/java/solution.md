# Java easy effective solution

**Author:** f77
**Votes:** 1
**Link:** [https://leetcode.com/problems/height-of-special-binary-tree/solutions/4754018/](https://leetcode.com/problems/height-of-special-binary-tree/solutions/4754018/)

---

# Intuition
Find the height of the tree as usual. However, have a special care to identify leaf nodes since, in this particular case, they are NOT nodes with no children.

# Approach
The key thing is to identify leaf nodes for this special problem. First, we can identify the case where the node is regular leaf node, true only if both left and right children are null (which will only be the case for a tree with only 2 nodes, the root and one leaf).

We can also eliminate the cases where it is not a leaf node, which can be identified by the node having one, and only one, child (see the xor operation in isLeaf method). That check is useful because every special node will always have both left and right fields set.

And finally, we can check if the left and right children of a node are pointing to nodes that also point to that node being assessed.

# Complexity
- Time complexity: **O(n log n)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    public int heightOfTree(TreeNode root) {
        if (root == null) return -1;
        if (root.left == null && root.right == null) return 0;        
        int leftHeight = root.left == null || isLeaf(root.left) ? 0 : heightOfTree(root.left);
        int rightHeight = root.right == null || isLeaf(root.right) ? 0 : heightOfTree(root.right);
        return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
    }

    private boolean isLeaf(TreeNode node) {
        if (node.left == null && node.right == null) return true;
        if (node.left == null ^ node.right == null) return false;
        return (node == node.left.right && node == node.right.left);
    }

}
```