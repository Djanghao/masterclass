# 1% Solution. Be in top 1%.

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4306845/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4306845/)

---


```
import java.util.Stack

class Solution {
    fun leftmostBuildingQueries(heights: IntArray, queries: Array<IntArray>): IntArray {
        val n = heights.size
        val ngt = IntArray(n)
        val stack = Stack<Int>()

        for (i in n - 1 downTo 0) {
            while (!stack.isEmpty() && heights[stack.peek()] <= heights[i]) {
                stack.pop()
            }
            ngt[i] = if (stack.isEmpty()) -1 else stack.peek()
            stack.push(i)
        }

        val m = queries.size
        val result = IntArray(m)

        for (i in 0 until m) {
            val minIndex = minOf(queries[i][0], queries[i][1])
            val maxIndex = maxOf(queries[i][0], queries[i][1])
            val indexWithMaxValue = if (heights[maxIndex] >= heights[minIndex]) maxIndex else minIndex

            if (minIndex == maxIndex || heights[minIndex] < heights[maxIndex]) {
                result[i] = maxIndex
            } else {
                var ngtIndex = ngt[maxIndex]
                while (ngtIndex != -1 && heights[ngtIndex] <= heights[minIndex]) {
                    ngtIndex = ngt[ngtIndex]
                }
                result[i] = ngtIndex
            }
        }

        return result
    }
}

```