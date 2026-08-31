# DFS (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/5155579/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/5155579/)

---

# Approach
1. Define a helper function dfs that takes in the current node root and the maximum value seen so far maxVal.
- Base case: if the current node is None, return 0.
- Calculate the result based on the current node's value. If the current node's value is greater than or equal to the maximum value seen so far, set res to 1; otherwise, set it to 0.
- Update the maximum value seen so far by taking the maximum of the current maximum value and the current node's value.
- Recursively calculate the result for the left and right subtrees by calling dfs on the left and right child nodes of the current node, passing in the updated maximum value.
- Add the results from the left and right subtrees to the current result.
2. Return the final result.

# Complexity
- Time complexity:
$$O(N)$$, where N is the number of nodes in the binary tree. This is because we perform a depth-first search traversal of the tree, visiting each node once.

- Space complexity:
$$O(H)$$, where H is the height of the binary tree. In the worst case, when the tree is skewed and has a height of N, the space complexity can be $$O(N)$$. 
In the average case, where the tree is balanced, the space complexity is $$O(log N)$$, as the height of the tree is logarithmic in the number of nodes.

# Code
``` python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(root, maxVal):
            # Base case: if the root is None, return 0
            if not root:
                return 0
            # Calculate the result based on the current node's value
            res = 1 if root.val >= maxVal else 0
            # Update the maximum value seen so far
            maxVal = max(maxVal, root.val)
            # Recursively calculate the result for the left and right subtrees
            res += dfs(root.left, maxVal)
            res += dfs(root.right, maxVal)
            return res
        
        # Start the depth-first search from the root of the tree
        return dfs(root, root.val)
```
``` javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    function dfs(root, maxVal) {
        if (!root) {
        return 0;
        }
        const res = root.val >= maxVal ? 1 : 0;
        maxVal = Math.max(maxVal, root.val);
        return res + dfs(root.left, maxVal) + dfs(root.right, maxVal);
    }

    return dfs(root, root.val);
};
```
``` php []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */

function dfs($root, $maxVal) {
    if ($root == null) {
        return 0;
    }
    $res = $root->val >= $maxVal ? 1 : 0;
    $maxVal = max($maxVal, $root->val);
    return $res + dfs($root->left, $maxVal) + dfs($root->right, $maxVal);
}

class Solution {

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function goodNodes($root) {
        return dfs($root, $root->val);
    }
}
```