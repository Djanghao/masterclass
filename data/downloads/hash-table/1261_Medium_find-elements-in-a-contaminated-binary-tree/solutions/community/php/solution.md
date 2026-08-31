# PHP (BFS+cache). T - O(n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/4916015/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/4916015/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
BFS + cache
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
class FindElements {
    /**
     * @param TreeNode $root
     */
    function __construct($root) {
        $i = 0;
        $arr = [$root];
        $flag = true;
        while($flag){
            $flag = false;
            $tmp = [];
            for($j=0;$j<count($arr);$j++){
                if($arr[$j]){
                    $this->d[$i] = true;
                    $tmp[] = $arr[$j]->left ?? null;
                    $tmp[] = $arr[$j]->right ?? null;
                    $flag = true;
                } else {
                    $tmp[] = null;
                    $tmp[] = null;
                }
                $i++;
            }
            $arr = $tmp;
        }
    }
    private $d = [];
    /**
     * @param Integer $target
     * @return Boolean
     */
    function find($target) {
        return $this->d[$target] ?? false;
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * $obj = FindElements($root);
 * $ret_1 = $obj->find($target);
 */
```