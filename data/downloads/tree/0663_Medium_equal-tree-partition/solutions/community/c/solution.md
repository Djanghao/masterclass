# C++ Solution, dfs

**Author:** RobinDz10
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/2130315/](https://leetcode.com/problems/equal-tree-partition/solutions/2130315/)

---

```
class Solution {
public:
    void getSum(TreeNode* root, int& sum){
        if(!root) return;
        sum += root->val;
        getSum(root->left, sum);
        getSum(root->right, sum);
    }
    
    bool dfs(TreeNode* root, int& target){
        int temp1 = 0, temp2 = 0;
        if(!root) return false;
        if(!root->left && !root->right) return false;
        if(root->left){
            getSum(root->left, temp1);
            if(temp1 == target)
                return true;
        }
        if(root->right){
            getSum(root->right, temp2);
            if(temp2 == target)
                return true;
        }
        return dfs(root->left, target) || dfs(root->right, target);
    }
    
    bool checkEqualTree(TreeNode* root) {
        if(!root || (!root->left && !root->right)) return false;
        int sum = 0;
        getSum(root, sum);
        if(sum % 2 != 0) return false;
        sum /= 2;
        return dfs(root, sum);
    }
};
```