# BFS solution with queue

**Author:** yangnirinny
**Votes:** 0
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/4249712/](https://leetcode.com/problems/deepest-leaves-sum/solutions/4249712/)

---

# Code
```
import scala.collection.mutable
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */

// time complexity: O(N)
// space complexity: O(N) for queue

object Solution {
    def deepestLeavesSum(root: TreeNode): Int = {
        val queue = new mutable.Queue[TreeNode]()
        var sumDeepest = 0
        queue.enqueue(root)

        while(queue.nonEmpty) {
            val levelSize = queue.size
            var levelSum = 0

            for(_ <- 0 until levelSize) {
                val current = queue.dequeue()
                levelSum += current.value
                
                if(current.left != null) {
                    queue.enqueue(current.left)
                }
                if(current.right != null) {
                    queue.enqueue(current.right)
                }
            } 
                    
            sumDeepest = levelSum
        }
        sumDeepest
    }
}
```