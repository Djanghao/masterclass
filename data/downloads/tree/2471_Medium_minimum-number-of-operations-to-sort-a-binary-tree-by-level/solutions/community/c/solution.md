# Index Array

**Author:** votrubac
**Votes:** 62
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2808869/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2808869/)

---

We do a level-order traverse using two queues.

For each level, we collect values. We use an index array (`0...n - 1`) to normalize those values.

Then, we swap indexes until all of them are in the correct position. 

This takes O(n log n), instead of O(n ^ 2) if we search for the next smallest element.

> Example: node values are `[7, 11, 3, 5, 2]`. 
> The index array, after sorting, will look like this: `[3, 4, 1, 2, 0]`.
> We will do the following swaps:
> `[3, 4, 1, 2, 0]`: initial state.
> `[2, 4, 1, 3, 0]`: swap `3` and `2`, so `3` is in the right place (`i == ids[i]`).
> `[1, 4, 2, 3, 0]`: swap `2` and `1`.
> `[4, 1, 2, 3, 0]`: swap `1` and `4`.
> `[0, 1, 2, 3, 4]`: swap `4` and `0`.
> This approach needs up to O(n) swaps, and the overall complexity is O(sort).

**C++**
```cpp
int minimumOperations(TreeNode* root) {
    int res = 0;
    vector<TreeNode*> q{root};
    while(!q.empty()) {
        vector<TreeNode*> q1;
        vector<int> vals, ids(q.size());
        for (auto n : q) {
            vals.push_back(n->val);
            if (n->left != nullptr)
                q1.push_back(n->left);
            if (n->right != nullptr)
                q1.push_back(n->right);
        }
        iota(begin(ids), end(ids), 0);
        sort(begin(ids), end(ids), [&](int i, int j){ return vals[i] < vals[j]; });
        for (int i = 0; i < ids.size(); ++i)
            for (; ids[i] != i; ++res)
                swap(ids[i], ids[ids[i]]);
        swap(q, q1);
    }
    return res;
}
```