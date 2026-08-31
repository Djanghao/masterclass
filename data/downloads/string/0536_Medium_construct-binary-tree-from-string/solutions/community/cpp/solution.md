# C++ solution using string stream

**Author:** akanarika
**Votes:** 5
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/385790/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/385790/)

---

```
class Solution {
public:
    TreeNode* str2tree(string s) {
        if (s.empty()) return NULL;
        istringstream in(s);
        TreeNode* node = str2tree(in);
        return node;
    }

    TreeNode* str2tree(istringstream& in) {
        int num;
        TreeNode* node;
        if (in >> num) {
            node = new TreeNode(num);
        }
        char c;
        while (in >> c) {
            if ((c == '(') && !node->left) {
                node->left = str2tree(in);
            } else if ((c == '(') && node->left) {
                node->right = str2tree(in);
            } else if (c == ')') break;
        }
        return node;
    }
};
```