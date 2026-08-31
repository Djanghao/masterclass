# C++ | Find downward or upward | Beats 97%

**Author:** coolyuyuyu
**Votes:** 7
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/1122256/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/1122256/)

---

```
class Solution {
public:
    Node* inorderSuccessor(Node* node) {
        if (node->right) {
            node = node->right;
            while (node->left) {
                node = node->left;
            }
        }
        else {
            while (node->parent && node->parent->right == node) {
                node = node->parent;
            }
            node = node->parent;
        }

        return node;
    }
};
```