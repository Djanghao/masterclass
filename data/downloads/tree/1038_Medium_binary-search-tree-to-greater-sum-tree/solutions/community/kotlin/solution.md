# Kotlin. Beats 100% (115 ms). Static array vs alternatives (Stack / Recursion / LinkedList)

**Author:** mobdev778
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5366895/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5366895/)

---

![image.png](./images/0.png)

# Code

Recursion + static array of nodes

```
class Solution {

    fun bstToGst(root: TreeNode?): TreeNode? {
        i = 1
        root?.add()
        i = 1
        while (i < nodes.size) {
            nodes[i].`val` += nodes[i - 1].`val`
            i++
        }
        return root
    }

    fun TreeNode.add() {
        right?.add()
        nodes[i++] = this
        left?.add()
    }

    companion object {
        var i = 1
        val nodes = Array<TreeNode>(101) { TreeNode(0) }
    }
}
```

# Alternative approaches

1. Recursion + Stack

![image.png](./images/1.png)

```
class Solution {
    fun bstToGst(root: TreeNode?): TreeNode? {
        val nodes = Stack<TreeNode>()
        root?.add(nodes)
        var sum = 0
        while (nodes.isNotEmpty()) {
            val node = nodes.pop()
            node.`val` += sum
            sum = node.`val`
        }
        return root
    }

    private fun TreeNode.add(nodes: Stack<TreeNode>) {
        left?.add(nodes)
        nodes.push(this)
        right?.add(nodes)
    }
}
```

2. Recursion with static field "sum"

![image.png](./images/2.png)

```
class Solution {

    init {
        sum = 0
    }

    fun bstToGst(root: TreeNode?): TreeNode? {
        if (root == null) return null
        
        bstToGst(root.right)
        sum += root.`val`
        root.`val` = sum
        bstToGst(root.left)
        return root
    }

    companion object {
        var sum = 0
    }
}
```

3. Recursion with additional TreeNode

![image.png](./images/3.png)

```
class Solution {

    var last = TreeNode(0)

    fun bstToGst(root: TreeNode?): TreeNode? {
        if (root == null) return null
        bstToGst(root.right)
        root.`val` += last.`val`
        last = root
        bstToGst(root.left)
        return root
    }
}
```

4. Recursion with additional parameter:

We can avoid using the extra class-level field "sum" by adding another parameter to the recursion:

![image.png](./images/4.png)

```
class Solution {

    fun bstToGst(root: TreeNode?): TreeNode? {
        gst(0, root)
        return root
    }

    private fun gst(sum: Int, root: TreeNode?): Int {
        if (root == null) return sum
        root.`val` += gst(sum, root.right)
        return gst(root.`val`, root.left)
    }
}
```

5. Recursion + LinkedList

![image.png](./images/5.png)
```
class Solution {
    fun bstToGst(root: TreeNode?): TreeNode? {
        val nodes = LinkedList<TreeNode>()
        gst(nodes, root)
        var sum = 0
        while (nodes.isNotEmpty()) {
            val node = nodes.removeFirst()
            node.`val` += sum
            sum = node.`val`
        }
        return root
    }

    private fun gst(nodes: LinkedList<TreeNode>, root: TreeNode?) {
        if (root == null) return
        gst(nodes, root.right)
        nodes.addLast(root)
        gst(nodes, root.left)
    }
}
```

6. Recursion + Stack + "left == right"

We can also use a short "leaf" check on the tree:
```
if (left == right) {
```
, which can slightly reduce the number of unnecessary function calls and reduce the amount of memory used.

![image.png](./images/6.png)

```
class Solution {

    fun bstToGst(root: TreeNode?): TreeNode? {
        val nodes = Stack<TreeNode>()
        root?.add(nodes)
        var sum = 0
        while (nodes.isNotEmpty()) {
            val node = nodes.pop()
            node.`val` += sum
            sum = node.`val`
        }
        return root
    }

    private fun TreeNode.add(nodes: Stack<TreeNode>) {
        if (left == right) {
            nodes.push(this)
        } else {
            left?.add(nodes)
            nodes.push(this)
            right?.add(nodes)
        }
    }
}
```
