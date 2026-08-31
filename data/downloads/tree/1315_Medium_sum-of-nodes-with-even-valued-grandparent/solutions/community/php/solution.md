# Solution Sum of Nodes with Even-Valued Grandparent

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4918287/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4918287/)

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
     * @return Integer
     */
    function sumEvenGrandparent($root) {
        $sum = 0;
        $queue = new SplQueue();
        $queue->enqueue([$root, null, null]);
        
        while (!$queue->isEmpty()) {
            [$node, $parent, $grandparent] = $queue->dequeue();
            if ($grandparent !== null && $grandparent->val % 2 == 0) {
                $sum += $node->val;
            }
            if ($node->left !== null) {
                $queue->enqueue([$node->left, $node, $parent]);
            }
            if ($node->right !== null) {
                $queue->enqueue([$node->right, $node, $parent]);
            }
        }
        
        return $sum;
    }
}

```