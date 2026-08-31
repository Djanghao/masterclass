# C++ Simple and Short Recursive Solution, Faster than 99%

**Author:** YehudisK
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1412940/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1412940/)

---

**Explanation:**
First, we need to know the total sum of nodes in the tree.
We will use the same rec function, ignoring the line `res = max(res, (total - subtree) * subtree);`.
After we have the total, we will calculate the sum of each subtree and keep the maximum product in res.
```
class Solution {
public:
    int rec(TreeNode* root) {
        if (!root) return 0;
        int subtree = rec(root->left) + rec(root->right) + root->val;
        res = max(res, (total - subtree) * subtree);
        return subtree;
    }
    
    int maxProduct(TreeNode* root) {
        total = rec(root);
        rec(root);
        return res % int(pow(10,9)+7);
    }
    
private:
    long res = 0, total = 0;
};
```
**Like it? please upvote!**