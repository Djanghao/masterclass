# [Kotlin] Finding Left Leaves Sum in Binary Tree

**Author:** teogor
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/5022044/](https://leetcode.com/problems/sum-of-left-leaves/solutions/5022044/)

---

# Intuition
We can traverse the binary tree using a breadth-first search (BFS) approach, keeping track of whether each node is a left child or not. When we encounter a left leaf node (a leaf node which is the left child of its parent), we add its value to the total sum.

# Approach
1. Initialize a queue to perform BFS.
2. Add the root node along with a flag indicating whether it's a left child to the queue.
3. Iterate over the queue until it's empty.
4. For each node popped from the queue:
   - If it's a left leaf node (both children are null), add its value to the total sum.
   - If it has a left child, add it to the queue with the flag indicating it's a left child.
   - If it has a right child, add it to the queue with the flag indicating it's not a left child.
5. Return the total sum.

# Complexity
- Time complexity: O(n), where n is the number of nodes in the binary tree. We visit each node once during BFS.

- Space complexity: O(n) in the worst case when the tree is completely unbalanced, and the queue holds all nodes.

# Code
```
import java.util.LinkedList
import java.util.Queue

class Solution {
    fun sumOfLeftLeaves(root: TreeNode?): Int {
        if (root == null) {
            return 0
        }
        
        val queue: Queue<Pair<TreeNode, Boolean>> = LinkedList()
        queue.offer(root to false)
        var totalSum = 0
        
        while (queue.isNotEmpty()) {
            val (node, isLeft) = queue.poll()
            
            if (isLeft && node.left == null && node.right == null) {
                totalSum += node.`val`
            }
            
            node.left?.let { queue.offer(it to true) }
            node.right?.let { queue.offer(it to false) }
        }
        
        return totalSum
    }
}

```