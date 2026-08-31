# 8ms C++ solution; easy to understand

**Author:** Cyn3303
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/1213152/](https://leetcode.com/problems/largest-bst-subtree/solutions/1213152/)

---

We will check if a tree is a BST; if it is then we will count its size.
```
class Solution {
public:
    int largestBSTSubtree(TreeNode* root) {
        if(!root) return 0;
        if (isBST(root,INT_MIN, INT_MAX)){ return count(root); } 
        return max(largestBSTSubtree(root->left),largestBSTSubtree(root->right));
    }
private:
    bool isBST(TreeNode* root, int min, int max){
        if(!root) return true;
        if(root->val <= min || root->val >= max) return false;        
        return isBST(root->left,min,root->val) && isBST(root->right,root->val,max);   
    }
    int count(TreeNode* root){
        if(!root) return 0;
        return 1+count(root->left)+count(root->right);
    }
};
```