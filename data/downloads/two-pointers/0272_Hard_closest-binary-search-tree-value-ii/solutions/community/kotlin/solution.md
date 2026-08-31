# Kotlin Sliding window O(n)

**Author:** james4388
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/5835010/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/5835010/)

---

Traverse the binary tree inorder will result in sorted number. Using a sliding window (array deque) to store this kWindow.
When full: evic the element that have larger abs value (from either ends)
```
class Solution {
    fun closestKValues(root: TreeNode?, target: Double, k: Int): List<Int> {
        val kWindow = ArrayDeque<Int>()
        
        fun walker(node: TreeNode?) {
            if (node == null) {
                return
            }
            walker(node.left)
            
            kWindow.add(node.`val`)
            if (kWindow.size > k) {
                if (Math.abs(kWindow.first() - target) > Math.abs(kWindow.last() - target)) {
                    kWindow.removeFirst()
                } else {
                    kWindow.removeLast()
                }
            }
            
            walker(node.right)
        }
        
        walker(root)
        return kWindow.toList()
    }
}
```