# Easy PHP Solution

**Author:** onjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/3963504/](https://leetcode.com/problems/subtree-of-another-tree/solutions/3963504/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Iterate root and check with subRoot. if match then check subRoots of root. If every value match return true.
2. I use preOrderTraversal, means check value first then travel to left and right.

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate root and check with subRoot. if match then check subRoots of root. If every value match return true.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(N * M)$$, where N = root node and M = subRoot nodes

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(H)$$, where H = height of root

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
     * @param TreeNode $subRoot
     * @return Boolean
     */
    function isSubtree($root, $subRoot) {
        if( $subRoot == null ) {
            return true;
        }

        if( $root == null ) {
            return false;
        }

        if( $root -> val == $subRoot -> val ) {
            if( $this -> checkSubRoot($root, $subRoot) ) {
                return true;
            }
        }
        
        return $this -> isSubTree( $root -> left, $subRoot ) || $this -> isSubTree( $root -> right, $subRoot );
    }


    private function checkSubRoot($root, $subRoot ) {
        if( $root == null && $subRoot == null ) {
            return true;
        }

        if( $root == null || $subRoot == null ) {
            return false;
        }

        if( $root -> val != $subRoot -> val ) {
            return false;
        }

        return $this -> checkSubRoot($root->left, $subRoot->left) 
                && $this -> checkSubRoot($root->right, $subRoot -> right);
    }
}
```