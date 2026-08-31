# [Kotlin] Simple Recursive Solution DFS

**Author:** sshamillov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/4272180/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/4272180/)

---

# Code
```
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var children: List<Node?> = listOf()
 * }
 */

class Solution {
    fun maxDepth(root: Node?): Int {
        root ?: return 0

        var maxDepth = 0

        fun dfs(root: Node?, depth: Int) {
            root ?: return

            maxDepth = maxOf(maxDepth, depth + 1)

            root.children.forEach {
                dfs(it, depth + 1)
            }
        }

        dfs(root, 0)

        return maxDepth
    }
}
```