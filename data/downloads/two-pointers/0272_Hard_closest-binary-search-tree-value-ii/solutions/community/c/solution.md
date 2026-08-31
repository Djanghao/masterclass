# [c++] o(n) DFS + deque

**Author:** ilovehawthorn
**Votes:** 3
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/1795059/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/1795059/)

---

Only compare&pop front or back. Use deque to effectively pop front.
```
class Solution {
    deque<int> dq;
    void helper(TreeNode* node, double target, int k)
    {
        if (!node) return;
        helper(node->left, target, k);
        
        dq.push_back(node->val);
        if (dq.size() > k)
        {
            if (abs(dq.front()-target) > abs(dq.back()-target))
                dq.pop_front();
            else
                dq.pop_back();
        }
            
        helper(node->right, target, k);
    }
public:
    vector<int> closestKValues(TreeNode* root, double target, int k) {
        helper(root, target, k);
        return vector<int>(dq.begin(), dq.end());
    }
};
```