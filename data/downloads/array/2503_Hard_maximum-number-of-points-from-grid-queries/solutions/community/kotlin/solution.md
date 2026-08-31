# best first search with 2 priority queues

**Author:** GvG
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2900215/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2900215/)

---

# Intuition
- can't query one by one: when queries list is super long, it will have more redundant calculation
- it's similar to finding all non-descending array inside a 2d matrixes
- for each x in "queries", the result is the total length of all non-descending array ended with y (y < x)

# Complexity
grid: m x n
queries: k

- Time complexity:
heapify qHeaps 1by1: O(klogk)
iterate elements in grid with qHeap polling out: O(n) * O(klogk)

- Space complexity:
O(k) + O(mn)

# Code
```
class Solution {
    class Query(val index: Int, val value: Int)
    class Cell(val r: Int, val c: Int, val maxVal: Int)
    fun maxPoints(grid: Array<IntArray>, queries: IntArray): IntArray {
        val m = grid.size
        val n = grid[0].size
        
        // priority queue of queries (minHeap)
        var qHeap = PriorityQueue<Query>(Comparator<Query> { a, b -> 
            when {
                a.value < b.value -> -1
                a.value > b.value -> 1
                else -> 0
            }
        })
        for (i in queries.indices) {
            qHeap.offer(Query(i, queries[i]))
        }
        
        val visited = Array(m) { Array(n) {false} }

        // priority queue of cells in the grid (minHeap)
        var curHeap = PriorityQueue<Cell>(Comparator<Cell> { a, b -> 
            when {
                a.maxVal < b.maxVal -> -1
                a.maxVal > b.maxVal -> 1
                else -> 0
            }
        })
        
        // 
        curHeap.offer(Cell(0, 0, grid[0][0]))
        visited[0][0] = true
        
        val resultArr = IntArray(queries.size)
        var scoreCount = 0
        
        while(curHeap.isNotEmpty()) {            
            val tempQHeap = PriorityQueue<Query>(qHeap)
            
            // cell with smallest "maxVal" at this moment
            val curCell = curHeap.poll()
            val i = curCell.r
            val j = curCell.c
            val curMax = curCell.maxVal
            
            // add score
            while (qHeap.isNotEmpty() && qHeap.peek().value <= curMax) {
                // pop out the query, 
                // since its value will not be valid for remaining cells in the cell min heap    
                resultArr[qHeap.poll().index] += scoreCount
            }
            
            if (qHeap.isEmpty()) {
                // no valid query in the query heap
                return resultArr
            }
            // expand 
            if (i - 1 >= 0 && !visited[i - 1][j]) {
                visited[i - 1][j] = true
                curHeap.offer(Cell(i - 1, j, maxOf(curMax, grid[i - 1][j])))
            }
            if (j - 1 >= 0 && !visited[i][j - 1]) {
                visited[i][j - 1] = true
                curHeap.offer(Cell(i, j - 1, maxOf(curMax, grid[i][j - 1])))
            }
            if (i + 1 < m && !visited[i + 1][j]) {
                visited[i + 1][j] = true
                curHeap.offer(Cell(i + 1, j, maxOf(curMax, grid[i + 1][j])))
            }
            if (j + 1 < n && !visited[i][j + 1]) {
                visited[i][j + 1] = true
                curHeap.offer(Cell(i, j + 1, maxOf(curMax, grid[i][j + 1])))
            }

            // process current cell into score count
            scoreCount++
        }

        // add score if there's remaining query
        while (qHeap.isNotEmpty()) {
            resultArr[qHeap.poll().index] += scoreCount
        }
        return resultArr
    }

}
```