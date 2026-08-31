# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/5900329/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/5900329/)

---

```scala []
class Codec {
    // Encodes an n-ary tree to a binary tree.
    def encode(root: Node): TreeNode = {
        root match {
            case null => null
            case _ => 
                val node = new TreeNode(root.value)
                node.left = root.children match {
                    case Nil => null
                    case head :: tail =>
                        val childsHead = encode(head)
                        tail.foldLeft[TreeNode](childsHead){case(cum, child) => 
                            val newChild = encode(child)
                            cum.right = newChild
                            newChild
                        }
                        childsHead
                }
                node
        }
    }
    
    // Decodes your binary tree to an n-ary tree.
    def decode(root: TreeNode): Node = {
        def chain(node: TreeNode, parent: Option[Node]): Node = {
            node match {
                case null => null
                case _ =>
                    val newNode = new Node(node.value)
                    parent.foreach{p => 
                        p.children = p.children :+ newNode
                        chain(node.right, parent)
                    }
                    node.left match {
                        case null => ()
                        case child => chain(child, Some(newNode))
                    }
                    newNode
            }
        }
        Option(root).fold(null){n => chain(n, None)}

    }
}
```