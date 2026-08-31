# Pair and one queue. simple and fast solution.

**Author:** ROCKFORD2901
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5624661/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5624661/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int minimumLevel(TreeNode* root) {
        if (!root) return 0;
        pair<long long, int> res(INT_MAX, 1);
        queue<TreeNode*> que;
        que.push(root);
        int level = 1;
        while(que.size()) {
            int size = que.size();
            long long sum = 0;
            while(size) {
                size--;
                auto tmp = que.front();
                que.pop();
                sum += tmp->val;
                if(tmp->left) que.push(tmp->left);
                if(tmp->right) que.push(tmp->right);
            }
            if (res.first > sum) {
                res.first = min(res.first, sum);
                res.second = level;
            }
            level++;
        }    
        return res.second;
    }
};
```