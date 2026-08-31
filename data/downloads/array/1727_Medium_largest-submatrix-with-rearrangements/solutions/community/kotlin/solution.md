# [We💕Simple] Counting Sort, Dynamic Programming w/ Explanations

**Author:** YooSeungKim
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331009/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331009/)

---

I always like to find solutions that are very simple and easy, yet do not sacrifice time complexity. I keep creating more solutions

# Code
``` Kotlin []
class Solution {
    fun largestSubmatrix(matrix: Array<IntArray>): Int {
        val heights = IntArray(matrix[0].size)
        var maxArea = 0
        for (row in matrix) {
            val countByHeightInRow = sortedMapOf<Int, Int>(Comparator.reverseOrder())
            for ((j, v) in row.withIndex()) {
                if (v == 0) {
                    heights[j] = 0
                } else {
                    heights[j] += 1
                    countByHeightInRow[heights[j]] = countByHeightInRow.getOrDefault(heights[j], 0) + 1
                }
            }
            var accHeightCount = 0
            for ((height, count) in countByHeightInRow) {
                accHeightCount += count
                maxArea = maxOf(maxArea, accHeightCount * height)
            }
        }
        return maxArea
    }
}

// Shorter version
class Solution {
    fun largestSubmatrix(matrix: Array<IntArray>): Int =
        matrix.fold(0 to IntArray(matrix[0].size)) { (maxArea, heights), row ->
            sortedMapOf<Int, Int>(Comparator.reverseOrder()).apply {
                for ((j, v) in row.withIndex()) {
                    heights[j] = if (v == 0) 0 else heights[j] + 1
                    this[heights[j]] = this.getOrDefault(heights[j], 0) + 1
                }
            }.entries.fold(maxArea to 0) { (maxArea, acc), (height, count) ->
                maxOf(maxArea, height * (acc + count)) to acc + count
            }.first to heights
        }.first
}

// Sort version
class Solution {
    fun largestSubmatrix(matrix: Array<IntArray>): Int {
        val m = matrix.size
        val n = matrix[0].size
        var maxArea = 0

        for (i in 1 until m) {
            for (j in 0 until n) {
                if (matrix[i][j] != 0) {
                    matrix[i][j] += matrix[i - 1][j]
                }
            }
        }

        for (row in matrix) {
            row.sort()
            for (j in 0 until n) {
                maxArea = maxOf(maxArea, row[j] * (n - j))
            }
        }

        return maxArea
    }
}

```

``` Python3 []
class Solution:
    def largestSubmatrix(self, matrix):
        heights = [0] * len(matrix[0])
        answer = 0

        for row in matrix:
            count_by_height = {}
            for j, value in enumerate(row):
                if value == 0:
                    heights[j] = 0
                else:
                    heights[j] += 1
                    count_by_height[heights[j]] = count_by_height.get(heights[j], 0) + 1
            
            acc_height_count = 0
            for height in sorted(count_by_height.keys(), reverse=True):
                acc_height_count += count_by_height[height]
                answer = max(answer, acc_height_count * height)
        
        return answer
```

1.  **Iterating Through Each Row and Calculating Heights**: The algorithm iterates through each row of the matrix and calculates the 'heights' of consecutive 1s for each column. This 'height' represents the number of 1s stacked vertically up to the current row. For instance, if a column has 1s in three consecutive rows, its height would be 3 in the third row. This step is crucial because it transforms the problem into a series of histogram-like structures where each column's height can be visualized as a bar in a histogram.

2.  **Count Sorting of Heights**: After computing the heights for each column in a row, these heights are sorted in descending order using a `sortedMapOf`. This sorting is essential because it aligns the columns in order of their heights, prioritizing taller 'bars' first. This priority is key for efficiently finding the largest rectangle at each step.
3.  **Iterating in Descending Order of Heights**: The algorithm then iterates over these heights, starting from the tallest. During this iteration, it calculates the potential size of the submatrix (rectangle) that can be formed using the current height as the limiting factor. The idea is to consider the tallest column and see how wide the rectangle can be, encompassing shorter columns to its right. This process is repeated for each height, progressively considering shorter heights and wider potential rectangles.
4.  **Updating the Maximum Submatrix Size**: For each height, the algorithm calculates the area of the potential rectangle and updates the maximum size found so far. This update is a crucial step because it ensures that the largest possible submatrix is not missed. The area is calculated by multiplying the current height with the cumulative count of columns that are at least as tall as the current height.

By integrating these steps, the algorithm efficiently finds the largest rectangular area in a binary matrix. The use of height calculation transforms the 2D problem into a series of 1D problems (like histograms), and the sorted iteration ensures that the largest possible rectangles are considered first, optimizing the search for the maximum area. This approach is a blend of dynamic programming (keeping track of heights) and a greedy strategy (prioritizing larger heights first).
