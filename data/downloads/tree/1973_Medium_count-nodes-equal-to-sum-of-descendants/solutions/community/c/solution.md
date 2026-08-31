# C++ solution DFS

**Author:** OleksaM
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/3833290/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/3833290/)

---

```
class Solution {
public:
    int equalToDescendants(TreeNode* root) {
        int res = 0;
        traverse(root, res);
        return res;
    }
private:
    int traverse(TreeNode* node, int& res) {
        if (!node)
            return 0;
        int sum = (traverse(node->left, res) +
                   traverse(node->right, res)) % 1000000007;
        if (node->val == sum)
            res++;
        return node->val + sum;
    }
};
```