# [PHP] Recursive solution | 100% faster

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/882421/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/882421/)

---

Runtime: 32 ms, faster than 100.00% of PHP online submissions for Insert into a Binary Search Tree.

```
function insertIntoBST($root, $val) {
    if (!count($root)) return new TreeNode($val);
    if ($val < $root->val) {
        if ($root->left)
            $this->insertIntoBST($root->left,$val);
        else {
            $root->left = new TreeNode($val);
        }
    } else {
       if ($root->right)
            $this->insertIntoBST($root->right,$val);
        else {
            $root->right = new TreeNode($val);
        }
    }
    return $root;
}
```