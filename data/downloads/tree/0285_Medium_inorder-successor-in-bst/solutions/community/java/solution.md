# Share my Java recursive solution

**Author:** jeantimex
**Votes:** 741
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/72653/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/72653/)

---

Just want to share my recursive solution for both getting the successor and predecessor for a given node in BST.

**Successor**

    public TreeNode successor(TreeNode root, TreeNode p) {
      if (root == null)
        return null;
    
      if (root.val <= p.val) {
        return successor(root.right, p);
      } else {
        TreeNode left = successor(root.left, p);
        return (left != null) ? left : root;
      }
    }


**Predecessor**

    public TreeNode predecessor(TreeNode root, TreeNode p) {
      if (root == null)
        return null;
    
      if (root.val >= p.val) {
        return predecessor(root.left, p);
      } else {
        TreeNode right = predecessor(root.right, p);
        return (right != null) ? right : root;
      }
    }