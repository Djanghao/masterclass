# Dart | reverse in-order.

**Author:** mohamedsameh92
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364390/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364390/)

---

# Approach
> Reverse In-Order Traversal:
- Traverse the tree in reverse in-order (right-root-left).
Maintain a running sum of all the node values visited so far.
- For each node, update its value to the current running sum.
> Updating Nodes:
- Start with the rightmost node, which is the largest.
Add its value to a running sum and update the node's value to this sum.
- Move to the parent (root), add its value to the running sum, and update the node's value.
- Finally, move to the left subtree and repeat the process.

# Complexity
- Time complexity: O(n)



# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
    int _sum = 0;
    void reverseInorder(TreeNode? root)
    {
        if (root != null) {
            reverseInorder(root.right);
            _sum += root.val;
            root.val = _sum;
            reverseInorder(root.left);
        }
    }

  TreeNode? bstToGst(TreeNode? root) {
   
    reverseInorder(root);
    return root;
  }
}
```