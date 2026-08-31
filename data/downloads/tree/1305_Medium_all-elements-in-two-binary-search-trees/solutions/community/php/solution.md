# php simple solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/1978823/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/1978823/)

---

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

    private $nodes = [];
    
    /**
     * @param TreeNode $root1
     * @param TreeNode $root2
     * @return Integer[]
     */
    function getAllElements($root1, $root2) {
        $this->traceTree($root1);
        $this->traceTree($root2);
        sort($this->nodes);
        return $this->nodes;
    }
    
    function traceTree($tree) {
        if (is_null($tree)) {
            return $tree;
        }
        $this->nodes[] = $tree->val;
        $this->traceTree($tree->left);
        $this->traceTree($tree->right);
    }
}