# Scala solution using HM & Recursion

**Author:** swathi146
**Votes:** 0
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/4954137/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/4954137/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a Node.
 * class Node(var _value: Int) {
 *   var value: Int = _value
 *   var next: Node = null
 *   var random: Node = null
 * }
 */

import scala.collection.mutable._


object Solution {

    val hashMap = new HashMap[Node, Node]()

    def copyRandomList(head: Node): Node = {
        helper(head)
    }

    def helper(node: Node): Node = {
        if(node == null) return null
        if(hashMap.contains(node)) return hashMap(node)
        val newNode = new Node(node.value)
        hashMap.put(node, newNode)
        newNode.next = helper(node.next)
        newNode.random = helper(node.random)
        newNode
    }
}
```