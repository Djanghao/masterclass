# Kotlin - recursive tree walk, reuse nodes

**Author:** tucux
**Votes:** 4
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/1957363/](https://leetcode.com/problems/increasing-order-search-tree/solutions/1957363/)

---

Starting from the largest element, reconnect the nodes as requested.
```
class Solution {
    fun increasingBST(root: TreeNode?): TreeNode? {
        var p: TreeNode? = null
        
        fun walk(node: TreeNode?) {
            node?.run {
                walk(right)
                right = p
                p = this
                walk(left)
                left = null
            }
        }
        
        walk(root)
        return p       
    }
}
```