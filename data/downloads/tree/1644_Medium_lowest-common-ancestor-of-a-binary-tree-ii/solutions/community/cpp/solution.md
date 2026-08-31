# LCA + prior check for existence using DFS

**Author:** hrithikkamleshbabbar
**Votes:** 2
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/3804826/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/solutions/3804826/)

---

# Intuition
The Solution is similar to LCA we just need to check that both node exist in the tree

# Approach
LCA + DFS

# Complexity
- Time complexity: O(n)

- Space complexity: O(n) -- recursion stack

# Code
```
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
    bool find(TreeNode* root, TreeNode* p){
        if(!root) return false;
        if(root->val==p->val) return true;
        return find(root->left,p) || find(root->right,p);
    }
    TreeNode* lca(TreeNode* root, TreeNode* p, TreeNode* q){
        if(!root || root->val==p->val || root->val==q->val)
            return root;
        TreeNode*left=lca(root->left, p, q);
        TreeNode*right=lca(root->right, p, q);
        if(left && right) 
            return root;
        return left?left:right;
    }
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(find(root,p) && find(root,q))
            return lca(root,p,q);
        return NULL;
    }
};
```