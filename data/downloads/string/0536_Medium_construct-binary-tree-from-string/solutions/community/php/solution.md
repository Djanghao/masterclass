# Recursion

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5690784/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/5690784/)

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
    private $index = 0;

    public function str2tree($s) {
        if (empty($s)) {
            return null;
        }
        return $this->buildTree($s);
    }

    private function buildTree($s) {
        if ($this->index >= strlen($s)) {
            return null;
        }

        // Get the root value
        $start = $this->index;
        if ($s[$this->index] == '-') {
            $this->index++;
        }
        while ($this->index < strlen($s) && is_numeric($s[$this->index])) {
            $this->index++;
        }
        $rootValue = intval(substr($s, $start, $this->index - $start));

        // Create the root node
        $root = new TreeNode($rootValue);

        // Check if there's a left child (i.e., if there's a '(' after the root value)
        if ($this->index < strlen($s) && $s[$this->index] == '(') {
            $this->index++; // skip '('
            $root->left = $this->buildTree($s);
            $this->index++; // skip ')'
        }

        // Check if there's a right child
        if ($this->index < strlen($s) && $s[$this->index] == '(') {
            $this->index++; // skip '('
            $root->right = $this->buildTree($s);
            $this->index++; // skip ')'
        }

        return $root;
    }
}

// // Example usage:
// $solution = new Solution();
// $s = "4(2(3)(1))(6(5))";
// $tree = $solution->str2tree($s);

// // Function to print the tree (for verification purposes)
// function preOrder($node) {
//     if ($node == null) return;
//     echo $node->val . " ";
//     preOrder($node->left);
//     preOrder($node->right);
// }

// preOrder($tree); // Output should be: 4 2 3 1 6 5

```