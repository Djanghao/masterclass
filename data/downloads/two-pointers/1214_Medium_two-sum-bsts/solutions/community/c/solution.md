# Simple Iterative Solution using Inorder Traversal

**Author:** khagapati
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-sum-bsts/solutions/397666/](https://leetcode.com/problems/two-sum-bsts/solutions/397666/)

---

Runtime: 48 ms, faster than 75.00% of C++ online submissions for Two Sum BSTs.
Memory Usage: 25.3 MB, less than 100.00% of C++ online submissions for Two Sum BSTs.

**This code will take O(n) Time and Space Complexity**

```
class Solution {
public:
    bool twoSumBSTs(TreeNode* root1, TreeNode* root2, int target) {
        if(!root1 || !root2)
            return false;
        stack<TreeNode*>st1, st2;
        while(true){
            while(root1){
                st1.push(root1);
                root1 = root1->left;
            }
            while(root2){
                st2.push(root2);
                root2 = root2->right;
            }
            if(st1.empty() || st2.empty())
                return false;
            TreeNode* top1 = st1.top();
            TreeNode* top2 = st2.top();
            int x = top1->val + top2->val;
            if(x == target)
                return true;
            else if(x < target){
                root1 = top1->right;
                st1.pop();
            }
            else{
                root2 = top2->left;
                st2.pop();
            }
        }
        return false;
    }
};
```