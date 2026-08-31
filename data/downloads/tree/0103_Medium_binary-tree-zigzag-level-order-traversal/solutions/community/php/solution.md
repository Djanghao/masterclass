# Beats 96.99% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/5400902/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/5400902/)

---

# Approach
Breadth-First Search (BFS) approach.

1. Initialize an empty result list to store the traversal.
2. Use a queue to perform a level order traversal of the binary tree.
3. Keep track of the level to determine if it needs to be reversed for zigzag order.
- Append the nodes' values at each level to the result list.
- Reverse the order of nodes' values for every other level to achieve the zigzag pattern.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of nodes in the binary tree. This is because we visit each node once when performing a level order traversal.

- Space complexity:
$$O(n)$$ due to the queue data structure used for the level order traversal. The queue can store all the nodes at one level of the binary tree. At the lowest level of a complete binary tree, there can be n/2 nodes.

# Code
``` python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        result = []
        queue = deque([root])
        level = 0

        while queue:
            level_vals = []
            level_size = len(queue)

            # Process all nodes at the current level
            for _ in range(level_size):
                node = queue.popleft()
                level_vals.append(node.val)

                # Add the children of the current node to the queue
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            # Reverse the level values if the level is odd
            if level % 2 != 0:
                level_vals = level_vals[::-1]

            # Add the level values to the result list
            result.append(level_vals)
            level += 1

        return result

```
``` javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    let result = [];
    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let levelVals = [];
        let levelSize = queue.length;

        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelVals.push(node.val);

            // Add the children of the current node to the queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        // Reverse the level values if the level is odd
        if (level % 2 !== 0) {
            levelVals.reverse();
        }

        // Add the level values to the result list
        result.push(levelVals);
        level++;
    }

    return result;

};
```
``` php []
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
    function zigzagLevelOrder($root) {
        if (!$root) {
            return [];
        }

        $result = [];
        $queue = [$root];
        $level = 0;

        while (count($queue) > 0) {
            $levelVals = [];
            $levelSize = count($queue);

            // Process all nodes at the current level
            for ($i = 0; $i < $levelSize; $i++) {
                $node = array_shift($queue);
                $levelVals[] = $node->val;

                // Add the children of the current node to the queue
                if ($node->left) {
                    $queue[] = $node->left;
                }
                if ($node->right) {
                    $queue[] = $node->right;
                }
            }

            // Reverse the level values if the level is odd
            if ($level % 2 !== 0) {
                $levelVals = array_reverse($levelVals);
            }

            // Add the level values to the result list
            $result[] = $levelVals;
            $level++;
        }

        return $result;
    }
}
```