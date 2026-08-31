# scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5031540/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5031540/)

---

# Code
```
object Solution {
    def addOneRow(root: TreeNode, `val`: Int, depth: Int): TreeNode = {

        @annotation.tailrec
        def loop(row: List[TreeNode], level: Int = 1): Unit = 
            if(level + 1 == depth) {
                row.foreach(node => {
                    node.left = new TreeNode(`val`, node.left)
                    node.right = new TreeNode(`val`,null, node.right)
                })
            }
            else if(row.isEmpty) ()
            else loop(row.flatMap(node => List(node.left, node.right).filter(_ != null)), level + 1)

        if(depth == 1) new TreeNode(`val`, root)
        else {
            loop(List(root))
            root
        }
    }
}
```