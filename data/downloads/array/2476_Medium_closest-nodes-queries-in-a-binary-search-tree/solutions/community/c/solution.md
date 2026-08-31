# Is the tree balanced?

**Author:** votrubac
**Votes:** 94
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831692/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831692/)

---

Since we do not know the answer, it's better to collect all values into an array, and then binary-search in that array.

A search in a tree takes O(h), which is O(log n) for a balanced, and O(n) for an unbalanced tree.

**C++**
```cpp
vector<int> v;
void traverse(TreeNode* n) {
    if (n != nullptr) {
        traverse(n->left);
        if (v.empty() || v.back() < n->val)
            v.push_back(n->val);
        traverse(n->right);
    }
}
vector<vector<int>> closestNodes(TreeNode* root, vector<int>& queries) {
    vector<vector<int>> res;
    traverse(root);
    for (int q : queries) {
        auto it = lower_bound(begin(v), end(v), q);
        if (it != end(v) && *it == q)
            res.push_back({q, q});
        else
            res.push_back({it == begin(v) ? -1 : *prev(it), it == end(v) ? -1 : *it});
    }
    return res;
}
```