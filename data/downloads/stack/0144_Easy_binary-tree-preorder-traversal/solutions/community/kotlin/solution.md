# Kotlin: Iterative and Recursive

**Author:** jovannypcg
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/1588702/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/1588702/)

---

```
fun recursive(root: TreeNode?, traversal: MutableList<Int>): Unit {
    val current = root?.`val` ?: return

    traversal.add(current)
    recursive(root.left, traversal)
    recursive(root.right, traversal)
}

fun iterative(root: TreeNode?): List<Int> {
    val traversal = mutableListOf<Int>()
    val stack = ArrayDeque<TreeNode>()
        
    root?.let { stack.addFirst(it) } ?: return traversal
        
    while (stack.isNotEmpty()) {
        val current: TreeNode = stack.removeFirst()
            
        traversal.add(current.`val`)
            
        current.right?.let { stack.addFirst(it) }
        current.left?.let { stack.addFirst(it) }
    }
        
    return traversal
}
```