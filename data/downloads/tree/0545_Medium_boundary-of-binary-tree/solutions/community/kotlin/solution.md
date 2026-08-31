# Kotlin - Left, leaves and right

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/723518/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/723518/)

---

Left bounds -> Iteratively.
Leaves -> Iteratively, using stack -- Need to reverse result as we need it from left to right order.
Right bounds -> Iteratively -- Need to reverse result as we need it from bottom to top order.

```
fun boundaryOfBinaryTree(root: TreeNode?): List<Int> {
    val result = mutableListOf<Int>()
    if (root == null) return result
    if (root.left == null && root.right == null) return result.apply { add(root.`val`) }
    result.addAll(leftBounds(root))
    result.addAll(leaves(root))
    result.addAll(rightBounds(root))
    return result
}

private fun leftBounds(root: TreeNode?): List<Int> {
    val result = arrayListOf<Int>()
    if (root == null) return result
    if (root.left == null) return result.apply { add(root.`val`) }kot
    var node = root
    while (node?.left != null || node?.right != null) {
        result.add(node.`val`)
        if (node.left != null) node = node.left
        else if (node.right != null) node = node.right
    }
    return result
}

private fun leaves(root: TreeNode?): List<Int> {
    val result = arrayListOf<Int>()
    if (root == null) return result
    val stack = java.util.Stack<TreeNode>()
    stack.push(root)
    while (stack.isNotEmpty()) {
        val current = stack.pop()
        if (current.left != null) stack.push(current.left)
        if (current.right != null) stack.push(current.right)
        if (current.left == null && current.right == null) result.add(current.`val`)
    }
    return result.reversed()
}

private fun rightBounds(root: TreeNode?): List<Int> {
    val result = arrayListOf<Int>()
    if (root == null) return result
    var node = root.right
    while (node?.right != null || node?.left != null) {
        result.add(node.`val`)
        if (node.right != null) node = node.right
        else if (node.left != null) node = node.left
    }
    return result.reversed()
}
```