# Level + Depth

**Author:** votrubac
**Votes:** 101
**Link:** [https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/2758013/](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/2758013/)

---

I initially solved this problem as O(m * h), but I got TLE when the trie is a vine (so the complexity is O(m * n)). The level-based approach below is O(n + m) for any tree shape.

For each node, we store its `level` and `depth` of its subtree.

Also, for each level, we store largest (`d1`) and second largest (`d2`) depth from all nodes on that level.

Now, when we process a query, we can figure out the level and depth of the node.

The result is the level plus a) the largets depth of that level, or b) second largest if the queried node depth is the largest.

**C++**
```cpp
int level[100001] = {}, depth[100001] = {};
int d1[100001] = {}, d2[100001] = {};
int traverse(TreeNode* n, int l = 0) {
    if (n == nullptr)
        return 0;
    level[n->val] = l;
    depth[n->val] = 1 + max(traverse(n->left, l + 1), traverse(n->right, l + 1));   
    if (d1[l] < depth[n->val]) {
        d2[l] = d1[l];
        d1[l] = depth[n->val];
    } 
    else if (d2[l] < depth[n->val])
        d2[l] = depth[n->val];
    return depth[n->val];
};
vector<int> treeQueries(TreeNode* root, vector<int>& queries) {
    traverse(root, 0);
    transform(begin(queries), end(queries), begin(queries), [&](int q){
        int l = level[q];
        return l + (d1[l] == depth[q] ? d2[l] : d1[l]) - 1;
    });
    return queries;
}
```