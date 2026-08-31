# simple c++ solution | unordered-map | 97% faster

**Author:** xor09
**Votes:** 68
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/1064728/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/1064728/)

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
    vector<TreeNode*> vec;
    unordered_map<string,int> ump;
    string solve(TreeNode* root){
        if(!root) return "$";
        string left = solve(root->left);
        string right = solve(root->right);
        string s = to_string(root->val) +"$"+left+"$"+right;
        if(ump[s]==1){
            vec.push_back(root);
        }
        ump[s]++;
        return s;
    }
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        if(!root) return vec;
        solve(root);
        return vec;
    }
};
```
Please **UPVOTE**