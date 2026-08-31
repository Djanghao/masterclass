# :: Kotlin :: Pascal Triangle + DFS Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3644038/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3644038/)

---

```
class Tree(val data: Int, var left: Tree? = null, var right: Tree? = null)

class Solution {
    val mod = 1_000_000_007

    fun numOfWays(nums: IntArray): Int {
        val bst = buildBST(nums)

        val pascal = Array(nums.size){ IntArray(nums.size) }

        for (i in nums.indices) {
            pascal[i][0] = 1
            pascal[i][i] = 1
        }

        for (i in 2 until nums.size) {
            for(j in 1 until i) {
                pascal[i][j] = (pascal[i - 1][j - 1] + pascal[i - 1][j]) % mod
            }
        }


        fun dfs(tree: Tree?): Pair<Long, Int> {
            if (tree == null) return Pair(0, 0)
            if (tree.left == null && tree.right == null) return Pair(1, 1)

            if (tree.left == null) {
                val right = dfs(tree.right)
                return Pair(right.first.toLong(), (right.second + 1) % mod)
            }

            if (tree.right == null) {
                val left = dfs(tree.left)
                return Pair(left.first.toLong(), (left.second + 1) % mod)
            }

            val right = dfs(tree.right)
            val left = dfs(tree.left)

            var n =( (right.second + left.second) % mod + 1) % mod
            var ret = 1L

            ret *= left.first.toLong()
            ret %= mod
            ret *= right.first.toLong()
            ret %= mod
            ret *= pascal[right.second + left.second][left.second].toLong()
            ret %= mod

            return Pair(ret, n)
        }
        
        return dfs(bst).first.toInt() - 1
    }


    fun buildBST(nums: IntArray): Tree {
        val n = nums.size
        val root = Tree(nums[0])

        for (i in 1 until n) {
            var prev = Tree(-1)
            var curr: Tree? = root
            var num = nums[i]

            while(curr != null) {
                prev = curr
                if (curr.data < num) {
                    curr = curr.right
                } else {
                    curr = curr.left
                }
            }

            if (prev.data < num) {
                prev.right = Tree(num)
            } else {
                prev.left = Tree(num)
            }
        }

        return root
    }
}
```