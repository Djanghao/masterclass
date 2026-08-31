# C++ short iterative

**Author:** jianchao-li
**Votes:** 34
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/251290/](https://leetcode.com/problems/increasing-order-search-tree/solutions/251290/)

---

The iterative inorder traversal is a good way to solve this problem. Each time we meet a node, link it like a linked list using the `right` pointer. To facilitate the linking, create a dummy `head`.

```cpp
class Solution {
public:
    TreeNode* increasingBST(TreeNode* root) {
        TreeNode *head = new TreeNode(0), *pre = head;
        stack<TreeNode*> todo;
        while (root || !todo.empty()) {
            while (root) {
                todo.push(root);
                root = root -> left;
            }
            root = todo.top();
            todo.pop();
            pre -> right = root;
            pre = pre -> right;
            root -> left = NULL;
            root = root -> right;
        }
        return head -> right;
    }
};
```