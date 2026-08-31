# PHP Solution | BFS

**Author:** ngkute001
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/4323245/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/4323245/)

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
     * @param Integer $x
     * @param Integer $y
     * @return Boolean
     */
    function isCousins($root, $x, $y) {
        list($xParent, $xDepth) = $this->getParent($root, $x);
        list($yParent, $yDepth) = $this->getParent($root, $y);

        if ($xParent !== $yParent && $xDepth === $yDepth) return true;

        return false;
    }

    function getParent($root, $target) {
        if ($root === NULL) return [NULL, -1];
        if ($root->val === $target) return [NULL, 0];
        if ($root->left !== NULL && $root->left->val === $target) return [$root, 1];
        if ($root->right !== NULL && $root->right->val === $target) return [$root, 1];
        
        list($leftParent, $leftDepth) = $this->getParent($root->left, $target);
        list($rightParent, $rightDepth) = $this->getParent($root->right, $target);

        if ($leftParent === NULL) {
            return [$rightParent, $rightDepth + 1];
        }

        return [$leftParent, $leftDepth + 1];
    }
}
```

# Breadth First Search
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
     * @param Integer $x
     * @param Integer $y
     * @return Boolean
     */
    function isCousins($root, $x, $y) {
        $queue = new SplQueue();
        $queue->enqueue($root);
        while(! $queue->isEmpty()) {
            $size = $queue->count();
            $count = 0; // count x or y

            while ($size > 0) {
                $current = $queue->dequeue();
            
                if ($current->val === $x || $current->val === $y) {
                    $count++;
                }

                if ( ($current->left->val === $x && $current->right->val === $y) ||
                     ($current->right->val === $x && $current->left->val === $y)    
                ) {
                    return false;
                }

                if ($current->left !== NULL) $queue->enqueue($current->left);

                if ($current->right !== NULL) $queue->enqueue($current->right);

                $size--;
            }

            if ($count === 1) {
                return false;
            } else if ($count === 2) {
                return true;
            }
        }

        return false;
    }
}
```