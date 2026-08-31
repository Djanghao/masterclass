# One-Liner

**Author:** votrubac
**Votes:** 5
**Link:** [https://leetcode.com/problems/height-of-special-binary-tree/solutions/3756909/](https://leetcode.com/problems/height-of-special-binary-tree/solutions/3756909/)

---

Just a regular depth function with the special leaf  detection:

```
n->left != nullptr && n->left->right == n
```

**C++**
```cpp
int heightOfTree(TreeNode* n) {
    return n == nullptr || (n->left != nullptr && n->left->right == n) ? 0 :
        1 + max(heightOfTree(n->left), heightOfTree(n->right));
}
```