# C++ Solution

**Author:** kannu_priya
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413837/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413837/)

---

```
class Solution {
public:
    long totalSum = 0, maxPro = 0;
    void cal_totalSum(TreeNode* root){
        if(root == NULL) return;
        cal_totalSum(root->left);
        cal_totalSum(root->right);
        totalSum += root->val;
    }
    long cal_maxPro(TreeNode* root){
        if(root == NULL) return 0;
        long l = cal_maxPro(root->left);
        long r = cal_maxPro(root->right);
        long SubtreeSum = l + r + root->val;
        maxPro = max(maxPro, (totalSum - SubtreeSum)*SubtreeSum);
        return SubtreeSum;
    }
    int maxProduct(TreeNode* root) {
        cal_totalSum(root);
        cal_maxPro(root);
        return (int)(maxPro%1000000007);
    }
};
```