# PHP - DFS

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/6059303/](https://leetcode.com/problems/leaf-similar-trees/solutions/6059303/)

---

```
class Solution {

    function leafSimilar($root1, $root2) {
        $leafs1 = [];
        $this->dfs($root1, $leafs1);
        
        $leafs2 = [];
        $this->dfs($root2, $leafs2);
        
        return $leafs1 === $leafs2;
    }
    
    function dfs($root, &$leafs){
        if($root->val === null){
            return;
        }
        
        if($root->left === null && $root->right === null){
            $leafs[] = $root->val;
        }
        
        $this->dfs($root->left, $leafs);
        $this->dfs($root->right, $leafs);
        
        return;
    }
}
```