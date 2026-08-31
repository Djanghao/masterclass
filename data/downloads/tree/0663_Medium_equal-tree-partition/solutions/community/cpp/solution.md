# [C++] Solution without using Map or Set

**Author:** dsa1995
**Votes:** 1
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/1433428/](https://leetcode.com/problems/equal-tree-partition/solutions/1433428/)

---

```
class Solution {
public:
    bool flag;
    int total;
    bool checkEqualTree(TreeNode* root) {
        total = sumall(root);
        if(root->left)
            dfs(root->left);
        if(root->right)
            dfs(root->right);
        return flag;
    }
    int dfs(TreeNode* root)
    {
        if(!root)
            return 0;
        int sum = dfs(root->left) + dfs(root->right) + root->val;
        if(sum == total - sum)
        {
            flag = true;
            return 0;
        }
        return sum;
    }
    int sumall(TreeNode* root)
    {
        if(!root)
            return 0;
        return sumall(root->left) + sumall(root->right) + root->val;
    }
};
```