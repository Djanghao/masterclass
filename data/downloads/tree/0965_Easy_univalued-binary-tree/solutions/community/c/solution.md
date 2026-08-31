# Recursive C++ solution

**Author:** eshwarsv998
**Votes:** 9
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/734110/](https://leetcode.com/problems/univalued-binary-tree/solutions/734110/)

---

```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    
    bool Recur(TreeNode*root , int rootData)
    {
        if(root==nullptr)
            return true;
        
        if(root->val != rootData)
            return false;
        
        return Recur(root->left , rootData) && Recur(root->right , rootData);
    }
    bool isUnivalTree(TreeNode* root) {
        
        int rootData = root->val;
        return Recur(root,rootData);
        
    }
};
```