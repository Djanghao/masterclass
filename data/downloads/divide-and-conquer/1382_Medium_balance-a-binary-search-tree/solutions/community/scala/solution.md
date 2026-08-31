# 7 lines scala flatten+dfs

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/3205874/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/3205874/)

---

# Code
```
object Solution {
  def balanceBST(root: TreeNode): TreeNode = {
    def flatten(root: TreeNode): Seq[Int] = 
      if(root == null) List() else flatten(root.left) ++ ((root.value) +: flatten(root.right))
    def impl(seq: Seq[Int]): TreeNode = {
      lazy val (d,t) = seq.splitAt((seq.size-1)/2)
      if(seq.isEmpty) null else new TreeNode(t.head, impl(d), impl(t.tail))
    }
    impl(flatten(root))
  }
}
```