# Scala TailRec

**Author:** sobik
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/1829411/](https://leetcode.com/problems/range-sum-of-bst/solutions/1829411/)

---

```
def rangeSumBST(root: TreeNode, low: Int, high: Int): Int = {
        import scala.util.control.TailCalls.{TailRec, done}
        def dfs(tn: TreeNode) : TailRec[Int] = tn match {
            case null => done(0)
            case n =>
                val t = if (low <= n.value && n.value <= high) n.value else 0
                for {
                    l <- dfs(n.left)
                    r <- dfs(n.right)
                } yield l + r + t
        }
        dfs(root).result
    }
```