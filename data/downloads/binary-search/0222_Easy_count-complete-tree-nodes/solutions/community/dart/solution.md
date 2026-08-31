# Counting Binary Tree Nodes Using In-Order Traversal

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/5656997/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/5656997/)

---

# Intuition
The goal is to count the number of nodes in a binary tree. Since a binary tree's nodes can be visited in several traversal methods (in-order, pre-order, post-order), an in-order traversal (left, root, right) is chosen here. By traversing the entire tree, we can add each node's value to a list and then return the size of that list, which corresponds to the number of nodes in the tree.

# Approach
1. Use an in-order traversal to visit each node in the binary tree.
2. Store each node's value in a list as we traverse the tree.
3. Finally, return the size of the list, which gives the total number of nodes in the tree.

# Complexity
- Time complexity:  
  The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the tree. This is because we visit each node exactly once during the traversal.

- Space complexity:  
  The space complexity is also $$O(n)$$. This space is required for storing the values of all nodes in the list. Additionally, the recursive call stack will take up to $$O(h)$$ space, where $$h$$ is the height of the tree, but since $$h$$ is proportional to $$n$$ in the worst case (for a skewed tree), we can consider the space complexity to be $$O(n)$$ overall.

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
  List<int> res = [];

  int countNodes(TreeNode? root) {
    temp(root);
    return res.length;
  }

  List<int> temp(TreeNode? root) {
    if (root != null) {
      temp(root.left); 
      res.add(root.val); 
      temp(root.right); 
    }
    return res; 
  }
}
```