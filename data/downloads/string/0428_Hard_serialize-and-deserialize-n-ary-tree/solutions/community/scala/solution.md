# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/5916333/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/5916333/)

---

```scala []
import scala.collection.immutable.{Queue => IQueue}

class Codec {
    // Encodes a tree to a single string.
    def serialize(root: Node): String = {
        def next(node: Node): List[String] = {
            node match {
                case null => List.empty
                case _ =>
                    List(node.value.toString, node.children.size.toString) ::: node.children.flatMap(next)
            }
        }
        next(root).mkString(",")
    }
    
    // Decodes your encoded data to tree.
    def deserialize(data: String): Node = {
        data match {
            case "" => null
            case _ =>
                val encoded = data.split(',')
                def assemble(index: Int): (Node, Int) = {
                    val node = new Node(encoded(index).toInt)
                    val (children, nextIdx) = encoded(index + 1).toInt match {
                        case 0 => (IQueue.empty, index + 2)
                        case children =>
                            (1 to children)
                            .foldLeft[(IQueue[Node], Int)]((IQueue.empty, index + 2)){case((cum, idx), _) =>
                                val (childNode, currIndex) = assemble(idx)
                                (cum :+ childNode, currIndex)
                            }
                    }
                    node.children = children.toList
                    (node, nextIdx)
                }
                val (head, _) = assemble(0)
                head
        }
    }

}
```