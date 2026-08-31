# PHP Solution

**Author:** sukeshini
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/1056719/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/1056719/)

---

```
<?php

class Solution {

    /**
     * @param Integer[] $preorder
     * @return TreeNode
     */
    function bstFromPreorder($preorder) {
        $root = new TreeNode($preorder[0]);
        $i = 1; 
        $len = count($preorder);
        while($i < $len) {
            $root = $this->insert($preorder[$i], $root);
            $i++;
        }
        return $root;
    }
    
    function insert($val, $root) {
        if($root == null) {
            return new TreeNode($val);
        }
        if($root->val > $val) {
            $root->left = $this->insert($val, $root->left);
        } else {
            $root->right = $this->insert($val, $root->right);
        }
        return $root;
    }
}
```