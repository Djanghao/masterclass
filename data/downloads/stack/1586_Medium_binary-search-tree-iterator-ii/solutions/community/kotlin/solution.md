# Kotlin calculate inorder

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/887959/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/887959/)

---

```
class BSTIterator(val root: TreeNode?) {
    
    val inOrder = mutableListOf<Int>()
    var ptr = -1
    
    init { calcInorder() }
    
    private fun calcInorder() {
        if (root == null) return
        val stack: Stack<TreeNode> = Stack()
        
        fun pushAllLeft(root: TreeNode?) {
            var node: TreeNode? = root
            while (node != null) {
                stack.push(node)
                node = node.left
            }
        }
        pushAllLeft(root)
        while (stack.isNotEmpty()) {
            val cur = stack.pop()
            inOrder.add(cur.`val`)
            pushAllLeft(cur.right)
        }
    }

    fun hasNext(): Boolean {
        return inOrder.isNotEmpty() && ptr < inOrder.size - 1    
    }

    fun next(): Int {
        return inOrder[++ptr]
    }

    fun hasPrev(): Boolean {
        return inOrder.isNotEmpty() && ptr - 1 >= 0
    }

    fun prev(): Int {
        return inOrder[--ptr]
    }

}
```