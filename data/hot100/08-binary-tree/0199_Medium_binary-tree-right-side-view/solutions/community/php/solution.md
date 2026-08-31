# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/6042350/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/6042350/)

---

```php []
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
     * @return Integer[]
     */
    function rightSideView($root) {
        // Iteratively traverse the tree by depth (DFS), starting with the current node, then the right side, and then the left side.
        // Keep track of the max depth reached. If we are in a node of bigger depth, add it to the solution array.
        $maxDepth = -1;
        $solution = [];
        $this->rightView($root, 0, $maxDepth, $solution);
        return $solution;
    }

    function rightView($node, $currentDepth, &$maxDepth, &$solution) {
        if ($node === null) return;

        if ($currentDepth > $maxDepth) {
            $maxDepth = $currentDepth;    // Or: $maxDepth++; (its the same for this problem)
            $solution[] = $node->val;
        }

        $this->rightView($node->right, $currentDepth+1, $maxDepth, $solution);
        $this->rightView($node->left, $currentDepth+1, $maxDepth, $solution);
    }
}
```