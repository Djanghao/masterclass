# Graph + BFS approach (Beats 100% runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4589552/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4589552/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need a way to start moving from the target node, but with a tree this is not possible because in a tree you can only move in a downward direction so we can convert the tree into a graph and use the BFS algorithm to find the required nodes.
# Approach
<!-- Describe your approach to solving the problem. -->
Build a graph.
Walk through the graph starting from the target node to the required deep level, and collect the necessary child nodes.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class Solution {
    /**
     * @param TreeNode $root
     * @param TreeNode $target
     * @param Integer $k
     * @return Integer[]
     */
    function distanceK($root, $target, $k) {
        $graph = [];
        $graph[$root->val] = [];

        $queue = new SplQueue();
        $queue[] = $root;

        $deep = 0;
        $isTargetFound = false;

        //build graph
        while(!$queue->isEmpty()) {
            $levelSize = $queue->count();

            if ($isTargetFound) {
                $deep++;
            }

            //if we already found the target, so we don't need to go deeper into the tree more then $k levels
            if ($deep === $k) {
                break;
            }

            for($i = 0; $i < $levelSize; $i++) {
                $node = $queue->dequeue();
                
                if ($node->val === $target) {
                    $isTargetFound = true;
                }

                if (isset($node->left)) {
                    $graph[$node->val][] = $node->left->val;
                    $graph[$node->left->val] = [$node->val];
                    $queue[] = $node->left;
                }

                if (isset($node->right)) {
                    $graph[$node->val][] = $node->right->val;
                    $graph[$node->right->val] = [$node->val];
                    $queue[] = $node->right;
                }
            }
        }
        
        $queue = new SplQueue();
        $queue[] = $target->val;
        $seen = [];
        $deep = 0;

        //go through the graph
        while(!$queue->isEmpty()) {
            if ($deep === $k) {
                break;
            }
            $levelSize = $queue->count();

            for($i = 0; $i < $levelSize; $i++) {
                $node = $queue->dequeue();
                $seen[$node] = true;

                foreach($graph[$node] as $next) {
                    if (!isset($seen[$next])) {
                        $seen[$node] = true;
                        $queue[] = $next;
                    }
                }
            }

            $deep++;
        }

        $ans = [];
        while(!$queue->isEmpty()) {
            $ans[] = $queue->dequeue();
        }

        return $ans;
    }
}
```