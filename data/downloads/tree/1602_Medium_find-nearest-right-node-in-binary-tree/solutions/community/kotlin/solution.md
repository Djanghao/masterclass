# The classic BFS

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/981872/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/981872/)

---

```
    fun findNearestRightNode(root: TreeNode?, u: TreeNode?): TreeNode? {
        if (root == null || u == null) return null
        val queue: Queue<TreeNode> = LinkedList()
        queue.add(root)
        while (queue.isNotEmpty()) {
            var size = queue.size
            var seen = false
            while (size-- > 0) {
                val node = queue.poll()
                if (seen) return node
                if (node == u) seen = true
                node.left?.let { queue.add(it) }
                node.right?.let { queue.add(it) }
            }
            if (seen) return null
        }
        return null
    }
```