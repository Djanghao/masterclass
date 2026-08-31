# [Kotlin] Short and Clean Recursive Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413379/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/1413379/)

---

```
import kotlin.math.max

class Solution {
    fun maxProduct(root: TreeNode?): Int {
        val subSums = mutableSetOf<Long>()
        fun getSum(node: TreeNode): Long {
            return node.`val` +
                    (node.left?.let { getSum(it).also { subSums.add(it) } } ?: 0) +
                    (node.right?.let { getSum(it).also { subSums.add(it) } } ?: 0)
        }
        val totalSum = getSum(root ?: return 0)
        return (subSums.fold(0L) { acc, int -> max(acc, int * (totalSum - int)) } % 1000000007).toInt()
    }
}
```