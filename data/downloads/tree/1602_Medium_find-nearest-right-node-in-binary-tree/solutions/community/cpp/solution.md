# Simple & Fast BFS Solution using C++

**Author:** hotondoshinderu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/4993226/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/4993226/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n) : traverse the tree once
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n) : BFS queue
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
    TreeNode* findNearestRightNode(TreeNode* root, TreeNode* u) {
        queue<TreeNode*> q;
        q.push(root);
        bool flag = false;
        while(!q.empty()) {
            int len = q.size();
            for(int i=0; i<len; i++) {
                TreeNode* curr = q.front();
                q.pop();
                if(flag)
                    return curr;
                if(curr == u)
                    flag = true;
                if(curr->left)
                    q.push(curr->left);
                if(curr->right)
                    q.push(curr->right);
            }
            if(flag)
                break;
        }
        return NULL;
    }
};
```