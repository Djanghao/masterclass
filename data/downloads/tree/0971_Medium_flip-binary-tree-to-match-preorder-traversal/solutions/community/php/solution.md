# preorder

**Author:** eugene1994
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/4281102/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/4281102/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
do preorder treversal then compare the current node with it's corresponding value in the voyage array (you can do that by increasing the index by 1 with each traversal), if they don't match,
 1- swap the left subtree with the right subtree
2- store the parent in your result

after you swap the subtrees (if needed) then do a regular preorder traversal and compare each node with it's corrspanding value in voyage's array.

if they match return the result 
if not return [-1]
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(H)
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
     * @param Integer[] $voyage
     * @return Integer[]
     */
     function flipMatchVoyage($root, $voyage) {
        $map = [];
        $index = 1;
        $this->swap($root, $voyage, $map, $index);
        $index = 0;
        if (!$this->preorder($root, $voyage, $index)) return [-1];
        return $map;
    }

    function swap($root, $voyage, &$map, &$index){
        if (!$root) return;
        $left = $root->left;
        $right = $root->right;
        if ($left && $voyage[$index] != $root->left->val){
            $map[]= $root->val;
            $root->left = $right;
            $root->right = $left;
        }
        
        $index++;
        $this->swap($root->left, $voyage, $map, $index);
        $this->swap($root->right, $voyage, $map, $index);
    }

    function preorder($root, $voyage, &$index){
        if (!$root) return true;
        if ($root->val != $voyage[$index]) return false;
        $index++;
        return $this->preorder($root->left, $voyage, $index) && $this->preorder($root->right, $voyage, $index);
    }
}
```