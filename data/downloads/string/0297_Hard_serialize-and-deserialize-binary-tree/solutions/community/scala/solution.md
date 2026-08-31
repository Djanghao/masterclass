# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/5812026/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/5812026/)

---

```scala []
import java.lang.StringBuilder
import scala.collection.mutable

class Codec {
    def serialize(root: TreeNode): String = {
        val pre = new StringBuilder()
        def preorder(node: TreeNode): Unit = {
            node match {
                case null => pre.append(",")
                case _ =>
                    pre.append(node.value.toString).append(',')
                    preorder(node.left)
                    preorder(node.right)
            }
        }
        preorder(root)
        pre.toString
    }
    
    def deserialize(data: String): TreeNode = {
        val nodes = data.split(',').to(mutable.Queue)
        def preorder: TreeNode = {
            nodes.headOption match {
                case None => null
                case Some("") => 
                    nodes.dequeue
                    null
                case Some(n) =>
                    val newNode = new TreeNode(Integer.parseInt(n))
                    nodes.dequeue
                    newNode.left = preorder
                    newNode.right = preorder
                    newNode
            }
        }
        preorder
    }
}
```