# PHP. T-O(n), M-O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4909532/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/4909532/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
BFS
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
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

    /**
     * @param TreeNode $root
     * @return TreeNode
     */
    function reverseOddLevels($root) {
        
        $arr = [$root];
        $lvl = 1;
        while(count($arr)>0){
            $tmp = [];
            foreach($arr as $v){
                if($v->left){
                    $tmp[] = $v->left;
                }
                if($v->right){
                    $tmp[] = $v->right;
                }
            }
            if($lvl % 2 === 1){
                for($l=0,$r=count($tmp)-1;$l<$r;$l++,$r--){
                    $t = $tmp[$l]->val;
                    $tmp[$l]->val = $tmp[$r]->val;
                    $tmp[$r]->val = $t;
                }
            }
            $arr = $tmp;
            $lvl++;
        }
        return $root;

    }
}
```