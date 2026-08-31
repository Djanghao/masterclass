# BFS Solution

**Author:** drgavrikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5033920/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5033920/)

---

# Approach
If $depth$ = 1, then create a new root of the tree and make the current node its left child. This is a special case.
Otherwise, we find all the nodes in the tree at level $depth - 1$ and add their left and right children with straightforward actions.

---

\u0415\u0441\u043B\u0438 $depth$ = 1 \u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u0435\u043D\u044C \u0434\u0435\u0440\u0435\u0432\u0430 \u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0434\u0435\u043B\u0430\u0435\u043C \u0435\u0433\u043E \u043B\u0435\u0432\u044B\u043C \u0441\u044B\u043D\u043E\u043C. \u042D\u0442\u043E \u0447\u0430\u0441\u0442\u043D\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439.
\u0418\u043D\u0430\u0447\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u043C \u0432\u0441\u0435 \u0432\u0435\u0440\u0448\u0438\u043D\u044B \u0434\u0435\u0440\u0435\u0432\u0430 \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 $depth - 1$ \u0438 \u043D\u0435\u0441\u043B\u043E\u0436\u043D\u044B\u043C\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0438\u043C \u043B\u0435\u0432\u043E\u0433\u043E \u0438 \u043F\u0440\u0430\u0432\u043E\u0433\u043E \u0441\u044B\u043D\u0430.

# Complexity
- Time complexity: $O(V + E)$

- Space complexity: $O(V)$

# Code
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
class Solution {

    fun addOneRow(root: TreeNode?, `val`: Int, depth: Int): TreeNode? {
        if (depth == 1) {
            val newNode = TreeNode(`val`)
            newNode.left = root
            return newNode
        }

        val queue: Queue<TreeNode> = LinkedList()
        queue.add(root)
        repeat( depth - 2) {
            val nextNodes = mutableListOf<TreeNode>()
            while (queue.isNotEmpty()) {
                val node = queue.poll()
                if (node.left != null) nextNodes.add(node.left!!)
                if (node.right != null) nextNodes.add(node.right!!)
            }
            queue.addAll(nextNodes)
        }
        queue.forEach { node ->
            val newNodeLeft = TreeNode(`val`)
            newNodeLeft.left = node.left
            node.left = newNodeLeft
             
            val newNodeRight = TreeNode(`val`)
            newNodeRight.right = node.right
            node.right = newNodeRight
        }
        return root
    }
}
```