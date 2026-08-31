# [Kotlin] solution for Print Binary Tree

**Author:** darvishiyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/1606280/](https://leetcode.com/problems/print-binary-tree/solutions/1606280/)

---

```
fun printTree(root: TreeNode?): List<List<String>> {
    val height = getHeight(root)
    val length = getLength(height)
    val result = Array(height) { Array(length) { "" } }

    fun addValue(item: TreeNode?, left: Int, right: Int, level: Int) {
        if (item == null) return
        val target = left + ((right - left) / 2)
        result[level][target] = item.`val`.toString()
        addValue(item.left, left, target - 1, level + 1)
        addValue(item.right, target + 1, right, level + 1)
    }

    addValue(root, 0, length, 0)

    return result.map { it.toList() }.toList()
}

fun getHeight(root: TreeNode?): Int {
    if (root == null) return 0
    val left = getHeight(root.left)
    val right = getHeight(root.right)
    return Math.max(left, right) + 1
}

fun getLength(height: Int): Int {
    return if (height == 1) 1
    else (getLength(height - 1) * 2) + 1
}
```