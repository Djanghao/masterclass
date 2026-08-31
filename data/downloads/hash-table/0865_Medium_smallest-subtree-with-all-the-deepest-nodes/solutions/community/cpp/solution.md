# Short and concise C++ solution using DFS, 3~5 lines

**Author:** mzchen
**Votes:** 32
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/146842/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/146842/)

---

```cpp []
int depth(TreeNode *root) {
    return !root ? 0 : max(depth(root->left), depth(root->right)) + 1;
}

TreeNode* subtreeWithAllDeepest(TreeNode* root) {
    int d = depth(root->left) - depth(root->right);
    return !d ? root : subtreeWithAllDeepest(d > 0 ? root->left : root->right);
}
```

Update:
Since some of you suggested that the original solution visits each node multiple times, I added below another version that addresses the issue at the cost of two additional lines.
```cpp []
pair<int, TreeNode*> dfs(TreeNode *root) {
    if (!root) return {0, nullptr};
    auto [d1, r1] = dfs(root->left);
    auto [d2, r2] = dfs(root->right);
    return {max(d1, d2) + 1, d1 == d2 ? root : d1 > d2 ? r1 : r2};
}

TreeNode* subtreeWithAllDeepest(TreeNode* root) {
    return dfs(root).second;
}
```