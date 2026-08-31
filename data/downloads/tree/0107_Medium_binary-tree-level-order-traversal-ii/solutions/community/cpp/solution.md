# C++ 4ms solution!

**Author:** phu1ku
**Votes:** 136
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/35108/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/35108/)

---

First version costs 8ms:

    void levelOrder(vector<vector<int>> &ans, TreeNode *node, int level) {
        if (!node) return;
        if (level >= ans.size())
            ans.push_back({});
        ans[level].push_back(node->val);
        levelOrder(ans,node->left,level+1);
        levelOrder(ans,node->right,level+1);
    }

    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        vector<vector<int>> ans;
        levelOrder(ans,root,0);
        reverse(ans.begin(),ans.end());
        return ans;
    }



Second version costs 4ms:

    int depth(TreeNode *root) {
        if (!root) return 0;
        return max(depth(root->left),depth(root->right))+1;
    }

    void levelOrder(vector<vector<int>> &ans, TreeNode *node, int level) {
        if (!node) return;
        ans[level].push_back(node->val);
        levelOrder(ans,node->left,level-1);
        levelOrder(ans,node->right,level-1);
    }

    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        int d = depth(root);
        vector<vector<int>> ans(d,vector<int> {});
        levelOrder(ans,root,d-1);
        return ans;
    }