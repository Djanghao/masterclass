# [Kotlin] 3 Solutions: Set, List, Iterators O(H) space

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1421493/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1421493/)

---

Solution 1: Set
```
class Solution {
    val values = mutableSetOf<Int>()
    fun findTarget(root: TreeNode?, k: Int): Boolean {
        return root?.let {
            values.contains(k - root.`val`) || run {
                values.add(root.`val`)
                findTarget(root.left, k) || findTarget(root.right, k)
            }
        } ?: false
    }
}
```

Solution 2: List
```
class Solution {
    fun TreeNode.toList(): List<Int> {
        return (left?.toList() ?: listOf()) + listOf(`val`) + (right?.toList() ?: listOf())
    }
    
    fun findTarget(root: TreeNode, k: Int): Boolean {
        val list = root.toList()
        var leftIndex = 0
        var rightIndex = list.lastIndex
        while (leftIndex < rightIndex) {
            when {
                list[leftIndex] + list[rightIndex] == k -> return true
                list[leftIndex] + list[rightIndex] < k -> ++leftIndex
                else -> --rightIndex
            }
        }
        return false
    }
}
```

Solution 3: Iterators O(H) space
```
class Solution {
    class NodeIterator(root: TreeNode, private val direction: Direction) {
        enum class Direction {
            INCREASE, DECREASE
        }

        private val paths = Stack<TreeNode>()

        init {
            push(root)
        }

        fun next(): Int {
            val current = paths.pop()
            when {
                direction == Direction.INCREASE && current.right != null -> {
                    push(current.right)
                }
                direction == Direction.DECREASE && current.left != null -> {
                    push(current.left)
                }
            }
            return current.`val`
        }

        private fun push(node: TreeNode) {
            paths.push(node)
            val getNext = { if (direction == Direction.INCREASE) paths.peek().left else paths.peek().right }
            var next = getNext()
            while (next != null) {
                paths.push(next)
                next = getNext()
            }
        }
    }

    fun findTarget(root: TreeNode, k: Int): Boolean {
        val leftNode = NodeIterator(root, NodeIterator.Direction.INCREASE)
        val rightNode = NodeIterator(root, NodeIterator.Direction.DECREASE)
        var leftValue = leftNode.next()
        var rightValue = rightNode.next()
        while (leftValue < rightValue) {
            val sum = leftValue + rightValue
            when {
                sum == k -> return true
                sum < k -> leftValue = leftNode.next()
                else -> rightValue = rightNode.next()
            }
        }
        return false
    }
}
```