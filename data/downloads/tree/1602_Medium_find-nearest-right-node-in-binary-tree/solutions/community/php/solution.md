# PHP | Explained BFS with Level Marker

**Author:** gmalykh2000
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/4987283/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/4987283/)

---

# Approach
1. **Level-Order Traversal**: Utilize a queue to perform a level-order traversal (BFS) of the binary tree. Each level is processed in order, ensuring the correct sequence of nodes.
2. **Marker for Level End**: Insert a null marker after each level in the queue. This marker helps identify the end of a level, essential for knowing when to wrap back or conclude there's no nearest right node.
3. **Finding the Target Node**: While dequeuing, if the current node is the target node (u), the following conditions are checked:
    - If the queue is empty or the next item is a null marker, this indicates that u is the rightmost node on its level, so return null.
    - Otherwise, the next node in the queue is the nearest right node.
4. **Continue Traversal**: If the target node is not found, continue adding the current node's children to the queue, ensuring to respect the left to right order.

# Complexity
- Time complexity: **O(n)**
Every node in the tree is visited exactly once, making the time complexity linear in relation to the number of nodes in the tree.

- Space complexity: **O(w)**
The maximum space taken by the queue is proportional to the maximum *width of the tree, w*. In the worst-case scenario (a perfectly balanced tree), this would be the number of nodes at the last level, or roughly n/2, making the space complexity **O(n)** in such cases. However, for an average case, especially in sparse trees, the space complexity remains dependent on the widest level, thus **O(w)**.

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
     * @param TreeNode $u
     * @return TreeNode
     */
    function findNearestRightNode($root, $u) {
        $queue = [];
        array_push($queue, $root, null);

        while (count($queue)) {
            $node = array_shift($queue);

            if ($node === $u) {
                return !count($queue) || $queue[0] === null ? null : $queue[0];
            }

            if ($node === null && !empty($queue)) {
                array_push($queue, null);
            } 
               
            if ($node->left !== null) array_push($queue, $node->left);
            if ($node->right !== null) array_push($queue, $node->right); 
        }

        return null; 
    }
}

```