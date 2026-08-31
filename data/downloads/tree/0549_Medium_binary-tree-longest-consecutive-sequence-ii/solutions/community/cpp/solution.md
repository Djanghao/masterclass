# C++ Clean DFS!

**Author:** Satj
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/2275107/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/2275107/)

---

```
pair <int, int> dfs(TreeNode *root, int &ret, int p = 0) {
    if (!root) return {0, 0};
    auto [l1, l2] = dfs(root->left, ret, root->val);
    auto [r1, r2] = dfs(root->right, ret, root->val);
    ret = max({ret, l1 + 1 + r2, l2 + 1 + r1});
    if (p - root->val ==  1)
        return {max(l1, r1) + 1, 0};
    if (p - root->val == -1)
        return {0, max(l2, r2) + 1};
    return {0, 0};
}
int longestConsecutive(TreeNode* root) {
    int ret = 0;
    dfs(root, ret);
    return ret;
}
```