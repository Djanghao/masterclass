# Problem #285: C++ solutions with explanations

**Author:** vmoros
**Votes:** 3
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst/solutions/1198548/](https://leetcode.com/problems/inorder-successor-in-bst/solutions/1198548/)

---

### Solution 1

If p has a right child, we go to that right child and then go left all the way. That's because all nodes in the right subtree are greater than p so the node all the way to the left is the smallest one out of these. But how do we know that nothing above p in the tree is its successor? It's because if p is a left child, then the right child's all the way left child is less than p's parent. And if p is a right child, then p's parent can't be a successor because it's less than p.

If p doesn't have a right child, we need to find the successor above p in the tree. We walk the tree in the usual BST way and any time we go left, that node is a candidate to be the successor of p. We take the last such node as the successor.

```cpp
TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
  if (p->right) {  // go right and all the way left
    TreeNode* ans = p->right;
    while (ans->left) ans = ans->left;
    return ans;
  }

  TreeNode* cand = nullptr;
  TreeNode* curr = root;
  // on the path from root to p, all nodes from which you go left are candidates
  while (curr) {
    if (p->val == curr->val)
      return cand;
    else if (p->val < curr->val) {  // go left, update candidate
      cand = curr;
      curr = curr->left;
    } else {  // go right
      curr = curr->right;
    }
  }

  return cand;
}
```

### Solution 2: Optimized

We can also combine the two cases. We walk down the tree in the usual BST way except we don't stop when we find our node. We keep going until we hit a leaf. Any time we find a node that's greater than p, it becomes our new candidate.

```cpp
TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
  TreeNode *candidate = nullptr, *curr = root;
  while (curr) {
    // curr = (curr->val > p->val) ? (candidate = curr)->left : curr->right;
    if (p->val < curr->val) {
      candidate = curr;
      curr = curr->left;
    } else {
      curr = curr->right;
    }
  }
  return candidate;
}
```