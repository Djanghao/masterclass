# [C++] DFS Solution Explained, 100% Time, ~85% Space

**Author:** Ajna
**Votes:** 6
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1134051/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1134051/)

---

Good old tree traversal by DFS here!

I guess there is some smart, math-based way to get things done here; but I did not grasp it (I had some intuition for it, but could not come up with an efficient way to get it, if not navigating all the tree to map the current positions of the nodes and store it in some array), so I just went to brutally explore the tree and check when things were not as expected in `voyage`.

To do so, we declare all our support variables at class level:
* `res` is our accumulator that will store the nodes that we have to flip;
* `isFlippable` is a boolean flag initially set to `true` and that we will turn to `false` when we find a mismatch that can't be fixed flipping;
* `pos` is our iterator to explore `voyage` step-by-step, initially set to `1`, since we will start checking from the children (if any) of `root`.

In our main function, we will call `dfs` passing down both `root` and `voyage`.

`dfs` will:
* first of all check if we flipped `isFlippable` and in case just `return` (and thus stop all the chain of recursive calls);
* check if either we miss `root->left` or if we have `root->right` and its value is equal to `voyage[pos]`, in which case:
	* if `root->left` is there (so we entered this logical branch because `right` is the one with the correct value, we add `root->val` to `res`;
	* in any case, we swap the `left` and `right` branches;
* now that we have done our best to ensure that we have a `left` branch, we check if it is here and in case if either its value differs from `voyage[pos]` or if `root->val` itself differs from `voyage[pos - 1]`, in which case we:
	* set `isFlippable` to `false`;
	* exit the function with `return`.
* increase `pos` by `1`, since if we reach this point, it means that `voyage` was verified so far;
* call the function recursively on the `left` and `right` branch, provided they exist.

Once done, we will return `res` if `isFlippable` is still set to `true`, `{-1}` otherwise.

The code:

```cpp
class Solution {
    // support variables
    vector<int> res;
    bool isFlippable = true;
    int pos = 1;
    void dfs(TreeNode* root, vector<int>& voyage) {
        // exit point: we found this cannot work
        if (!isFlippable) return;
        // if we can complete voyage flipping, we do so and add root->val to res
        if (!root->left || root->right && root->right->val == voyage[pos]) {
            // adding root to res, only if we actually had a left branch
            if (root->left) res.push_back(root->val);
            swap(root->left, root->right);
        }
        // checking if we are no longer on track, in which case we exit
        if (root->left && root->left->val != voyage[pos] || root->val != voyage[pos - 1]) {
            isFlippable = false;
            return;
        }
        // increasing pos;
        pos++;
        // moving to the left and right branches, if any
        if (root->left) dfs(root->left, voyage);
        if (root->right) dfs(root->right, voyage);
    }
public:
    vector<int> flipMatchVoyage(TreeNode* root, vector<int>& voyage) {
        dfs(root, voyage);
        return isFlippable ? res : vector<int>{-1};
    }
};
```