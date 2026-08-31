# ✅ Kotlin: short solution with O(n) time and O(n) space complexity

**Author:** v-perfilev
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4280394/](https://leetcode.com/problems/squirrel-simulation/solutions/4280394/)

---

# Approach
1. Calculate the distance from each nut to the tree and from the squirrel to each nut.
2. Compute the total distance if the squirrel goes to the tree first for each nut.
3. Find the minimal total distance by sequentially reducing the one-way distance from each nut to the tree and adding the distance from the squirrel's initial position to the nut.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ for storing the calculated distances of each nut from the tree and the squirrel.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minDistance(height: Int, width: Int, tree: IntArray, squirrel: IntArray, nuts: Array<IntArray>): Int {
        val distances = nuts.map { calcDistance(tree, it) to calcDistance(squirrel, it) }
        val totalDistance = distances.sumOf { it.first } * 2
        return distances.minOf { totalDistance + it.second - it.first }
    }

    private fun calcDistance(a: IntArray, b: IntArray): Int = abs(a[0] - b[0]) + abs(a[1] - b[1])
}
```