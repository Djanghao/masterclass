# BFS

**Author:** yunhao_liu
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/5748351/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/5748351/)

---

# Intuition
According to the definition of `cousin`, we need to check if they:
1) are at the same level
2) have different parent

BFS would be intuitive to solve this depth problem. We can note down the depth and parent during the iteration.

# Approach
Use a pair of integer to represent the target node, as its `depth` and `parent`. By default they are null. So if in one level we found only one and another is still null, we can early return false:
```
        var posX : Pair<Int, Int>? = null
        var posY : Pair<Int, Int>? = null   
```
Initilize the queue for BFS. When queueing the node, we attach its parent value to it as well.
```
        val queue = LinkedList<Pair<TreeNode, Int>>() // Pair(node, parent)
        queue.offer(root to 0)
```
Keep track of current depth too:
```
        var depth = 0
```
Start bfs while-loop, check current level's size, and start a for-loop to de-queue only this level's node:
```
        while (queue.isNotEmpty()) {
            val size = queue.size
            for (i in 0 until size) {

```
For each node, we check if it has target value, if yes, note down current `depth` and its `parent`
```
                val (node, parent) = queue.poll()!!
                if (node.`val` == x) {
                    posX = depth to parent
                } else if (node.`val` == y) {
                    posY = depth to parent
                } 
```
add its children to queue, together with current node's value, as `parent`
```
                node.left?.let { queue.offer(it to node.`val`) }
                node.right?.let { queue.offer(it to node.`val`) }
```
After for-loop, which means this level has finished, if we find only one target node, it means another one must be in another level. Then we can ealy return false.
```
            if (posX != null && posY == null || posX == null && posY != null) { // this level find only one
                return false
            } 
```
or, if we find both, we return true if they have same depth but different parent:
```
            else if (posX != null && posY != null) {
                return posX.first == posY.first && posX.second != posY.second // same level, different parent
            }
```
otherwise, not found target. Increase depth and continue.
```
            depth++
```
Since in condition it says both `x, y` exist, after the while-loop it already returns. 
Just return false as defense.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```kotlin []
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun isCousins(root: TreeNode?, x: Int, y: Int): Boolean {
        if (root == null) return false
        var posX : Pair<Int, Int>? = null
        var posY : Pair<Int, Int>? = null        
        val queue = LinkedList<Pair<TreeNode, Int>>() // node to parent
        queue.offer(root to 0)
        var depth = 0
        while (queue.isNotEmpty()) {
            val size = queue.size
            for (i in 0 until size) {
                val (node, parent) = queue.poll()!!
                if (node.`val` == x) {
                    posX = depth to parent
                } else if (node.`val` == y) {
                    posY = depth to parent
                } 
                node.left?.let { queue.offer(it to node.`val`) }
                node.right?.let { queue.offer(it to node.`val`) }
            }
            if (posX != null && posY == null || posX == null && posY != null) { // this level find only one
                return false
            } else if (posX != null && posY != null) {
                return posX.first == posY.first && posX.second != posY.second // same level, different parent
            }
            depth++
        }
        return false
    }
}
```