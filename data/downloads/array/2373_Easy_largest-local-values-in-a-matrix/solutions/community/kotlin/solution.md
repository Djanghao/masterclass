# Lots of loops

**Author:** hohuang64
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145441/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145441/)

---

# Intuition
We need to loop through every 3x3 matrix in the original grid to find the max value for each cell in the answer matrix.

# Approach
1. Create a (n-2)x(n-2) matrix called 'answer'.
2. Loop through 'answer', in every step (answer[i][j]), we also loop corresponding 3x3 matrix in the original grid. This means in answer[0][0], we need to look for max number in grid[0][0] up to grid[2][2], answer[0][1]needs to look for grid[0][1] up to grid[2][3] and so on. In short, we need 4 nested loop.
3. Fill answer[i][j] with the max number found in step 2.

# Complexity
- Time complexity:
O(N^2)

- Space complexity:
O(N^2)

# Code
```
class Solution {
    fun largestLocal(grid: Array<IntArray>): Array<IntArray> {
        val answer:Array<IntArray> = Array(grid.size-2){IntArray(grid[0].size-2)}
        for(i in answer.indices) {
            for(j in answer[0].indices) {
                var max = Integer.MIN_VALUE
                for(k in i until i+3) {
                    for(l in j until j+3) {
                        max = maxOf(max, grid[k][l])
                    }
                }
                answer[i][j] = max
            }
        }
        return answer
    }
}
```