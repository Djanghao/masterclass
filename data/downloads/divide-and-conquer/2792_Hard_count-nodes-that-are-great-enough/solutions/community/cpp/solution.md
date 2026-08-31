# DFS saving the smallest k values of each sub tree.

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3820134/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3820134/)

---

# Intuition
DFS, for each node save the smallest k values in the subtree.

# Approach
If we have the smallest k values of the left and right subtrees, do something like a merge sort to maintain at most the k smallest values.
If the subtree without the root contains at least k values then the merged result should contain excatly k values and we just compare the largest value in the merged result with the root.val to decide whether the root is wanted.
Finally, add the root value into the merged result (and don't forget to delete the largest value if the final merged result contain (k + 1) values).


# Complexity
- Time complexity:
O(n * k * logk)

- Space complexity:
O(n * k)

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
    pair<priority_queue<int>, int> dfs(TreeNode* root, int k) {
        if (root == nullptr) {
            return {{}, 0};
        }
        auto left = dfs(root->left, k), right = dfs(root->right, k);
        while (!right.first.empty()) {
            left.first.push(right.first.top());
            right.first.pop();
            if (left.first.size() > k) {
                left.first.pop();
            }
        } 
        if (left.first.size() == k && left.first.top() < root->val) {
            ++left.second;
        }
        left.first.push(root->val);
        if (left.first.size() > k) {
            left.first.pop();
        }
        left.second += right.second;
        return left;
    }
public:
    int countGreatEnoughNodes(TreeNode* root, int k) {
        return dfs(root, k).second;
        
    }
};
```