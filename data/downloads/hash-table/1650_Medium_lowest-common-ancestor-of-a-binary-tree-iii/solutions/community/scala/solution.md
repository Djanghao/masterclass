# Scala recursive 7 liner - beats 100%

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/5227187/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/5227187/)

---

# Code
```
object Solution {
    import scala.annotation.tailrec

    def lowestCommonAncestor(p: Node, q: Node): Node = {

        def depth(x: Node): Int = if x == null then 0 else 1 + depth(x.parent)
        
        @tailrec
        def solve(a: Node, b: Node, depthA: Int, depthB: Int): Node =
            if a == b then a
            else if depthA > depthB then solve(a.parent, b, depthA - 1, depthB)
            else if depthB > depthA then solve(a, b.parent, depthA, depthB - 1)
            else solve(a.parent, b.parent, depthA - 1, depthB - 1)

        solve(p, q, depth(p), depth(q))
    }
}

```