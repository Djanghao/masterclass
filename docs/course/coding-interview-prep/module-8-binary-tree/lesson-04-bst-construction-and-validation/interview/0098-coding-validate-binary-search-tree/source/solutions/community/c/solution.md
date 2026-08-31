# C++ THE SIMPLEST!!! O(n) Easy Solution

**Author:** YehudisK
**Votes:** 162
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/974511/](https://leetcode.com/problems/validate-binary-search-tree/solutions/974511/)

---

```
class Solution {
public:
    void inOrder(TreeNode* root) {
        if (!root)
            return;
        inOrder(root->left);
        tree.push_back(root->val);
        inOrder(root->right);
    }
   
    bool isValidBST(TreeNode* root) {
        if (!root)
            return true;
        
        inOrder(root);
        for (int i=1; i<tree.size(); i++)
            if (tree[i] <= tree[i-1])
                return false;
        return true;
    }
private:
    vector<int> tree;
};
```
**Like it? please upvote...**