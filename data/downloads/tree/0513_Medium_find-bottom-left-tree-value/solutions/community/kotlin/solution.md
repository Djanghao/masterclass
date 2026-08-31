# .::Kotlin::. BFS, Right -> Left

**Author:** dzmtr
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4794040/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4794040/)

---

In BFS, add right node before the left. So at last level, last element is left most element.

```
class Solution {
    fun findBottomLeftValue(root: TreeNode?): Int {
        if (root == null) return -1
        
        val q = LinkedList<TreeNode>()
        q += root

        var res: TreeNode = root
        while (q.isNotEmpty()) {
            res = q.poll()
            res.right?.let { q += it }
            res.left?.let { q += it }
        }

        return res.`val`
    }
}
```