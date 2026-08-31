# Solution Most Frequent Subtree Sum

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/4734214/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/4734214/)

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
class Solution {
    
    /**
     * @param TreeNode $root
     * @return Integer[]
     */
    function findFrequentTreeSum($root) {
        $counts = [];
        $max = ["val" => -INF];
        $this->dfs($root, $counts, $max);
        $sums = [];
        foreach ($counts as $key => $val) {
            if ($val === $max["val"]) {
                $sums[] = intval($key);
            }
        }
        return $sums;
    }
    
    function dfs($root, &$counts, &$max) {
        if ($root === null) return 0;
        $sum = $root->val + $this->dfs($root->left, $counts, $max) + $this->dfs($root->right, $counts, $max);
        $counts[$sum] = ($counts[$sum] ?? 0) + 1;
        $max["val"] = max($max["val"], $counts[$sum]);
        return $sum;
    }
}

```