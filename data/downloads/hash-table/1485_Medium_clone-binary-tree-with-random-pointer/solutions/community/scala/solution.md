# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3309061/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3309061/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

object Solution {

    import scala.collection.mutable.Map

    val map = Map[Node, NodeCopy]()

    def copyRandomBinaryTree(root: Node): NodeCopy = {

        if(root == null) return null

        val node = map.getOrElseUpdate(root, new NodeCopy(root.value))

        node.random = if(root.random != null) map.getOrElseUpdate(root.random, new NodeCopy(root.random.value)) else null

        node.left = copyRandomBinaryTree(root.left)
        node.right = copyRandomBinaryTree(root.right)

        node
    }
}
```