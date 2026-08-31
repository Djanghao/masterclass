# [Kotlin] Short Clean Recursive DFS Solution

**Author:** catcatcute
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/1409209/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/1409209/)

---

```
import kotlin.math.max

class Solution {
    fun goodNodes(root: TreeNode?, max: Int = Int.MIN_VALUE): Int {
        root ?: return 0
        var res = if (root.`val` >= max) 1 else 0
        res += goodNodes(root.left, max(root.`val`, max))
        res += goodNodes(root.right, max(root.`val`, max))
        return res
    }
}
```