# [C++] DFS Solution Explained, 100% Time, ~50% Space

**Author:** Ajna
**Votes:** 84
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/877342/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/877342/)

---

One possible solution would be to take all the values, store them in some container (an array should be cheap enough) and then sort them, going with a loop to find the smaller distance.

But we don't really need this, since we are talking about a BST, which means its [inorder traversal](https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)) is guaranteed to give us already ordered nodes (that we can then compare 1 by 1).

Now we can proceed, declaring 2 class variables:
* `diff` will store the minimum difference computed so far from 2 ordered nodes;
* `prev` will store the value of the node we checked before the current one.

Our helper `dfs` can run without the need to check whether or not `root` exists at each iteration, since we are told each tree will have at least 2 nodes (and thus also a root) and we will then first of all proceed to call it recursively on `root->left` if it is not `NULL`, then we will check if we have a `prev` (and this can't happen until we hit the leftmost node before) and in case compute the current distance and update `diff`.

After this, we can update the value of `prev` with `root` and, as in any inorder procedure, call the function recursively now on `root->right` (provided we have it).

Our main function will just have to call `dfs` on `root`, then safely return `diff` :)

The code:

```cpp
class Solution {
public:
    int diff = INT_MAX;
    TreeNode *prev = NULL;
    void dfs(TreeNode *root) {
        // moving to the left as much as we can
        if (root->left) dfs(root->left);
        // if we find at least a node before, we update diff
        if (prev) diff = min(diff, abs(prev->val - root->val));
        prev = root;
        // moving to the right as much as we can
        if (root->right) dfs(root->right);
    }
    int getMinimumDifference(TreeNode *root) {
        dfs(root);
        return diff;
    }
};
```