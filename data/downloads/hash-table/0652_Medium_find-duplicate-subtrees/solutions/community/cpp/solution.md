# 8 lines C++

**Author:** zefengsong
**Votes:** 103
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/106014/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/106014/)

---

```
class Solution {
public:
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        unordered_map<string, int>m;
        vector<TreeNode*>res;
        DFS(root, m, res);
        return res;
    }
    
    string DFS(TreeNode* root, unordered_map<string, int>& m, vector<TreeNode*>& res){
        if(!root) return "";
        string s = to_string(root->val) + "," + DFS(root->left, m, res) + "," + DFS(root->right, m, res);
        if(m[s]++ == 1) res.push_back(root);
        return s;
    }
};
```