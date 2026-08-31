# C++ | Recursive | Self-Explanatory

**Author:** Sid200026
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/836995/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/836995/)

---

```
class Solution {
public:
    void lonely(TreeNode* root, vector<int>& ret, bool isLoner = false) {
        if(root == nullptr)
            return;
        if(isLoner)
            ret.push_back(root->val);
        isLoner = root->left == nullptr || root->right == nullptr;
        lonely(root->left, ret, isLoner);
        lonely(root->right, ret, isLoner);
    }
    vector<int> getLonelyNodes(TreeNode* root) {
        vector<int> ans;
        lonely(root, ans);
        return ans;
    }
};
```