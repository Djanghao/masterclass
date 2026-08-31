# Kotlin BFS

**Author:** krnets
**Votes:** 2
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516449/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516449/)

---

*O(n) time* | *O(b^d) space* - where *b* is branching factor and *d* is depth
```kotlin
class Solution {
    fun averageOfLevels(root: TreeNode?): DoubleArray {
        val result = mutableListOf<Double>()
        val queue = LinkedList<TreeNode>()
        queue.offer(root)

        while (queue.isNotEmpty()) {
            val levelList = mutableListOf<Int>()

            repeat(queue.size) {
                val node = queue.poll()
                levelList.add(node.`val`)

                if (node.left != null) queue.offer(node.left)
                if (node.right != null) queue.offer(node.right)
            }
            val average = levelList.stream().mapToDouble { it.toDouble() }.average()

            result.add(average.orElse(0.0))
        }

        return result.toDoubleArray()
    }
}
```