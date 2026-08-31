# scala dfs recursion with mutable set

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/3438657/](https://leetcode.com/problems/univalued-binary-tree/solutions/3438657/)

---

```
object Solution {
  def isUnivalTree(root: TreeNode): Boolean = {
    val set = collection.mutable.Set.empty[Int]
    def impl(root: TreeNode): Unit =
      if(root != null) {
        set += root.value
        impl(root.left)
        impl(root.right)
      }
    impl(root)
    set.size == 1
  }
}
```