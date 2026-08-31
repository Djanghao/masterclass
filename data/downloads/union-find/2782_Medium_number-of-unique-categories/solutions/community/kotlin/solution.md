# Kotlin Beats 100%

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/5643937/](https://leetcode.com/problems/number-of-unique-categories/solutions/5643937/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Union Find

if they are at the same category, union them and minus number of set.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a category handler.
 * class CategoryHandler(categories: IntArray) {
 *     fun haveSameCategory(a: Int, b: Int): Boolean
 * }
 */
class Solution {
    fun numberOfCategories(n: Int, categoryHandler: CategoryHandler): Int {
        val uf = UnionFind(n)
        for (i in 0 until n) {
            for (j in i + 1 until n) {
                if (categoryHandler.haveSameCategory(i, j)) {
                    uf.union(i, j)
                }
            }
        }

        return uf.numOfSets
    }

    class UnionFind(private val n: Int) {
        private val parent = IntArray(n) { it }
        private val rank = IntArray(n)
        var numOfSets = n

        private fun find(x: Int): Int {
            if (parent[x] != x) {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }

        fun union(a: Int, b: Int) {
            val rootA = find(a)
            val rootB = find(b)
            if (rootA == rootB) return

            if (rank[rootA] < rank[rootB]) {
                parent[rootA] = rootB
            } else if (rank[rootA] == rank[rootB]) {
                parent[rootA] = rootB
                rank[rootB]++
            } else {
                parent[rootB] = rootA
            }

            numOfSets--
        }
    }
}

```