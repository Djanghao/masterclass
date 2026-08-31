# C++ Recursive and Iterative

**Author:** jianchao-li
**Votes:** 543
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/64980/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/64980/)

---

Well, remember to take advantage of the property of binary search trees, which is, `node -> left -> val < node -> val < node -> right -> val`. Moreover, both `p` and `q` will be the descendants of the `root` of the subtree that contains both of them. And the `root` with the largest depth is just the lowest common ancestor. This idea can be turned into the following simple recursive code.

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if ((root -> val > p -> val) && (root -> val > q -> val)) {
            return lowestCommonAncestor(root -> left, p, q);
        }
        if ((root -> val < p -> val) && (root -> val < q -> val)) {
            return lowestCommonAncestor(root -> right, p, q);
        }
        return root;
    }
};
```

Of course, we can also solve it iteratively.

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode* cur = root;
        while (true) {
            if (p -> val < cur -> val && q -> val < cur -> val) {
                cur = cur -> left;
            } else if (p -> val > cur -> val && q -> val > cur -> val) {
                cur = cur -> right;
            } else {
                break;
            }
        }
        return cur;
    }
};
```