# Scala graph solution

**Author:** maxmtmn
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-file-system/solutions/2832007/](https://leetcode.com/problems/design-file-system/solutions/2832007/)

---

```
import scala.collection.mutable
import scala.util.chaining._

class FileSystem() {
    
    val Separator = "/"
    val root = Node(name = Separator, value = 0)
    
    private def getPathComponents(path: String) = {
        path.stripPrefix(Separator).split(Separator)
    }

    def createPath(path: String, value: Int): Boolean = {
        getPathComponents(path).pipe {
            pathComponents =>
                pathComponents.init.foldLeft(root) {
                    case (node, folder) =>
                        node.getFileByName(folder) match {
                            case None => 
                                return false
                            case Some(n) =>
                                n
                        }
                }.addNode(Node(name = pathComponents.last, value = value))
        }
    }

    def get(path: String): Int = {
        getPathComponents(path).foldLeft(root) {
            case (node, folder) =>
                node.getFileByName(folder) match {
                    case None => 
                        return -1
                    case Some(n) =>
                        n
                }
        }.value
    }

}

case class Node(name: String, value: Int, children: mutable.Map[String, Node] = mutable.Map.empty[String, Node]) {
    def getFileByName(name: String): Option[Node] = {
        children.get(name)
    }
    def addNode(node: Node): Boolean = {
        children.get(node.name) match {
            case None => 
                children += (node.name -> node)
                true
            case Some(n) => 
                false
        }
    }
}
```