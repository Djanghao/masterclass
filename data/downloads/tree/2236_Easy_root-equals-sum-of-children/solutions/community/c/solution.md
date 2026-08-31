# c++ easy sol

**Author:** Richach10
**Votes:** 15
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/2058305/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/2058305/)

---

```
class Solution {
public:
    bool checkTree(TreeNode* root) {
        if(root->left->val+root->right->val==root->val){
            return true;
        }
        return false;
    }
};
```