# 🔥🔥🔥 BEATS 100% ✅  EXPLAiNED 🔥 ANY LANGUAGE ✅✅✅

**Author:** prodonik
**Votes:** 14
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5024742/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/5024742/)

---

# Intuition
The intuition behind this solution is to perform a depth-first search (DFS) traversal of the binary tree while keeping track of the current number formed by the path from the root to each leaf node. By maintaining this number during the traversal, we can calculate the sum of all root-to-leaf paths.

# Approach
The approach involves implementing a depth-first search (DFS) function that takes a `TreeNode` as input along with the current number formed by the path from the root to the current node. We start the traversal from the root node with an initial sum of 0. During the traversal, at each node, we update the current number by multiplying it by 10 and adding the value of the current node. When we reach a leaf node, we return the sum of the current number formed by the path from the root to that leaf node. Finally, we sum up the results obtained from all leaf nodes to get the total sum of all root-to-leaf paths.

# Complexity
- Time complexity: O(n), where n is the number of nodes in the binary tree. This is because we visit each node exactly once.
- Space complexity: O(h), where h is the height of the binary tree. In the worst case, the space complexity approaches O(n) for a skewed binary tree, but in a balanced binary tree, it is O(log n).

![image.png](./images/0.png)

# Code
```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }
    
    private int dfs(TreeNode node, int num) {
        if (node == null) return 0;
        if (node.left == null && node.right == null) {
            return num * 10 + node.val;
        }
        return dfs(node.left, num * 10 + node.val) + dfs(node.right, num * 10 + node.val);
    }
}
```
```C++ []
class Solution {
public:
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
    
    int dfs(TreeNode* node, int num) {
        if (!node) return 0;
        if (!node->left && !node->right) {
            return num * 10 + node->val;
        }
        return dfs(node->left, num * 10 + node->val) + dfs(node->right, num * 10 + node->val);
    }
};
```
```C# []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode() {}
 *     public TreeNode(int val) { this.val = val; }
 *     public TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int SumNumbers(TreeNode root) {
        return Dfs(root, 0);
    }
    
    private int Dfs(TreeNode node, int num) {
        if (node == null) return 0;
        if (node.left == null && node.right == null) {
            return num * 10 + node.val;
        }
        return Dfs(node.left, num * 10 + node.val) + Dfs(node.right, num * 10 + node.val);
    }
}
```
```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        return self.dfs(root, 0)
    
    def dfs(self, node: TreeNode, num: int) -> int:
        if not node:
            return 0
        if not node.left and not node.right:
            return num * 10 + node.val
        return self.dfs(node.left, num * 10 + node.val) + self.dfs(node.right, num * 10 + node.val)
```
```Go []
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumNumbers(root *TreeNode) int {
    return dfs(root, 0)
}

func dfs(node *TreeNode, num int) int {
    if node == nil {
        return 0
    }
    if node.Left == nil && node.Right == nil {
        return num * 10 + node.Val
    }
    return dfs(node.Left, num * 10 + node.Val) + dfs(node.Right, num * 10 + node.Val)
}
```
```JS []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root, 0);
};

var dfs = function(node, num) {
    if (!node) return 0;
    if (!node.left && !node.right) {
        return num * 10 + node.val;
    }
    return dfs(node.left, num * 10 + node.val) + dfs(node.right, num * 10 + node.val);
};
```
![image.png](./images/1.png)
