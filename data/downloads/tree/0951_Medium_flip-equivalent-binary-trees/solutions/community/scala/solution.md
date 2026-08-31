# 4 lines fast scala dfs recursion

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/3115334/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/3115334/)

---

# Intuition
Compare `Set`(s) of `(parent -> node)` pairs

```
object Solution {
  def flipEquiv(root1: TreeNode, root2: TreeNode): Boolean = {
    def impl(n: TreeNode,p: Int): List[(Int,Int)] = Option(n).map{_ =>
        List(p -> n.value) ++ impl(n.left,  n.value) ++ impl(n.right, n.value)
      }.getOrElse(List())
    impl(root1,-1).toSet == impl(root2,-1).toSet
  }
}
```