# PHP 287 ms with Memory 117.82 MB

**Author:** Novs
**Votes:** 0
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4621749/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4621749/)

---

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

    protected int $i = 0;

    protected int $count = 0;

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function pseudoPalindromicPaths ($root) {
        $this->calc($root);
        return $this->count;
    }

    protected function calc(TreeNode $node, $count_chars = []) {
        if (isset($count_chars[$node->val])) {
            $count_chars[$node->val]++;
        } else {
            $count_chars[$node->val] = 1;
        }

        if ($node->left) {
            $this->calc($node->left, $count_chars);
        }
        
        if ($node->right) {
            $this->calc($node->right, $count_chars);
        }

        if (!$node->left && !$node->right) {
            $this->count += $this->isPseudoPalindrom($count_chars) ? 1 : 0;
        }

        return;
    }

    protected function isPseudoPalindrom(array $count_chars) {
        $oddCnt = 0;
        foreach ($count_chars as $char => $cnt) {
            if ($cnt % 2 === 1) {
                $oddCnt++;
            }
            if ($oddCnt > 1) {
                return false;
            }
        }
        return true;
    }
}
```