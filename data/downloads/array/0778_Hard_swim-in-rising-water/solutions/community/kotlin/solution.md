# Kotlin Priority Queue

**Author:** lopestbl
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/5259415/](https://leetcode.com/problems/swim-in-rising-water/solutions/5259415/)

---

# Complexity
- Time complexity: (n^2 * log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun swimInWater(grid: Array<IntArray>): Int {
        val queue = PriorityQueue<List<Int>>() { o1, o2 -> o1[2] - o2[2] } // entry: [i, j, height]
        queue.add(listOf(0, 0, grid[0][0]))

        val visited = mutableSetOf<List<Int>>() // { [i, j], [i1, j1], ... }
        visited.add(listOf(0, 0))

        fun addToQueue(i: Int, j: Int) {
            if (i < 0 || i >= grid.size || j < 0 || j >= grid[i].size) {
                return
            }
            if (visited.contains(listOf(i, j))) {
                return
            }

            queue.add(listOf(i, j, grid[i][j]))
            visited.add(listOf(i, j))
        }

        var time = 0
        while (time <= grid.size * grid.size) {
            while (queue.isNotEmpty() && queue.peek()[2] <= time) {
                val curr = queue.remove()

                val i = curr[0]
                val j = curr[1]

                if (i == grid.size - 1 && j == grid[i].size - 1) {
                    return time
                }

                addToQueue(i + 1, j)
                addToQueue(i - 1, j)
                addToQueue(i, j + 1)
                addToQueue(i, j - 1)
            }

            time++
        }

        return -1
    }
}
```