# C++ Solution || 100% faster || Iterative Solution

**Author:** AlankarSaxena2712
**Votes:** 26
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/1334821/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/1334821/)

---

```
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> preorder;
        stack<TreeNode*> stack;
        if (root == NULL)
            return preorder;
        stack.push(root);
        while(!stack.empty()) {
            TreeNode* curr = stack.top();
            stack.pop();
            preorder.push_back(curr->val);
            if (curr->right != NULL)
                stack.push(curr->right);
            if (curr->left != NULL)
                stack.push(curr->left);
        }
        return preorder;
    }
};
```