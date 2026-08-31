# PHP Solution with Recursive

**Author:** minhducck
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2539708/](https://leetcode.com/problems/binary-tree-pruning/solutions/2539708/)

---

```
class Solution {

    protected function recursive(&$root)
    {
        if ($root === null) {
            return false;
        }

        if (!$this->recursive($root->left)) {
            $root->left = null;
        }
        
        if (!$this->recursive($root->right)) {
            $root->right = null;
        }
        
        $rs = $root->left || $root->right || $root->val == 1;
        
        if ($rs === false) {
            $root = null;
        }

        return $rs;
    }
    
    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function pruneTree($root) {
        $this->recursive($root);

        return $root;
    }
}
```