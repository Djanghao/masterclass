# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/6042364/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/6042364/)

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
     * @return Integer
     */
    function maxLevelSum($root) {
        // No need to do DFS, as we will need to traverse all the elements.
        $levelSums = [];
        $this->recursiveMaxLevelSums($root, 0, $levelSums);

        $iMax = PHP_INT_MIN;
        $max = PHP_INT_MIN;
        for ($i = 0; $i < count($levelSums); $i++) {
            if ($levelSums[$i] > $max) {
                $iMax = $i+1;
                $max = $levelSums[$i];
            }
        }
        return $iMax;
    }

    function recursiveMaxLevelSums($node, $currentLevel, &$levelSums) {
        if ($node === null) return;

        $levelSums[$currentLevel] = ($levelSums[$currentLevel] ?? 0) + $node->val;

        $this->recursiveMaxLevelSums($node->left, $currentLevel+1, $levelSums);
        $this->recursiveMaxLevelSums($node->right, $currentLevel+1, $levelSums);
    }
}
```