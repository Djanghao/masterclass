# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/5896026/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/5896026/)

---

```scala []
object Solution {
    def maxDepth(root: Node): Int = {
        root match {
            case null => 0
            case _ => 1 + root.children.map(maxDepth).maxOption.getOrElse(0)
        }
    }
}
```