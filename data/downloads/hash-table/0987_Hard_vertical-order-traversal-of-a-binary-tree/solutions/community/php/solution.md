# PHP BFS Solution

**Author:** TasneemWahdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/3292100/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/3292100/)

---


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
     * @return Integer[][]
     */
    function verticalTraversal($root) {
        $q = new SplQueue();
        $q->enqueue([$root,0]);
        $columns = [];
        while(! $q->isEmpty()){
            $size = $q->count();
            $levelNodes = [];
            for($i = 0; $i < $size; $i++){
                $front = $q->dequeue();
                $levelNodes []= [$front[0]->val, $front[1]];
                if($front[0]->left){
                    $q->enqueue([$front[0]->left, $front[1]-1]);
                }
                if($front[0]->right){
                    $q->enqueue([$front[0]->right, $front[1]+1]);
                }
            }
            sort($levelNodes);
            foreach($levelNodes as $node){
                $v = $node[0];
                $c = $node[1];
                if(! isset($columns[$c])){
                        $columns[$c] = [$v];
                    }
                    else{
                        array_push($columns[$c], $v);
                    }
                }
        }
         ksort($columns);
        return $columns;
    }
}
```