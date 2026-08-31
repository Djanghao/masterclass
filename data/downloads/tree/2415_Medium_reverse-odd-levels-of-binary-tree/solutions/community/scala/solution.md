# [scala] - DFS & BFS, both TLE

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/2592561/](https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/solutions/2592561/)

---

BFS
```scala
def reverseOddLevels(root: TreeNode): TreeNode = {
  go(Array(root), reverse = false)
  root
}

def go(level: Array[TreeNode], reverse: Boolean): Unit = {
  if(reverse)
    (0 until level.length / 2).foreach { i =>
      val rightI = level.length - 1 - i
      val right = level(rightI).value
      level(rightI).value = level(i).value
      level(i).value = right
    }

  if(level(0).left != null) {
    val next = new Array[TreeNode](level.length * 2)
    next.indices.foreach { i =>
      if(i % 2 == 0) next(i) = level(i / 2).left
      else next(i) = level(i / 2).right
    }
    go(next, !reverse)
  }
}
```
DFS
```scala
def reverseOddLevels(root: TreeNode): TreeNode = {
  go(root.left, root.right, reverse = true)
  root
}

def go(n1: TreeNode, n2: TreeNode, reverse: Boolean): Unit =
  if (n1 != null && n2 != null) {
    if (reverse){
      val value = n1.value
      n1.value = n2.value
      n2.value = value
    }

    go(n1.left, n2.right, !reverse)
    go(n1.right, n2.left, !reverse)
  }
```

According to other answers Java versions of these solutions fit the time & memory requirements.