# php set recursion solution

**Author:** lisze1
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1118038/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1118038/)

---

recursion solution
```
class Solution {

    /**
     * @param TreeNode $root
     * @param Integer $k
     * @return Boolean
     */
    function findTarget($root, $k) {
        if ($root === null) return false;
        $set = [];
        return $this -> inBST($root, $k, $set);
        
        
    }
    
    function inBST($root, $k, &$set) {
        if ($root === null) return false;
        if (in_array($k - $root -> val, $set)) return true;
        $set[] = $root -> val;
        return $this -> inBST($root -> left, $k, $set) || $this -> inBST($root -> right, $k, $set);
        
    }
    
    
}
```

BFS with queue
```
class Solution {

    /**
     * @param TreeNode $root
     * @param Integer $k
     * @return Boolean
     */
    function findTarget($root, $k) {
        if (is_null($root)) return false;
        $set = [];
        $queue = [];
        $queue[] = $root;
        while (count($queue) !== 0) {
            if (!is_null($queue[0])) {
                $cur_node = array_shift($queue);
                if (in_array($k - $cur_node -> val, $set)) return true;
                $set[] = $cur_node -> val;
                $queue[] = $cur_node -> left;
                $queue[] = $cur_node -> right;
            } else {
                array_shift($queue);
            }
        }
        return false;
    }
}
```