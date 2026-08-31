# Beats 100% of solutions and simpler to understand with PriorityQueue and nested map data structure

**Author:** aaavs118
**Votes:** 1
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/5914296/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/5914296/)

---



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
    fun verticalTraversal(root: TreeNode?): List<List<Int>> {
        if (root == null) return listOf()
        var map = mutableMapOf<Int, MutableMap<Int, PriorityQueue<Int>>>()
        var minC = 0
        var maxR = 0
        var q = LinkedList<Triple<TreeNode?, Int, Int>>()
        q.offer(Triple(root, 0, 0))
        while (q.isNotEmpty()) {
            val (node, c, r) = q.pop()
            minC = min(minC, c)
            maxR = max(maxR, r)
            map.getOrPut(c) { mutableMapOf() }
                .getOrPut(r) { PriorityQueue() }
                .offer(node?.`val`) 

                      // Add children if they are not null
            node?.left?.let{ q.add(Triple(it, c -1, r +1, ))}
            node?.right?.let{ q.add(Triple(it, c +1, r +1 ))}

        }

        var res = mutableListOf<List<Int>>()
        for (c in minC..maxR) {
            if (map.contains(c)) {
                var rowMap = map.getOrDefault(c, mutableMapOf<Int, PriorityQueue<Int>>())
                var list = mutableListOf<Int>()
                for ((key, rowValue) in rowMap) {
                    repeat (rowValue.size) {
                        list.add(rowValue.poll())
                    }
                }
                res.add(list)
            }
        }
        return res
        
    }
}
```