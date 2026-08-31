# Kotlin, count nodes

**Author:** c4tdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/3217518/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/3217518/)

---

# Intuition
Each node could have up to 3 edges at most (2 children + 1 parent). Find out how many nodes connected to each edge of x. Take the max of it. If it's bigger that half of n - you win

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun btreeGameWinningMove(root: TreeNode?, n: Int, x: Int): Boolean {
        var node = find(root, x)
        var left = count(node?.left)
        var right = count(node?.right)
        var parent = n - 1 - left - right // could be 0 as well
        var max = Math.max(parent, Math.max(left, right))

        return max > n - max
    }

    fun count(n: TreeNode?): Int {
        if (n == null) return 0
        return 1 + count(n?.left) + count(n?.right)
    }

    fun find(n: TreeNode?, x: Int): TreeNode? {
        if (n == null) return null
        if (n?.`val`!! == x) return n
        var t = find(n?.left, x)
        if (t != null) return t
        return find(n?.right, x)
    }
}
```