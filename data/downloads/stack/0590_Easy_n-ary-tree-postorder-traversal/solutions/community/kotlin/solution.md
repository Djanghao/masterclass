# print along the way, no 2 stacks, no reversing list

**Author:** sandeep549
**Votes:** 5
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/1080134/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/1080134/)

---

```
    fun postorder(root: Node?): List<Int> {
        if (root == null) return emptyList()

        class CustomNode(val node: Node, var count: Int) // count tracks the child being process
        val list = mutableListOf<Int>()

        val stack = Stack<CustomNode>()
        stack.add(CustomNode(root, -1))

        while (!stack.isEmpty()) {
            val cn = stack.pop()
            if(cn.node.children.isNullOrEmpty()) {
                list.add(cn.node.`val`)
                continue
            }
            if (cn.count == cn.node.children?.lastIndex) { // all children processed
                list.add(cn.node.`val`)
            } else {
                cn.count++ // point to next child, process its subtree
                stack.push(cn) // push back parent again
                val child = CustomNode(cn.node.children!![cn.count]!!, -1)
                stack.push(child)
            }
        }

        return list
    }
```