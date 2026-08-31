# Solution Insufficient Nodes in Root to Leaf Paths

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/4875238/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/4875238/)

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
    function sufficientSubset($root, $limit) {
        if ($root == null) {
            return null;
        }
        
        if ($root->left == null && $root->right == null) {
            if ($root->val < $limit) {
                return null;
            }
            return $root;
        }
        
        $root->left = $this->sufficientSubset($root->left, $limit - $root->val);
        $root->right = $this->sufficientSubset($root->right, $limit - $root->val);
        
        if ($root->left == null && $root->right == null) {
            return null;
        }
        
        return $root;
    }
}

```