# Kotlin - 564 ms - Use breadth-first search to find the path to both elements and remove common nodes

**Author:** ed-karabinus
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1209500/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/1209500/)

---

```
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
data class NodePath(val node: TreeNode, val path: List<Int>)
class Solution {
    fun findDistance(root: TreeNode, p: Int, q: Int): Int {
        if (p == q) return 0
        val pPath = findPathToNode(root, p)
        val qPath = findPathToNode(root, q)
        var commonLength: Int? = null
        var hasContainmentRelation = true
        val minLength = Math.min(pPath.size, qPath.size)
        for (index in 0 until minLength) {
            if (pPath.get(index) != qPath.get(index)) {
                commonLength = index
                hasContainmentRelation = false
                break
            }   
        }
        if (hasContainmentRelation) commonLength = minLength
        return pPath.size + qPath.size - 2 * (commonLength ?: 0)
    }
    
    private fun findPathToNode(root: TreeNode, nodeVal: Int): List<Int> {
        val nodeDeque = ArrayDeque<NodePath>()
        var pathToNode: List<Int>? = null
        nodeDeque.offerLast(NodePath(root, listOf<Int>()))
        while (nodeDeque.peekFirst() != null) {
            val polledNodePath = nodeDeque.pollFirst()
            val (polledNode, polledPath) = polledNodePath
            if (polledNode.`val` == nodeVal) {
                val mutablePath = polledPath.toMutableList()
                mutablePath.add(polledNode.`val`)
                pathToNode = mutablePath
                break
            }
            addNodePathToDequeIfNotNull(polledNode.left, polledNodePath, nodeDeque)
            addNodePathToDequeIfNotNull(polledNode.right, polledNodePath, nodeDeque)
        }
        return pathToNode ?: throw Exception("Couldn't find nodeVal $nodeVal in root $root")
    }
    
    private fun addNodePathToDequeIfNotNull(
        nodeToAdd: TreeNode?, 
        nodePath: NodePath,
        deque: Deque<NodePath>
    ) {
        if (nodeToAdd != null) {
            val newPath = nodePath.path.toMutableList()
            newPath.add(nodePath.node.`val`)
            deque.offer(NodePath(nodeToAdd, newPath))
        }
    }
}
```