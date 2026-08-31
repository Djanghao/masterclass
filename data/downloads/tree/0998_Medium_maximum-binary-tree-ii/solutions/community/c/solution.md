# C++ Easy Solution | Fastest | Recursion

**Author:** umesh72614
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/1435623/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/1435623/)

---

```
class Solution {
public:
    // Idea: since, val is last element in b => it will either be root or always
    // be inserted into right subtree
    TreeNode* insertIntoMaxTree(TreeNode* root, int val) {
        if (!root) return new TreeNode(val);
        if (val > root->val)
            // root will be left child of new node
            return new TreeNode(val, root, NULL);
        root->right = insertIntoMaxTree(root->right, val);
        return root;
    }
};
```