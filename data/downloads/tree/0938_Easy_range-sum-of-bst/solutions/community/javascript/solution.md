# ✅99.43%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 110
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/4525606/](https://leetcode.com/problems/range-sum-of-bst/solutions/4525606/)

---

# Intuition
#### The problem requires finding the sum of values of all nodes in a binary search tree (BST) that fall within a specified range. Since it's a BST, we can take advantage of its properties to efficiently identify the nodes within the given range.
---

# Approach
#### To solve this problem, we can perform a depth-first search (DFS) traversal of the BST. At each node, we check whether its value falls within the specified range [low, high]. If the current node's value is within the range, we include it in the sum. We then recursively traverse the left and right subtrees.

### The algorithm follows these steps:

#### 1. If the current node is null, return 0.
#### 2. If the current node's value is within the range [low, high], include it in the sum; otherwise, exclude it.
#### 3. Recursively calculate the sum for the left subtree and the sum for the right subtree.
#### 4. Return the sum of the current node, left subtree sum, and right subtree sum.

---
# Complexity
- ## Time complexity:
#### $$O(n)$$, where n is the number of nodes in the tree. In the worst case, we may need to visit all nodes in the tree.

- ## Space complexity:
#### $$O(h)$$, where h is the height of the tree. This represents the maximum depth of the recursive call stack. In the worst case, for an unbalanced tree, the space complexity can be $$O(n)$$, but for a balanced tree, it is $$O(log n)$$.
---
# Code
```python []
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        def dfs(node):
            if not node:
                return 0
            
            current_val = 0
            if low <= node.val <= high:
                current_val = node.val
            
            left_sum = dfs(node.left)
            right_sum = dfs(node.right)
            
            return current_val + left_sum + right_sum
        
        return dfs(root)
```
```java []
public class Solution {
    public int rangeSumBST(TreeNode root, int low, int high) {
        if (root == null) {
            return 0;
        }

        int currentVal = (root.val >= low && root.val <= high) ? root.val : 0;

        int leftSum = rangeSumBST(root.left, low, high);
        int rightSum = rangeSumBST(root.right, low, high);

        return currentVal + leftSum + rightSum;
    }
}
```
```javascript []
var rangeSumBST = function(root, low, high) {
    if (!root) {
        return 0;
    }

    const currentVal = (root.val >= low && root.val <= high) ? root.val : 0;

    const leftSum = rangeSumBST(root.left, low, high);
    const rightSum = rangeSumBST(root.right, low, high);

    return currentVal + leftSum + rightSum;
};
```
```C++ []
class Solution {
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        if (!root) {
            return 0;
        }
        
        int currentVal = (root->val >= low && root->val <= high) ? root->val : 0;
        
        int leftSum = rangeSumBST(root->left, low, high);
        int rightSum = rangeSumBST(root->right, low, high);
        
        return currentVal + leftSum + rightSum;
    }
};
```
```C# []
public class Solution {
    public int RangeSumBST(TreeNode root, int low, int high) {
        if (root == null) {
            return 0;
        }

        int currentVal = (root.val >= low && root.val <= high) ? root.val : 0;

        int leftSum = RangeSumBST(root.left, low, high);
        int rightSum = RangeSumBST(root.right, low, high);

        return currentVal + leftSum + rightSum;
    }
}
```
---
![Screenshot 2023-08-20 065922.png](./images/0.png)

---