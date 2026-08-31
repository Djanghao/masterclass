# Trivial 2 liner in Scala

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/5185795/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/5185795/)

---

# Code
```
object Solution {
    def findLeaves(root: TreeNode): List[List[Int]] =
        if root == null then Nil
        else findLeaves(root.left).zipAll(findLeaves(root.right), Nil, Nil).map(_ ++ _) :+ List(root.value)
}
```