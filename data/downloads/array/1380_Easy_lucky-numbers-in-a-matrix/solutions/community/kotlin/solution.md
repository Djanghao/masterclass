# Kotlin. Beats 100% (191 ms). Find min, then max.

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5499846/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5499846/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun luckyNumbers (matrix: Array<IntArray>): List<Int> {
        result.clear()

        for (y in 0 until matrix.size) {
            val (min, x) = minX(matrix[y])
            if (isMax(matrix, min, x)) {
                result.add(min)
            }
        }

        return result
    }

    private fun isMax(matrix: Array<IntArray>, max: Int, x: Int): Boolean {
        for (y in 0 until matrix.size) {
            if (matrix[y][x] > max) return false
        }
        return true
    }

    private fun minX(line: IntArray): Pair<Int, Int> {
        var min = line[0]
        var minX = 0
        for (x in 0 until line.size) {
            if (min > line[x]) {
                min = line[x]
                minX = x
            }
        }
        return min to minX
    }

    companion object {
        val result = LinkedList<Int>()
    }
}
```

# Approach

My first thought was to introduce additional IntArray-s to record the maximums and minimums by rows and columns. But then I saw that they were unnecessary.

The algorithm is quite simple:

1) We look for the minimum and its position in each row.

2) Having found the minimum, we try to determine whether it is the maximum in its column. This saves a little time, since we will most likely complete the check faster than checking all the elements in the column. Plus, going from top to bottom by column is a rather expensive operation - here we access the index twice (first by y, then by x), so I wanted to shorten the pass a little here.

3) The resulting lucky numbers are added to LinkedList instead of ArrayList, since it does not require regrouping of elements when expanding.

We may also get rid of "pairs" to speed up the algorithm:

![image.png](./images/1.png)

```
class Solution {

    var minX = 0
    var min = 0

    fun luckyNumbers (matrix: Array<IntArray>): List<Int> {
        result.clear()

        for (y in 0 until matrix.size) {
            minX(matrix[y])
            if (isMax(matrix, min, minX)) {
                result.add(min)
            }
        }

        return result
    }

    private inline fun minX(line: IntArray) {
        min = line[0]
        minX = 0
        for (x in 0 until line.size) {
            if (min > line[x]) {
                min = line[x]
                minX = x
            }
        }
    }

    private inline fun isMax(matrix: Array<IntArray>, max: Int, x: Int): Boolean {
        for (y in 0 until matrix.size) {
            if (matrix[y][x] > max) return false
        }
        return true
    }

    companion object {
        val result = LinkedList<Int>()
    }
}
```

# Alternative solution

The solution with IntArrays also works, but as expected, it wastes extra memory:

![image.png](./images/2.png)

```
class Solution {

    fun luckyNumbers (matrix: Array<IntArray>): List<Int> {
        val minRow = IntArray(matrix.size) { Int.MAX_VALUE }
        val maxCol = IntArray(matrix[0].size)
        
        for (i in 0 until matrix.size) {
            val line = matrix[i]
            for (j in 0 until line.size) {
                minRow[i] = Math.min(minRow[i], line[j])
                maxCol[j] = Math.max(maxCol[j], line[j])
            }
        }

        val res = LinkedList<Int>()
        for (i in 0 until matrix.size) {
            val line = matrix[i]
            for (j in 0 until line.size) {
                if (line[j] == minRow[i] && line[j] == maxCol[j]) {
                    res.add(line[j])
                }
            }
        }
        return res
    }
}
```
