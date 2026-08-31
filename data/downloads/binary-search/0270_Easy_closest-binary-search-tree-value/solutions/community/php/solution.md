# Recursive Binary Search

**Author:** Praxis88
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/3357397/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/3357397/)

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
class Solution {
    function closestValue($root, $target) {
        if ($target < $root->val && $root->left !== NULL) {
            $closest = $this->closestValue($root->left, $target);
        } elseif ($target > $root->val && $root->right !== NULL) {
            $closest = $this->closestValue($root->right, $target);
        } else {
            $closest = $root->val;
        }
        if (abs($root->val - $target) < abs($closest - $target)) {
            $closest = $root->val;
        }
        return $closest;
    }
}
```