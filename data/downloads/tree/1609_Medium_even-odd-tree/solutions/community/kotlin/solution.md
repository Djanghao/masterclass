# Simple kotlin 100/100 solution

**Author:** alexp0111
**Votes:** 2
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/4799471/](https://leetcode.com/problems/even-odd-tree/solutions/4799471/)

---

# Approach
Simple BFS. Just checking previous value in for loop

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {
    fun isEvenOddTree(root: TreeNode?): Boolean {
        val q = LinkedList<TreeNode>()
        var c = 0
        q.add(root!!)
        while (q.isNotEmpty()) {
            var prevValue = -1
            for (i in 0 until q.size) {
                val curNode = q.pollFirst() ?: continue

                if (curNode.`val` % 2 == c % 2) return false
                if (prevValue != -1) {
                    val correctOrder = if (c % 2 == 0) {
                        curNode.`val` > prevValue
                    } else {
                        curNode.`val` < prevValue
                    }
                    if (!correctOrder) return false
                }
                prevValue = curNode.`val`

                curNode.left?.let { q.add(it) }
                curNode.right?.let { q.add(it) }
            }
            c++
        }
        return true
    }
}
```