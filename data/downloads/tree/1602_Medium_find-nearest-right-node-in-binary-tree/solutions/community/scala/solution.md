# Scala, not FP

**Author:** FelAl
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/3206157/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/3206157/)

---


```
object Solution {
    import scala.util.Try
    def findNearestRightNode(root: TreeNode, u: TreeNode): TreeNode = {
        var target: TreeNode = null
        def trBFS(rl: List[TreeNode]): Unit = {
            if(rl.isEmpty) return
            val newList = rl.filter(_ != null).flatMap(el => List(el.left, el.right)).filter(_ != null)
            val search = newList.map(_.value).indexOf(u.value)
            if(search != -1) 
                target = Try(newList(search + 1)).getOrElse(null)
            trBFS(newList)

        }

        trBFS(List(root))
        target
    }
}
```