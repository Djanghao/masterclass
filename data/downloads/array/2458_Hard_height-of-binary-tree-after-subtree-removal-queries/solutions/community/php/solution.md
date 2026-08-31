# Two pass DFS solution for PHP

**Author:** wolfvit
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5972203/](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5972203/)

---

# Complexity
- Time complexity: $$O(n+q)$$
- Space complexity: $$O(n)$$

# Code
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

    private array $heights;

    /**
     * @param TreeNode $root
     * @param Integer[] $queries
     * @return Integer[]
     */
    function treeQueries($root, $queries) {
        $this->heights = [];
        $maxHeight = 0;
        $this->dfs($root, 0, $maxHeight);
        $maxHeight = 0;
        $this->dfs($root, 0, $maxHeight, true);

        $res = [];
        foreach ($queries as $q) {
            $res[] = $this->heights[$q];
        }
        return $res;
    }

    private function dfs(TreeNode $n, int $height, int &$maxHeight, bool $rtl = false) {
        $this->heights[$n->val] = isset($this->heights[$n->val]) 
            ? max($this->heights[$n->val], $maxHeight) 
            : $maxHeight;
        $maxHeight = max($maxHeight, $height);
        foreach ($rtl ? [$n->right, $n->left] : [$n->left, $n->right] as $child)
            if ($child)
                $this->dfs($child, $height + 1, $maxHeight, $rtl);
    }
}
```