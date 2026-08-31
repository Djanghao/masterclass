# C++ Iterative, Recursive and Morris Traversal

**Author:** jianchao-li
**Votes:** 220
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/45466/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/45466/)

---

There are three solutions to this problem.

 1. Iterative solution using stack --- `O(n)` time and `O(n)` space;
 2. Recursive solution --- `O(n)` time and `O(n)` space (function call stack);
 3. Morris traversal --- `O(n)` time and `O(1)` space.

**Iterative solution using stack**

```cpp
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> nodes;
        stack<TreeNode*> todo;
        while (root || !todo.empty()) {
            if (root) {
                nodes.push_back(root -> val);
                if (root -> right) {
                    todo.push(root -> right);
                }
                root = root -> left;
            } else {
                root = todo.top();
                todo.pop();
            }
        }
        return nodes;
    }
};
```

**Recursive solution**

```cpp
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> nodes;
        preorder(root, nodes);
        return nodes;
    }
private:
    void preorder(TreeNode* root, vector<int>& nodes) {
        if (!root) {
            return;
        }
        nodes.push_back(root -> val);
        preorder(root -> left, nodes);
        preorder(root -> right, nodes);
    }
};
```

**Morris traversal**

```cpp
class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> nodes;
        while (root) {
            if (root -> left) {
                TreeNode* pre = root -> left;
                while (pre -> right && pre -> right != root) {
                    pre = pre -> right;
                }
                if (!pre -> right) {
                    pre -> right = root;
                    nodes.push_back(root -> val);
                    root = root -> left;
                } else {
                    pre -> right = NULL;
                    root = root -> right;
                }
            } else {
                nodes.push_back(root -> val);
                root = root -> right;
            }
        }
        return nodes;
    }
};
```