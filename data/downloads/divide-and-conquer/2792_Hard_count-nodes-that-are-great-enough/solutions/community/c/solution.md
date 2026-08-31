# Vector + Sort

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3831113/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3831113/)

---

Tried a few containers, but it seems the fastest to use a vector and sort it after combining values.
**C++**
```cpp
int dfs(TreeNode* n, int k, vector<int> &sm) {
    if (n == nullptr)
        return 0;
    vector<int> smr;
    int res = dfs(n->left, k, sm) + dfs(n->right, k, smr);
    sm.push_back(n->val);
    sm.insert(end(sm), begin(smr), end(smr));
    sort(begin(sm), end(sm));
    sm.resize(min(k, (int)sm.size()));
    return res + (sm.size() == k && n->val > sm.back());
}
int countGreatEnoughNodes(TreeNode* root, int k) {
    return dfs(root, k, vector<int>() = {});
}
```