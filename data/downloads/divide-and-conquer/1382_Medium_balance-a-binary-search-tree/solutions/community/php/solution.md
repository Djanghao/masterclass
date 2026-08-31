# Recursive DFS (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5370825/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5370825/)

---

# Approach
Recursive depth-first search (DFS).

The inorder function performs an inorder traversal of the binary search tree, which is a type of depth-first search traversal. In an inorder traversal, the left subtree is visited, followed by the current node, and then the right subtree.

The build_balanced_bst function also uses a depth-first search approach to construct the balanced binary search tree. It recursively divides the subarray of nodes into two halves and constructs the left and right subtrees using the same approach.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of nodes in the binary search tree.
inorder: O(n), as it visits each node in the binary search tree once.
build_balanced_bst: O(n), as it recursively constructs the balanced binary search tree.

- Space complexity:
$$O(n)$$, as the solution uses a recursive approach and the call stack can grow to accommodate the recursive calls.
inorder: O(n), as the list of node values is built in memory.
build_balanced_bst: can use up to O(log n) space for the recursive calls, but since the maximum depth of the recursion tree is also O(log n), the overall space complexity is O(n).

# Code
``` python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        def inorder(node):
            """
            Returns a list containing the values of the nodes in the input tree in inorder traversal.
            """
            if not node:
                return []
            return inorder(node.left) + [node.val] + inorder(node.right)
        
        def build_balanced_bst(nodes):
            """
            Builds a balanced binary search tree from a list of values in inorder traversal.
            """
            if not nodes:
                return None
            
            mid = len(nodes) // 2
            root = TreeNode(nodes[mid])
            root.left = build_balanced_bst(nodes[:mid])
            root.right = build_balanced_bst(nodes[mid+1:])
            
            return root
        
        # Get the nodes in inorder traversal
        nodes = inorder(root)
        
        # Build a balanced binary search tree from the list of nodes
        return build_balanced_bst(nodes)

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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    function inorder(node) {
        // Returns a list containing the values of the nodes in the input tree in inorder traversal.
        if (!node) {
            return [];
        }
        return inorder(node.left).concat([node.val]).concat(inorder(node.right));
    }

    function buildBalancedBST(nodes) {
        // Builds a balanced binary search tree from a list of values in inorder traversal.
        if (!nodes.length) {
            return null;
        }

        const mid = Math.floor(nodes.length / 2);
        const root = new TreeNode(nodes[mid]);
        root.left = buildBalancedBST(nodes.slice(0, mid));
        root.right = buildBalancedBST(nodes.slice(mid + 1));

        return root;
    }

    // Get the nodes in inorder traversal
    const nodes = inorder(root);

    // Build a balanced binary search tree from the list of nodes
    return buildBalancedBST(nodes);
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
class Solution {

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function balanceBST($root) {
        $inorder = function($node) use (&$inorder) {
            // Returns a list containing the values of the nodes in the input tree in inorder traversal.
            if ($node === null) {
                return [];
            }
            return array_merge($inorder($node->left), [$node->val], $inorder($node->right));
        };

        $buildBalancedBST = function($nodes) use (&$buildBalancedBST) {
            // Builds a balanced binary search tree from a list of values in inorder traversal.
            if (empty($nodes)) {
                return null;
            }

            $mid = (int)(count($nodes) / 2);
            $root = new TreeNode($nodes[$mid]);
            $root->left = $buildBalancedBST(array_slice($nodes, 0, $mid));
            $root->right = $buildBalancedBST(array_slice($nodes, $mid + 1));

            return $root;
        };

        // Get the nodes in inorder traversal
        $nodes = $inorder($root);

        // Build a balanced binary search tree from the list of nodes
        return $buildBalancedBST($nodes);

    }
}
```