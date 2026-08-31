# Sharing my 4ms C++ solution

**Author:** tryHarder
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/49458/](https://leetcode.com/problems/binary-tree-upside-down/solutions/49458/)

---

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
    private:
        TreeNode* upsideDownBinaryTreeHelper(TreeNode* root, TreeNode* parent, TreeNode* sibling)
        {
            if(root==NULL)
                return parent;
            
            TreeNode* tempLeft  = root->left;
            TreeNode* tempRight = root->right;
            
            root->right = parent;
            root->left = sibling;
            
            return upsideDownBinaryTreeHelper(tempLeft, root, tempRight);
        }
        
    public:
        TreeNode* upsideDownBinaryTree(TreeNode* root) {
            return upsideDownBinaryTreeHelper(root, NULL, NULL);
        }
    };