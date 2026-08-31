# Simple C++ DFS

**Author:** zefengsong
**Votes:** 30
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/108152/](https://leetcode.com/problems/longest-univalue-path/solutions/108152/)

---

```
class Solution {
public:
    int longestUnivaluePath(TreeNode* root) {
        int maxlen = 0;
        DFS(root, maxlen);
        return maxlen;
    }
    
    int DFS(TreeNode* root, int& maxlen){
        if(!root) return 0;
        int left = DFS(root->left, maxlen);
        int right = DFS(root->right, maxlen);
        if(!root->left || root->left->val != root->val) left = 0;
        if(!root->right || root->right->val != root->val) right = 0;
        maxlen = max(maxlen, left + right);
        return max(left, right) + 1;
    }
};
```