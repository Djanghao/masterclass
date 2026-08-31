# Switch

**Author:** votrubac
**Votes:** 86
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/2260557/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/2260557/)

---

A bit mouthful, cos I felt like doing something different today.

**C++**
```cpp
bool evaluateTree(TreeNode* n) {
    switch(n->val) {
        case 0:
        case 1:
            return n->val;
        case 2:
            return evaluateTree(n->left) || evaluateTree(n->right);
        default:
            return evaluateTree(n->left) && evaluateTree(n->right);
    }
}
```