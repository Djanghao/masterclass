# Kotlin | BFS + HashSet of values

**Author:** IrregularOne
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5501347/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5501347/)

---

# Kotlin
```
class FindElements(root: TreeNode) {
    private val values = hashSetOf<Int>()

    init {
        val queue = LinkedList<TreeNode>()
        root.`val` = 0
        queue.add(root)


        while (queue.isNotEmpty()) {
            val node = queue.pop()

            values.add(node.`val`)

            node.left?.apply {
                `val` = 2 * node.`val` + 1
                queue.add(this)
            }
            node.right?.apply {
                `val` = 2 * node.`val` + 2
                queue.add(this)
            }
        }
    }

    fun find(target: Int): Boolean {
        return values.contains(target)
    }
}
```