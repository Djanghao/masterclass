# Simpliest DFS Kotlin solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/5528284/](https://leetcode.com/problems/clone-n-ary-tree/solutions/5528284/)

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
    fun cloneTree(root: Node?): Node? {
        fun dfs(from: Node?): Node? = from?.let { Node(it.`val`).apply { children = it.children.map { dfs(it) } } }
        return dfs(root)
    }
}
```