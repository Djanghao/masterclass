# C++ Simple and Efficient Short Recursive / Iterative Solutions

**Author:** YehudisK
**Votes:** 58
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1347824/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1347824/)

---

**Recursive:**
```
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (p->val < root->val && q->val < root->val)
            return lowestCommonAncestor(root->left, p, q);
        else if (p->val > root->val && q->val > root->val)
            return lowestCommonAncestor(root->right, p, q);
        else return root;
    }
};
```
****
**Iterative:**
```
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        while (root) {
            if (p->val < root->val && q->val < root->val) root = root->left;
            else if (p->val > root->val && q->val > root->val) root = root->right;
            else return root;
        }
        return root;
    }
};
```
**Like it? please upvote!**