# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/6089406/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/6089406/)

---

```php []
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
     * @return Float[]
     */
    function averageOfLevels($root) {
        // results array + BFS (queue)
        $results = [];

        $queue = new SplQueue();
        $queue->enqueue($root);

        while (!$queue->isEmpty()) {
            $nodesInLevel = $queue->count();
            $currentLevelSum = 0;
            for ($i=0; $i<$nodesInLevel; $i++) {
                $currentNode = $queue->dequeue();

                $currentLevelSum += $currentNode->val;

                if ($currentNode->left) $queue->enqueue($currentNode->left);
                if ($currentNode->right) $queue->enqueue($currentNode->right);
            }
            $results[] = $currentLevelSum/$nodesInLevel;
        }

        return $results;
    }
}
```