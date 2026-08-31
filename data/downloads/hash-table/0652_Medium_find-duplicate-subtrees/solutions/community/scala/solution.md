# Idiomatic solution in scala

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/4329294/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/4329294/)

---

```
import scala.collection.mutable

final case class NodeId(id: Int) extends AnyVal
object NodeId { def empty: NodeId = NodeId(0) }

final case class Triplet(left: NodeId, nodeVal: Int, right: NodeId)

object Solution {
    def findDuplicateSubtrees(root: TreeNode): List[TreeNode] = {
        val duplicatedNodes = mutable.Queue.empty[TreeNode]
        val tripletToId = mutable.Map.empty[Triplet, NodeId]
        val idCount = mutable.Map.empty[NodeId, Int]
        def seekClones(node: TreeNode): NodeId = {
            if(node == null) return NodeId.empty
            val triplet = Triplet(seekClones(node.left), node.value, seekClones(node.right))
            val newNodeId = NodeId(tripletToId.getOrElse(triplet, NodeId(tripletToId.size + 1)).id)
            tripletToId += (triplet -> newNodeId)
            val thisNodeCount = idCount.getOrElse(newNodeId, 0) + 1
            idCount += (newNodeId -> thisNodeCount)
            if(thisNodeCount == 2) duplicatedNodes += node
            newNodeId
        }
        seekClones(root)
        duplicatedNodes.toList
    }
}
```