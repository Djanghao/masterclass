# C++ Inorder Traversal O(N) easy to understand

**Author:** nathanguo
**Votes:** 135
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/958108/](https://leetcode.com/problems/increasing-order-search-tree/solutions/958108/)

---

```
  void inorder(TreeNode*& ans, TreeNode* root) {
        if (!root) return;
        inorder(ans, root->left);
        ans->right = new TreeNode(root->val);
        ans = ans->right;
        inorder(ans, root->right);
    }
    TreeNode* increasingBST(TreeNode* root) {
        TreeNode* temp;
        TreeNode* ans = new TreeNode();
        temp = ans;
        inorder(ans, root);
        return temp->right;
    }
```

Recursive inorder call, upvote if you like the solution