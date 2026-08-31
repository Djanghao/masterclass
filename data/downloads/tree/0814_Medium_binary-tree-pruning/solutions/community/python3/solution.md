# 🔥 [LeetCode The Hard Way]🔥 Easy DFS Explained Line By Line

**Author:** tr1nity
**Votes:** 15
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2537510/](https://leetcode.com/problems/binary-tree-pruning/solutions/2537510/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. I'll explain my solution line by line daily. 
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

You may also check out my recent DFS solutions on other tree problems.

- [987. Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/discuss/2527028/leetcode-the-hard-way-easy-dfs-explained-line-by-line)
- [1448. Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/discuss/2511705/leetcode-the-hard-way-dfs-explained-line-by-line)

```cpp
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
 
// Time Complexity: O(N) where N is the number of the nodes in the tree
// Space Complexity: O(H) where H is the height of the tree. 
// In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree
class Solution {
public:
    // the idea is to use DFS to traverse the tree
    // if the current subtree satifies one of the following conditions
    // 1. root value is 1
    // 2. left sub tree contains 1 
    // 3. right sub tree contains 1
    // then we return `root`
    // otherwise, we return nullptr
    TreeNode* pruneTree(TreeNode* root) {
        // if root is nullptr, then return nullptr
        if (!root) return nullptr;
        // DFS on left sub tree
        root->left = pruneTree(root->left);
        // DFS on right sub tree
        root->right = pruneTree(root->right);
        // !root->left means the left sub tree doesn't contain 1
        // !root->right means the right sub tree doesn't contain 1
        // !root->val means the current node value is 0
        // for this case, return nullptr
        // else we can keep the node
        return (!root->left && !root->right && !root->val) ? nullptr : root;
    }
};
```

In case you want to free the deleted `root` to avoid memory leak. You can change the last line to 

```cpp
if (!root->left && !root->right && !root->val) {
    // delete will delete the memory of the pointer of root
	delete root;
	return nullptr;
} else {
	return root;
}
```

**Python**

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# Time Complexity: O(N) where N is the number of the nodes in the tree
# Space Complexity: O(H) where H is the height of the tree. 
# In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree
class Solution:
    # the idea is to use DFS to traverse the tree
    # if the current subtree satisfies one of the following conditions
    # 1. root value is 1
    # 2. left sub tree contains 1 
    # 3. right sub tree contains 1
    # then we return `root`
    # otherwise, we return None
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # if root is None, then return None
        if root is None: return None
        # DFS on left sub tree
        root.left = self.pruneTree(root.left)
        # DFS on right sub tree
        root.right = self.pruneTree(root.right)
        # !root->left means the left sub tree doesn't contain 1
        # !root->right means the right sub tree doesn't contain 1
        # !root->val means the current node value is 0
        # for this case, return None
        # else we can keep the node
        if root.left is None and root.right is None and root.val == 0: return None
        return root
```


