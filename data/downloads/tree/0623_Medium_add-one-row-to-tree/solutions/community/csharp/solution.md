# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5029939/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5029939/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    void solve(TreeNode *&root, int val, int target, int depth, bool side)
    {
        if(depth == target)
        {
            TreeNode* temp = new TreeNode(val);
            if(root) 
            {
                if(side) temp->left = root;
                else temp->right = root;
            }
            root = temp;
            return;
        }
        if(!root) return;
        solve(root->left, val, target, depth+1, true);
        solve(root->right, val, target, depth+1, false);
    }
    TreeNode* addOneRow(TreeNode* root, int val, int depth) 
    {
        if(depth == 1) 
        {
            TreeNode* newRoot = new TreeNode(val);
            newRoot->left = root;
            return newRoot;
        }
        solve(root, val, depth, 1, false);
        return root;
    }
};
```