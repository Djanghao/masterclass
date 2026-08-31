# Easy recursive in order traversal without external head/tail parameters

**Author:** black_mamba34
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/1062699/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/1062699/)

---

```kotlin
internal data class Result(val head:Node? =null,val tail:Node?= null)
class Solution {
    
    private fun flatten(root:Node?): Result{
        if(root == null) return Result()
        
        val leftResult = flatten(root.left)

        val rightResult = flatten(root.right)

        root.right = rightResult.head
        root.left = leftResult.tail
        
        rightResult.head?.left = root
        leftResult.tail?.right = root

        return Result(leftResult.head?:root, rightResult.tail?:root)
    }
    
    fun treeToDoublyList(root:Node?): Node? {
        return flatten(root).head
    }
}
```