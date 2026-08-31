# [Animated Video] Step by step explanation

**Author:** codeinmotion
**Votes:** 10
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/6130631/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/6130631/)

---

![Code In Motion Purple Transparent Background (2).png](./images/0.png)

# *CodeInMotion Resources*
## Every Leetcode Pattern You Need To Know
https://www.blog.codeinmotion.io/p/leetcode-patterns

## Blind 75 Animated Playlist
https://www.youtube.com/playlist?list=PLHm8nzcbp3_19DiTlDg8QYvR-hN5jzPCp

## Subscribe to YouTube
https://www.youtube.com/@CodeInMotion-IO?sub_confirmation=1

---
## Animated Video
https://youtu.be/8xZ0Qu8wRDw

## Intuition
First, ask yourself which tree traversal strategy you will use. Preorder, Inorder, or Postorder? For the different types of tree traversals see https://www.blog.codeinmotion.io/i/151790118/binary-tree-traversal.

In our case, to calculate the max path sum for a given node, we need to know the max path of the left and right subtrees first. Therefore, we will be using a postorder traversal.

In the post order traversal, we need to account for two things:
1. **Global Maximum Path Sum**: This considers the current node as the root of the path and includes contributions from both its left and right subtrees. This value gives the highest path sum if the path is allowed to "turn" at the current node.
2. **Current Path Sum**: This is the maximum path sum at the current node that can continue upwards to its parent. A parent node can only use one of its child's paths in its calculation.

*For clarity:*
- If a subtree's contribution is negative, it's better to ignore it entirely, as adding it would reduce the overall sum.
- At each node, we calculate two values:
    - **Maximum path sum considering the node as the root**: `node.val + leftMaxPath + rightMaxPath`.
    - **Path sum for continuation**: `node.val + max(leftMaxPath, rightMaxPath)`.

## Approach
Here\u2019s how we can implement this efficiently using a recursive helper function:

1. **Base Case**: If a node is `Null`, its contribution to the path sum is `0`.
2. **Recursive Step**: At each node:
    - Calculate the maximum path sum for the left and right subtrees.
    - Ignore any subtree that has a negative contribution by taking `max(leftSubtreeSum, 0)` and `max(rightSubtreeSum, 0)`.
    - Compute the maximum path sum considering the current node as the root: `node.val + leftMaxPath + rightMaxPath`.
    - Update the global maximum if this value is greater than the previously recorded maximum.
3. **Return Value**: For the parent node, return the maximum path sum that can continue to be part of a larger path: `node.val + max(leftMaxPath, rightMaxPath)`.

## Example Walkthrough
        -10
        /  \\
       9   20
          /  \\
         15   7

#### Recursive Steps

1. **At Node 9**:
   - Both left and right children are `None`, so their contributions are `0`.
   - The maximum path sum considering `9` as root is `9 + 0 + 0 = 9`.
   - For continuation, the contribution is `9 + max(0, 0) = 9`.

2. **At Node 15**:
   - Both left and right children are `None`, so their contributions are `0`.
   - The maximum path sum considering `15` as root is `15 + 0 + 0 = 15`.
   - For continuation, the contribution is `15 + max(0, 0) = 15`.

3. **At Node 7**:
   - Both left and right children are `None`, so their contributions are `0`.
   - The maximum path sum considering `7` as root is `7 + 0 + 0 = 7`.
   - For continuation, the contribution is `7 + max(0, 0) = 7`.

4. **At Node 20**:
   - Left subtree contributes `15`, right subtree contributes `7`.
   - The maximum path sum considering `20` as root is `20 + 15 + 7 = 42`.
   - For continuation, the contribution is `20 + max(15, 7) = 35`.

5. **At Node -10**:
   - Left subtree contributes `9`, right subtree contributes `35`.
   - The maximum path sum considering `-10` as root is `-10 + 9 + 35 = 34`.
   - For continuation, the contribution is `-10 + max(9, 35) = 25`.

#### Final Result
The **global maximum path sum** is `42`, achieved at the subtree rooted at `20`.


## Complexity
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(N)$$

## Code
```python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        def helper(node):
            if not node:
                return 0
            
            # dont take LMP if it is negative
            leftMaxPath = max(helper(node.left), 0)

            # dont take RMP if it is negative
            rightMaxPath = max(helper(node.right), 0)

            maxIfNodeIsRoot = node.val + leftMaxPath + rightMaxPath
            self.maxSum = max(self.maxSum, maxIfNodeIsRoot)
            return node.val + max(leftMaxPath, rightMaxPath)
        
        self.maxSum = float('-inf')
        helper(root)
        return self.maxSum
```
```Java []
class Solution {
    private int maxSum = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        helper(root);
        return maxSum;
    }

    private int helper(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftMaxPath = Math.max(helper(node.left), 0);
        int rightMaxPath = Math.max(helper(node.right), 0);

        int maxIfNodeIsRoot = node.val + leftMaxPath + rightMaxPath;
        maxSum = Math.max(maxSum, maxIfNodeIsRoot);

        return node.val + Math.max(leftMaxPath, rightMaxPath);
    }
}
```
```JavaScript []
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function helper(node) {
        if (!node) return 0;

        let leftMaxPath = Math.max(helper(node.left), 0);
        let rightMaxPath = Math.max(helper(node.right), 0);

        let maxIfNodeIsRoot = node.val + leftMaxPath + rightMaxPath;
        maxSum = Math.max(maxSum, maxIfNodeIsRoot);

        return node.val + Math.max(leftMaxPath, rightMaxPath);
    }

    helper(root);
    return maxSum;
};
```
```C# []
public class Solution {
    private int maxSum = int.MinValue;

    public int MaxPathSum(TreeNode root) {
        Helper(root);
        return maxSum;
    }

    private int Helper(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftMaxPath = Math.Max(Helper(node.left), 0);
        int rightMaxPath = Math.Max(Helper(node.right), 0);

        int maxIfNodeIsRoot = node.val + leftMaxPath + rightMaxPath;
        maxSum = Math.Max(maxSum, maxIfNodeIsRoot);

        return node.val + Math.Max(leftMaxPath, rightMaxPath);
    }
}
```
```C++ []
class Solution {
public:
    int maxSum = INT_MIN;

    int maxPathSum(TreeNode* root) {
        helper(root);
        return maxSum;
    }

private:
    int helper(TreeNode* node) {
        if (!node) return 0;

        int leftMaxPath = max(helper(node->left), 0);
        int rightMaxPath = max(helper(node->right), 0);

        int maxIfNodeIsRoot = node->val + leftMaxPath + rightMaxPath;
        maxSum = max(maxSum, maxIfNodeIsRoot);

        return node->val + max(leftMaxPath, rightMaxPath);
    }
};
```
```Go []
import "math"

func maxPathSum(root *TreeNode) int {
    maxSum := math.MinInt32

    var helper func(node *TreeNode) int
    helper = func(node *TreeNode) int {
        if node == nil {
            return 0
        }

        leftMaxPath := max(helper(node.Left), 0)
        rightMaxPath := max(helper(node.Right), 0)

        maxIfNodeIsRoot := node.Val + leftMaxPath + rightMaxPath
        maxSum = max(maxSum, maxIfNodeIsRoot)

        return node.Val + max(leftMaxPath, rightMaxPath)
    }

    helper(root)
    return maxSum
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

### Please thumbs up on the bottom-left corner!<br>It motivates me to create more solutions and videos for you!
![thumbs up (1).png](./images/1.png)
