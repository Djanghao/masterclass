# PHP - DFS (with comments)

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/6112929/](https://leetcode.com/problems/increasing-order-search-tree/solutions/6112929/)

---

```
class Solution {

    function increasingBST($root) {
        if(!$root->val) {
            return null;
        }
        
        $newRoot = null;
        $curr = null;
        $this->dfs($root, $newRoot, $curr);
        
        return $newRoot;
    }
    
    function dfs($root, &$newRoot, &$curr){
        if(!$root) {
            return;
        }
                
        //traverse left subtree first
        $this->dfs($root->left, $newRoot, $curr);
        
        if(!$newRoot){
            //initialized one time and contain link to the head node to return
            $newRoot = new TreeNode($root->val);
            
            //curr is a point using to keep track the last node
            //curr contain only link to the last node, thats why we can't return curr instead of newRoot
            $curr = $newRoot;
        } else {
            $curr->right = new TreeNode($root->val);
            $curr = $curr->right;
        }
                
        //traverse right subtree
        $this->dfs($root->right, $newRoot, $curr);
    }
}
```