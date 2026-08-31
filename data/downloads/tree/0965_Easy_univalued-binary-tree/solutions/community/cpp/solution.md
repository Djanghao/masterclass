# 🏆💢💯 Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 7
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/5234116/](https://leetcode.com/problems/univalued-binary-tree/solutions/5234116/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-05-31 111918.png](./images/1.png)
![Screenshot 2024-05-31 112326.png](./images/2.png)
```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
    bool search(TreeNode* root, int& key) {
        if (root == nullptr)
            return true;
        return (key == root->val) and (search(root->left, key) and (search(root->right, key)));
    }

public:
    bool isUnivalTree(TreeNode* root) {
        int key = root->val;
        return search(root, key);
    }
};
```
```Python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:
        key = root.val
        def search(root, key):
            if not root:
                return True
            return key == root.val and search(root.left, key) and search(root.right, key)
        
        return search(root, key)
```
```C []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool search(struct TreeNode* root, int key) {
    if (root == NULL)
        return true;
    return (key == root->val) &&
           (search(root->left, key) && (search(root->right, key)));
}
bool isUnivalTree(struct TreeNode* root) {
    int key = root->val;
    return search(root, key);
}
```
```Java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public boolean isUnivalTree(TreeNode root) {
        if (root == null)
            return true;
        if (root.left != null)
            if (root.val != root.left.val)
                return false;
        if (root.right != null)
            if (root.val != root.right.val)
                return false;
        return isUnivalTree(root.left) && isUnivalTree(root.right);
    }
}
```
```Python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        self.value = root.val
        
        def dfs(root):
            if root:
                if self.value != root.val:
                    return False
                return dfs(root.left) and dfs(root.right)
            return True
        return dfs(root)
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        self.value = root.val
        
        def dfs(root):
            if root:
                if self.value != root.val:
                    return False
                return dfs(root.left) and dfs(root.right)
            return True
        return dfs(root)
```
![th.jpeg](./images/3.jpeg)
