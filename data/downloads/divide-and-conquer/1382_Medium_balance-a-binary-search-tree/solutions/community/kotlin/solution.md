# Kotlin easy to follow solution O(n)

**Author:** bitshark
**Votes:** 3
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/2428688/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/2428688/)

---

```
class Solution {
    fun balanceBST(root: TreeNode?): TreeNode? {
        val orderedList = mutableListOf<Int>()
        convert(root, orderedList)        
        
        return build(orderedList)
    }
    
    private fun convert(root: TreeNode?, orderedList: MutableList<Int>) {
        if (root == null) return
        convert(root.left, orderedList)
        orderedList.add(root.`val`)
        convert(root.right, orderedList)
    }
    
    private fun build(orderedList: List<Int>): TreeNode? {
        if (orderedList.size == 0) return null
        val mid = orderedList.size / 2
        
        val node = TreeNode(orderedList.get(mid))
        node.left = build(orderedList.subList(0, mid))
        node.right = build(orderedList.subList(mid + 1, orderedList.size))
        return node
    }
}
```