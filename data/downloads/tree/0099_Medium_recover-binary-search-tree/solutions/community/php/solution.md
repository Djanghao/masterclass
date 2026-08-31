# Solution

**Author:** Yudgin88
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/5660061/](https://leetcode.com/problems/recover-binary-search-tree/solutions/5660061/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

    /**
     * @param TreeNode $root
     * @return NULL
     */
    function recoverTree($root) {
        $wrongPositions = [];

        foreach ($this->walkNode($root) as $node) {
            if (isset($prev)) {
                if ($node->val < $prev->val) {
                    if (isset($wrongPositions[$prev->val])) {
                        unset($wrongPositions[$prev->val]);
                    } else {
                        $wrongPositions[$prev->val] = $prev;
                    }
                    $wrongPositions[$node->val] = $node;
                }
            }

            $prev = $node;
        }

        $first = array_shift($wrongPositions);
        $second = array_pop($wrongPositions);

        list($first->val, $second->val) = [$second->val, $first->val];
    }

    function walkNode(TreeNode $node): Traversable
    {
        if ($node->left !== null) {
            yield from $this->walkNode($node->left);
        }

        yield $node;

        if ($node->right !== null) {
            yield from $this->walkNode($node->right);
        }
    }
}
```