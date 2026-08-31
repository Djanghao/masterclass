# [C++] Clean Concise Solution | Beats 100% Time

**Author:** sherlasd
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/605128/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/605128/)

---

```
class Solution {
public:
    bool isValidSequence(TreeNode* root, vector<int>& arr) {
        return isValidSequence2(root, arr, 0);
    }
    bool isValidSequence2(TreeNode* root, vector<int>& arr, int i){
        if(i >= arr.size() || !root || root->val != arr[i]) return false;
        if(i == arr.size() - 1 && !root->left && !root->right) return true;
        return isValidSequence2(root->left, arr, i + 1) || isValidSequence2(root->right, arr, i + 1);
    }
};
```