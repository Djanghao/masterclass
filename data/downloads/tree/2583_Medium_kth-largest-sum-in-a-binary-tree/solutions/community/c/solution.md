# Track Level Sum O(n)

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/3258099/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/3258099/)

---

We traverse the tree, tracking the current `depth`.

We use the `lsum` array to track the sum for each `depth`.

Finally, we use `lsum` to find out `kth`-largest sum.

We do not have to sort the array, we can use `nth_element` that do the partition in linear time.

**C++**
```cpp
void traverse(TreeNode* n, vector<long long> &lsum, int depth = 0) {
    if (n == nullptr)
        return;
    if (lsum.size() == depth)
        lsum.push_back(0);
    lsum[depth] += n->val;
    traverse(n->left, lsum, depth + 1);
    traverse(n->right, lsum, depth + 1);
}
long long kthLargestLevelSum(TreeNode* root, int k) {
    vector<long long> lsum;
    traverse(root, lsum);
    if (lsum.size() < k)
        return -1;
    nth_element(begin(lsum), begin(lsum) + k - 1, end(lsum), greater<>());
    return lsum[k - 1];
}
```