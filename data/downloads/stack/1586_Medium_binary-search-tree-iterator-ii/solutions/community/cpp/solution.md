# C++ Using 2 stacks, beats 100%

**Author:** Romantic-Hacker
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/5928552/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/5928552/)

---



# Code
```cpp []
class BSTIterator {
private:
    stack<TreeNode*> nextStack;
    stack<TreeNode*> backStack;
    TreeNode* current;

    void fillStack(TreeNode* node) {
        while (node != nullptr) {
            nextStack.push(node);
            node = node->left;
        }
    }

public:
    BSTIterator(TreeNode* root) : current(nullptr) {
        fillStack(root);
    }
    
    bool hasNext() {
        return !nextStack.empty();
    }
    
    int next() {
        if (current != nullptr) {
            backStack.push(new TreeNode(current->val));
        }
        current = nextStack.top();
        nextStack.pop();
        if (current->right != nullptr) {
            fillStack(current->right);
        }
        return current->val;
    }
    
    bool hasPrev() {
        return !backStack.empty();
    }
    
    int prev() {
        if (current != nullptr) {
            nextStack.push(new TreeNode(current->val));
        }
        current = backStack.top();
        backStack.pop();
        return current->val;
    }
};
```