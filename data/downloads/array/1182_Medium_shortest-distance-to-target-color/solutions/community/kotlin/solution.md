# Concise Kotlin DP solution | O(n)

**Author:** jeppeman
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/3341230/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/3341230/)

---

# Intuition
The idea is to make two passes of colors, one from left to right, and one from right to left, and record distances to all colors from each index based on previously recorded distances.

# Approach
Let:
1. `distances[0][i]` denote the distance from index i to color 1
2. `distances[1][i]` denote the distance from index i to color 2
3. `distances[2][i]` denote the distance from index i to color 3

Iterate over colors from left to right and update distance to current color to 0, and the rest of the color to the distance from the previous index + 1.
Do the same again but from right to left.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun shortestDistanceColor(colors: IntArray, queries: Array<IntArray>): List<Int> {
        val distances = Array<IntArray>(3) { IntArray(colors.size) { Int.MAX_VALUE - 1 } }
        distances[colors[0] - 1][0] = 0

        for (i in 1..colors.lastIndex) {
            distances[colors[i] - 1][i] = 0
            distances[0][i] = minOf(distances[0][i], distances[0][i-1] + 1)
            distances[1][i] = minOf(distances[1][i], distances[1][i-1] + 1)
            distances[2][i] = minOf(distances[2][i], distances[2][i-1] + 1)
        }

        for (i in colors.lastIndex - 1 downTo 0) {
            distances[colors[i] - 1][i] = 0
            distances[0][i] = minOf(distances[0][i], distances[0][i+1] + 1)
            distances[1][i] = minOf(distances[1][i], distances[1][i+1] + 1)
            distances[2][i] = minOf(distances[2][i], distances[2][i+1] + 1)
        }

        val result = MutableList<Int>(queries.size) { 0 }

        for (i in queries.indices) {
            val (index, color) = queries[i]
            result[i] = distances[color - 1][index].takeIf { it < Int.MAX_VALUE - 1 } ?: -1
        }

        return result
    }
}
```