# Straight-forward c++ solution by reference with dfs

**Author:** yetangzhi
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/83855/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/83855/)

---

    class Solution {
    void dfs(vector<int> &aLevel, TreeNode *&root) {
        if(!root->left && !root->right) {
            aLevel.push_back(root->val);
            // delete root;
            root = NULL;
        }
        else {
            if(root->left)
                dfs(aLevel,root->left);
            if(root->right)
                dfs(aLevel,root->right);
        }
    }
    public:
    vector<vector<int>> findLeaves(TreeNode* root) {
        vector<vector<int>> res;
        
        while(root) {
            vector<int> aLevel;
            dfs(aLevel,root);
            res.push_back(aLevel);
        }
        
        return res;
    }
    };