# php solution

**Author:** wfystx
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/330265/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/330265/)

---

```
class Solution {
    /**
     * @param TreeNode $root
     * @return Integer[]
     */
    function preorderTraversal($root) {
        $res = array();
        $this->helper($root, $res);
        return $res;
    }
    function helper($root, &$res){
        if(!$root) return;
        array_push($res, $root->val);
        $this->helper($root->left, $res);
        $this->helper($root->right, $res);
    }
}
```