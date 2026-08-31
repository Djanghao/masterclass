# Scala | BFS Queue Solution | Easy to understand

**Author:** pasverm
**Votes:** 1
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2546424/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2546424/)

---

```scala
import scala.collection.mutable.Queue

object Solution {
  def connect(root: Node): Node = {
    if (root == null) return null
    
	var queue = Queue[Node](root)
    
    while (queue.length > 0) {
	
	  // dequeue all nodes of current level
      val numNodesLevel = queue.length
      for (i <- 1 to numNodesLevel) {
        val curr = queue.dequeue
        
		// enqueue current node's children
		if (curr.left != null)
          queue += curr.left
        if (curr.right != null)
          queue += curr.right
		
		// set next pointer to next node in queue except for last node of level
        if (i < numNodesLevel)
          curr.next = queue.front
      }
    }
    root
  }
}
```