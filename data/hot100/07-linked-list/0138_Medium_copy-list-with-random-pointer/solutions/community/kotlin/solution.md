# Kotlin: Iterative

**Author:** artemasoyan
**Votes:** 7
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/2891413/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/2891413/)

---

```
class Solution {
    fun copyRandomList(node: Node?): Node? {
        val oldToNew = HashMap<Node, Node>()    

        var copy: Node? = null
        var curr: Node? = node

        while (curr != null) {
            copy = Node(curr.`val`)
            oldToNew[curr] = copy
            curr = curr?.next
        }

        curr = node
        while (curr != null) {
            copy = oldToNew[curr]!!
            copy.next = oldToNew[curr.next]
            copy.random = oldToNew[curr.random]
            curr = curr?.next
        }

        return oldToNew[node]
    }
}
```