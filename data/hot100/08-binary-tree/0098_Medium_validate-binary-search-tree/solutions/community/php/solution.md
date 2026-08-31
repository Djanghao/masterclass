# PHP Easy to understand recursion

**Author:** jamshad
**Votes:** 3
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/583056/](https://leetcode.com/problems/validate-binary-search-tree/solutions/583056/)

---

This one is intuitive and fairly easy to understand for me.

```
function isValidBST($root) {
        if ($root == null) { return true;}
        if ($root->left == null && $root->right == null) {return true;}

        if ($root->left) {
            if ($root->left->val >= $root->val) { return false;}
            $current = $root->left;
            //Biggest value on left side should still be smaller than root
            while ($current->right !== null) {$current = $current->right;}

            if ($root->val <= $current->val) {return false;}
        }
        if ($root->right) {
            if ($root->right->val <= $root->val) {return false;}
            $current = $root->right;
            //smallest value on right side should still be bigger than root
            while ($current->left !== null) {$current = $current->left;}
            
            if ($root->val >= $current->val) {return false;}
        }
        
        return $this->isValidBST($root->left) && $this->isValidBST($root->right);
    }
```

Whereas this is another solution, much faster and memory efficient 100% and 100%
but relatively dificult to understand
```
function isValidBST($root, $left = null, $right = null) {
        if ($root === null) return true;
        
        if ($left !== null && $root->val <= $left->val) return false;
        if ($right !== null && $root->val >= $right->val) return false;
        
        return $this->isValidBST($root->left, $left, $root) && $this->isValidBST($root->right, $root, $right);
    }
```