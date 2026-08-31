# Solution Maximum Width of Binary Tree

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/4772063/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/4772063/)

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
class Solution
{

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function widthOfBinaryTree($root)
    {
        $h = [];
        foreach ($this->walk($root) as [$d, $w]) {
            if (empty($h[$d])) {
                $h[$d] = [$w];
            } else {
                $h[$d][1] = $w;
            }
        }

        return max(array_map(fn($a) => $this->diff($a), $h)) + 1;
    }

    function walk($root, $d = 0, $w = '')
    {
        if (!$root) return;
        yield [$d, $w];

        yield from $this->walk($root->left, $d + 1, $w . '0');
        yield from $this->walk($root->right, $d + 1, $w . '1');
    }

    function diff($a)
    {
        if (count($a) === 1) return 0;

        for ($i = 0; $i < strlen($a[0]) && $a[0][$i] === $a[1][$i]; $i++) ;

        $l = $r = 0;
        for (; $i < strlen($a[0]); $i++) {
            $l = $l * 2 + (int)$a[0][$i];
            $r = $r * 2 + (int)$a[1][$i];
        }

        return $r - $l;
    }
}

```