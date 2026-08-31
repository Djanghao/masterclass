# 🔥 🔥 🔥 Video Explanation | Fastest | Beats 100% | Easy to understand 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 15
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162738/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162738/)

---

# [Detail Video Explanation](https://www.youtube.com/watch?v=4oiCtjhbDKU)

![Screenshot 2024-05-15 at 6.15.51\u202FPM.png](./images/0.png)

# Intuition
The intuition behind this problem is to recursively evaluate the tree:

- If a node is a leaf node, return its boolean value directly.
- If a node is an internal node (an operator), evaluate its left and right subtrees.
- Combine the results of the left and right subtrees using the operator stored in the current node.

# Approach
**Base Case:**

- If the node is None, it doesn't contribute to the evaluation, so we don't need to handle this case in the recursion explicitly because it won't happen in a valid tree.
- If the node is a leaf (both left and right children are None), return its boolean value. This is done by checking root.val:
- If root.val is 0, return False.
- If root.val is 1, return True.

**Recursive Case:**

- Recursively evaluate the left and right subtrees.
- If the current node's value is 2, return the logical OR (or) of the left and right subtree evaluations.
- If the current node's value is 3, return the logical AND (and) of the left and right subtree evaluations.



# Detailed Steps
Check for Leaf Node:

- If root.left and root.right are None, it means the current node is a leaf. Return True if root.val is 1, otherwise return False.

**Evaluate Subtrees:**

- Recursively call evaluateTree on root.left to get the boolean value of the left subtree (lTree).
- Recursively call evaluateTree on root.right to get the boolean value of the right subtree (rTree).

**Apply Operator:**

- If root.val is 2, return the result of lTree or rTree.
- If root.val is 3, return the result of lTree and rTree.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return

        if not root.left and not root.right:
            if root.val == 0:
                return False
            else:
                return True

        lTree = self.evaluateTree(root.left)
        rTree = self.evaluateTree(root.right)

        if root.val == 2:
            return lTree or rTree
        else:
            return lTree and rTree

```
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
public:
    bool evaluateTree(TreeNode* root) {
        // Base case: if the node is a leaf
        if (!root->left && !root->right) {
            return root->val == 1;
        }

        // Recursive case: evaluate the left and right subtrees
        bool lTree = evaluateTree(root->left);
        bool rTree = evaluateTree(root->right);

        // Apply the operator
        if (root->val == 2) {
            return lTree || rTree;
        } else if (root->val == 3) {
            return lTree && rTree;
        }

        // Default return false, although we shouldn't reach here with valid
        // input
        return false;
    }
};
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
    public boolean evaluateTree(TreeNode root) {// Base case: if the node is a leaf
        if (root.left == null && root.right == null) {
            return root.val == 1;
        }

        // Recursive case: evaluate the left and right subtrees
        boolean lTree = evaluateTree(root.left);
        boolean rTree = evaluateTree(root.right);

        // Apply the operator
        if (root.val == 2) {
            return lTree || rTree;
        } else if (root.val == 3) {
            return lTree && rTree;
        }

        // Default return false, although we shouldn't reach here with valid input
        return false;
    }
}
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
func evaluateTree(root *TreeNode) bool {
	if root == nil {
		return false
	}
	if root.Left == nil && root.Right == nil {
		return root.Val == 1
	}

	lTree := evaluateTree(root.Left)
	rTree := evaluateTree(root.Right)

	if root.Val == 2 {
		return lTree || rTree
	} else {
		return lTree && rTree
	}
}
```
```Kotlin []
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun evaluateTree(root: TreeNode?): Boolean {
        if (root == null) {
            return false
        }
        if (root.left == null && root.right == null) {
            return root.`val` == 1
        }

        val lTree = evaluateTree(root.left)
        val rTree = evaluateTree(root.right)

        return if (root.`val` == 2) {
            lTree || rTree
        } else {
            lTree && rTree
        }
    }
}
```
```Ruby []
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def evaluate_tree(root)
    return false if root.nil?
    return root.val == 1 if root.left.nil? && root.right.nil?

    l_tree = evaluate_tree(root.left)
    r_tree = evaluate_tree(root.right)

    if root.val == 2
      return l_tree || r_tree
    else
      return l_tree && r_tree
    end
end
```
# **Please Upvote**