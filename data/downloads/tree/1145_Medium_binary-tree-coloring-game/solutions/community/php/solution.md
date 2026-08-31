# Simple DFS solution

**Author:** eugene1994
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/4277712/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/4277712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) where N is the number of nodes the tree
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(H) where H is the height of the tree
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
     * @param Integer $n
     * @param Integer $x
     * @return Boolean
     */
    function btreeGameWinningMove($root, $n, $x) {
         $chosenNode = $this->findNode($root, $x);

        $leftCount = $this->countNodes($chosenNode->left);
        $rightCount = $this->countNodes($chosenNode->right);
        $parentCount = $n - $leftCount - $rightCount - 1;

        return max($leftCount, $rightCount, $parentCount) > $n / 2;
    }

    function countNodes($node) {
        if (!$node) return 0;
        return 1 + $this->countNodes($node->left) + $this->countNodes($node->right);
    }

    function findNode($node, $target) {
        if (!$node) return null;
        if ($node->val == $target) return $node;
        $leftResult = $this->findNode($node->left, $target);
        return $leftResult ? $leftResult : $this->findNode($node->right, $target);
    }
}
```