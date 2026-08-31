# Kotlin BFS

**Author:** kotlinc
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/3436538/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/3436538/)

---

```
class Solution {
  fun widthOfBinaryTree(root: TreeNode?): Int {
    if (root == null)
      return 0

    var res = 0L
    val q = ArrayDeque<Pair<TreeNode, Long>>()
    q.add(Pair(root, 0L))

    while (q.isNotEmpty()) {
      var min = Long.MAX_VALUE
      var max = Long.MIN_VALUE
      repeat(q.size) {
        val (node, id) = q.removeFirst()

        min = minOf(min, id)
        max = maxOf(max, id)

        if (node.left != null)
          q.add(Pair(node.left!!, id * 2L))

        if(node.right != null)
          q.add(Pair(node.right!!, id * 2L + 1))
      }
      res = maxOf(res, (max - min + 1))
    }
    return res.toInt()
  }
}
```