# easy scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/4624753/](https://leetcode.com/problems/clone-n-ary-tree/solutions/4624753/)

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

object Solution {
  def cloneTree(root: Node): Node = {
    if (root == null) {
      return null
    }
    val clone = new Node(root.value)
    if (root.children.nonEmpty) {
      clone.children = root.children.map(cloneTree)
    }
    clone
  }
}


```