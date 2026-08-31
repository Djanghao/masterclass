# Solution Serialize and Deserialize Binary Tree

**Author:** Suyono-Sukorame
**Votes:** 1
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/4699534/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/4699534/)

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
 *     function __construct($value) { $this->val = $value; }
 * }
 */

class Codec {
    function __construct() {
        
    }
  
    /**
     * @param TreeNode $root
     * @return String
     */
    function serialize($root) {
        if ($root === null) {
            return 'null';
        }
        
        $leftSerialized = $this->serialize($root->left);
        $rightSerialized = $this->serialize($root->right);
        
        return $root->val . ',' . $leftSerialized . ',' . $rightSerialized;
    }
  
    /**
     * @param String $data
     * @return TreeNode
     */
    function deserialize($data) {
        $nodes = explode(',', $data);
        return $this->buildTree($nodes);
    }
    
    private function buildTree(&$nodes) {
        $val = array_shift($nodes);
        
        if ($val === 'null') {
            return null;
        }
        
        $node = new TreeNode($val);
        $node->left = $this->buildTree($nodes);
        $node->right = $this->buildTree($nodes);
        
        return $node;
    }
}

```