# C++ Simple and Clean Recursive and Iterative Solutions

**Author:** YehudisK
**Votes:** 41
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/1334632/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/1334632/)

---

**Recursive:**
```
class Solution {
public:
    void inorder(TreeNode* root, int& k) {
        if (!root) return;
        inorder(root->left, k);
        if (--k == 0) res = root->val;
        inorder(root->right, k);
    }
    
    int kthSmallest(TreeNode* root, int k) {
        inorder(root, k);
        return res;
    }
    
private:
    int res;
};
```
****
**Iterative:**
```
class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> s;
        while (root || !s.empty()) {
            while (root) {
                s.push(root);
                root = root->left;
            }
            
            root = s.top();
            s.pop();
            
            if (--k == 0) return root->val;
            root = root->right;
        }
        return -1;
    }
};
```
**Like it? please upvote!**