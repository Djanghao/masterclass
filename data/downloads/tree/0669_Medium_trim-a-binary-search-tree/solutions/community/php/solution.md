# PHP recursive solution

**Author:** Sporkyy
**Votes:** 1
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/347325/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/347325/)

---

Not really any different from any other recursive solution; it's just in PHP.

Runtime: 16 ms, faster than 100.00% of PHP online submissions
Memory Usage: 18.2 MB, less than 100.00% of PHP online submissions

```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class Solution
{

    /**
     * @param TreeNode $root
     * @param Integer $L
     * @param Integer $R
     * @return TreeNode
     */
    function trimBST($root, $L, $R)
    {
        $recurse = function ($leaf) use (&$recurse, $L, $R) {
            if (!$leaf) return null;
            if ($leaf->val < $L) return $recurse($leaf->right);
            if ($R < $leaf->val) return $recurse($leaf->left);
            $leaf->left = $recurse($leaf->left);
            $leaf->right = $recurse($leaf->right);
            return $leaf;
        };
        return $recurse($root);
    }
}
```