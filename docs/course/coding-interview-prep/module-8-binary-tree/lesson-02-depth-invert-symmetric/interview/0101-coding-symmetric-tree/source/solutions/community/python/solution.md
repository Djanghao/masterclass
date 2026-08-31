# 🔥Easy Solutions in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 768
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/3290112/](https://leetcode.com/problems/symmetric-tree/solutions/3290112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
 To check if a binary tree is symmetric, we need to compare its left subtree and right subtree. To do this, we can traverse the tree recursively and compare the left and right subtrees at each level. If they are symmetric, we continue the traversal. Otherwise, we can immediately return false.


# Approach
<!-- Describe your approach to solving the problem. -->
We can define a recursive helper function that takes two nodes as input, one from the left subtree and one from the right subtree. The helper function returns true if both nodes are null, or if their values are equal and their subtrees are symmetric.


# Complexity
- Time complexity:The time complexity of the algorithm is $$O(n)$$, where n is the number of nodes in the binary tree. We need to visit each node once to check if the tree is symmetric.
- Space complexity:
The space complexity of the algorithm is $$O(h)$$, where h is the height of the binary tree. In the worst case, the tree can be completely unbalanced, and the recursion stack can go as deep as the height of the tree.


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) {
            return true;
        }
        return isMirror(root.left, root.right);
    }
    
    private boolean isMirror(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) {
            return true;
        }
        if (node1 == null || node2 == null) {
            return false;
        }
        return node1.val == node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }
}

```
```Python []
class Solution(object):
    def isMirror(self, left, right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        return left.val == right.val and self.isMirror(left.left, right.right) and self.isMirror(left.right, right.left)
    
    def isSymmetric(self, root):
        if not root:
            return True
        return self.isMirror(root.left, root.right)

```
```C++ []
class Solution {
public:
    bool isMirror(TreeNode* left, TreeNode* right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (left->val == right->val) && isMirror(left->left, right->right) && isMirror(left->right, right->left);
}

bool isSymmetric(TreeNode* root) {
    if (!root) return true;
    return isMirror(root->left, root->right);
}

};


```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```