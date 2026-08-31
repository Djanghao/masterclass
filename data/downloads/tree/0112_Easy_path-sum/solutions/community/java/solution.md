# ✅Easy Solution🔥Python3/C/C#/C++/Java🔥Explain Line By Line🔥With🗺️Image🗺️

**Author:** MrAke
**Votes:** 329
**Link:** [https://leetcode.com/problems/path-sum/solutions/3977919/](https://leetcode.com/problems/path-sum/solutions/3977919/)

---

# Problem
You're given a binary tree and an integer targetSum. The task is to determine whether there exists a root-to-leaf path in the tree where the sum of the values of the nodes along the path equals the targetSum.

In other words, you need to check if there's a sequence of nodes starting from the root and following edges to reach a leaf node such that the sum of values along this path is equal to the given targetSum.


---
# Solution
The provided solution is implemented as a method named hasPathSum within a class named Solution. The method takes two parameters: root, which is the root node of the binary tree, and targetSum, the desired sum.


**Here's how the solution works:** 

1. f root is None (i.e., the tree is empty), there can't be any path with the desired sum. So, the function returns False.
2. If root is a leaf node (i.e., it has no left or right children), the function checks whether the value of the leaf node is equal to the remaining targetSum. If they are equal, it returns True, indicating that a valid path with the target sum has been found.
3. If the above conditions are not met, the function recursively checks for a valid path with the target sum in both the left and right subtrees. It subtracts the value of the current node from the targetSum before passing it to the recursive calls.
4. The result of the recursive calls on the left and right subtrees (left_sum and right_sum) are then combined using the logical OR operation. This is because if either the left subtree or the right subtree has a valid path, it means there's a valid path in the entire tree, so the function should return True.
5. If none of the above conditions are met, the function returns False.

The base cases (when the tree is empty or when a leaf node with a matching value is found) guarantee that the recursion will eventually terminate. The recursion explores all possible paths from the root to leaf nodes, checking if any of them sum up to the given targetSum. The logical OR operation on the results of the recursive calls ensures that the function correctly returns True if a valid path is found anywhere in the tree.

This solution has a time complexity of O(N), where N is the number of nodes in the binary tree, as it visits each node once in the worst case.

![Screenshot 2023-08-20 065922.png](./images/0.png)


# Code
---

```Python3 []
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        
        if not root.left and not root.right:
            return targetSum == root.val
        
        left_sum = self.hasPathSum(root.left, targetSum - root.val)
        right_sum = self.hasPathSum(root.right, targetSum - root.val)
        
        return left_sum or right_sum
```
```python []
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        
        if not root.left and not root.right:
            return targetSum == root.val
        
        left_sum = self.hasPathSum(root.left, targetSum - root.val)
        right_sum = self.hasPathSum(root.right, targetSum - root.val)
        
        return left_sum or right_sum
```
```C# []
public class Solution
{
    public bool HasPathSum(TreeNode root, int targetSum)
    {
        if (root == null)
        {
            return false;
        }

        if (root.left == null && root.right == null)
        {
            return targetSum == root.val;
        }

        bool leftSum = HasPathSum(root.left, targetSum - root.val);
        bool rightSum = HasPathSum(root.right, targetSum - root.val);

        return leftSum || rightSum;
    }
}
```

```C++ []
class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (!root) {
            return false;
        }
        
        if (!root->left && !root->right) {
            return targetSum == root->val;
        }
        
        bool left_sum = hasPathSum(root->left, targetSum - root->val);
        bool right_sum = hasPathSum(root->right, targetSum - root->val);
        
        return left_sum || right_sum;
    }
};
```
```Java []
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }
        
        if (root.left == null && root.right == null) {
            return targetSum == root.val;
        }
        
        boolean leftSum = hasPathSum(root.left, targetSum - root.val);
        boolean rightSum = hasPathSum(root.right, targetSum - root.val);
        
        return leftSum || rightSum;
    }
}
```