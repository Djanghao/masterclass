# php simple solution

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/1712507/](https://leetcode.com/problems/path-sum-ii/solutions/1712507/)

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

    private $result = [];
    private $targetSum;
    /**
     * @param TreeNode $root
     * @param Integer $targetSum
     * @return Integer[][]
     */
    function pathSum($root, $targetSum) {
        $this->targetSum = $targetSum;
        $this->findPath($root,[], 0);
        return $this->result;
    }
    
    function findPath($tree, $path, $pathSum) {
        if (is_null($tree)) {
            return false;
        }
        $path[] = $tree->val;
        $pathSum += $tree->val;
        
        if ($pathSum === $this->targetSum && is_null($tree->left) && is_null($tree->right)) {
            $this->result[] = $path;
            return true;
        }
        $this->findPath($tree->left, $path, $pathSum);
        $this->findPath($tree->right, $path, $pathSum);
    }
}