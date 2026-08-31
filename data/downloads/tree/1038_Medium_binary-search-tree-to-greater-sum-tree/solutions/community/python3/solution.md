# 💯✅🔥Easy Java ,Python3 ,C++ Solution|| 0 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 39
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364271/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364271/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to traverse the BST in reverse in-order (right-root-left) and update the value of each node by adding the sum of all the nodes greater than or equal to the current node.
# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize a global variable val to keep track of the running sum.
- Perform a reverse in-order traversal of the BST:
    - Recursively call the bstToGst function on the right subtree.
    - Update the current node's value by adding the val to it.
    - Recursively call the bstToGst function on the left subtree.
- Return the modified root of the BST.
# Complexity
- Time complexity:O(n),where n is the number of nodes in the BST.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(h),where h is the height the BST.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javas []
class Solution {
    int val = 0;
    public TreeNode bstToGst(TreeNode root) {
        if (root.right != null) bstToGst(root.right);
        val = root.val = val + root.val;
        if (root.left != null) bstToGst(root.left);
        return root;
    }
}
```
```python3 []
class Solution:
    def bstToGst(self, root: TreeNode) -> TreeNode:
        self.val = 0
        
        def dfs(node):
            if not node:
                return
            
            dfs(node.right)
            self.val += node.val
            node.val = self.val
            dfs(node.left)
        
        dfs(root)
        return roo
```
```C++ []
class Solution {
public:
    int val = 0;
    TreeNode* bstToGst(TreeNode* root) {
        if (root->right) bstToGst(root->right);
        val = root->val = val + root->val;
        if (root->left) bstToGst(root->left);
        return root;
    }
};
```
![upvote.png](./images/0.png)
