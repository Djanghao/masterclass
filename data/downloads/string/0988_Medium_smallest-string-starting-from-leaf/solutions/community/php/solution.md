# PHP recursive solution with prefix calculation and strcmp()

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5034189/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5034189/)

---

# Code
```
class Solution {
    function smallestFromLeaf($root) {
        return $this->rec($root,'');
    }   

    function rec($root, $prex){
        $prex = chr(97+$root->val).$prex;
        // leaf
        if($root->left == null && $root->right == null){
            return $prex;
        }
        // one path
        if($root->left == null){
            return $this->rec($root->right, $prex);
        }
        if($root->right == null){
            return $this->rec($root->left, $prex);
        }

        $left = $this->rec($root->left, $prex);
        $right = $this->rec($root->right, $prex);

        if(strcmp($left,$right) < 0){
            return $left;
        }
        return  $right;
    }
}
```