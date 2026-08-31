# simple scala

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/4624762/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/4624762/)

---

# Code
```
/**
 * Definition for a Node.
 * class Node(var _value: Int) {
 *   var value: Int = _value
 *   var children: List[Node] = List()
 * }
 */
import scala.collection.mutable

object Solution {
  def findRoot(tree: List[Node]): Node = {
    if (tree == null || tree.isEmpty)
      return null
    val indegree = mutable.HashMap[Node, Int]()
    for (n <- tree) {
      for (child <- n.children) {
        indegree.put(child, indegree.getOrElse(child, 0) + 1)
      }
    }
    
    for (n <- tree) {
      if (!indegree.contains(n)) {
        return n
      }
    }
    null
  }
}


```