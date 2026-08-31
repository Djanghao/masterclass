# Solution Maximum Binary Tree II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4856771/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4856771/)

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
     * @param Integer $val
     * @return TreeNode
     */
    function insertIntoMaxTree($root, $val) {
        if ($root == null || $root->val < $val) {
            $newNode = new TreeNode($val);
            $newNode->left = $root;
            return $newNode;
        }
        
        $root->right = $this->insertIntoMaxTree($root->right, $val);
        return $root;
    }
}

```