# Boolean Tree Evaluation

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5166115/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5166115/)

---

# Intuition
To solve this problem, we need to traverse the given binary tree and perform evaluations according to the given rules. Since the problem involves boolean operations, we can utilize recursion to evaluate each node based on its type (leaf or non-leaf) and its children.

# Approach
1. We'll start by defining a function evaluateTree() which takes the root of the binary tree as input.
2. Inside the function, we'll handle base cases:
- If the root is null, we return false.
- If the root is a leaf node (both left and right children are null), we return its boolean value (0 for False, 1 for True).
3. For non-leaf nodes, we'll recursively evaluate the left and right subtrees.
4. We'll then apply the boolean operation based on the value of the current node (2 for OR, 3 for AND).
5. Return the result of the operation.

# Complexity
- Time complexity: Since we traverse each node once in the binary tree, the time complexity is O(n), where n is the number of nodes in the tree.

- Space complexity: The space complexity is also O(n) due to the recursion stack, where n is the height of the tree.

# Code
```
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
class Solution {

    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function evaluateTree($root) {
        // Base case: if the node is null, return false
        if ($root === null) {
            return false;
        }
        
        // If the node is a leaf node, return its value (0 or 1)
        if ($root->left === null && $root->right === null) {
            return $root->val === 1;
        }
        
        // Evaluate left and right subtrees
        $leftValue = $this->evaluateTree($root->left);
        $rightValue = $this->evaluateTree($root->right);
        
        // Apply boolean operation based on the node's value
        if ($root->val === 2) { 
            // OR operation
            return $leftValue || $rightValue;
        }

        // AND operation
        return $leftValue && $rightValue;
    }
}
```