# Maximum Local Value in 3x3 Submatrices

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5148501/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5148501/)

---

# Intuition
The task requires finding the maximum value within each submatrix in the given grid. We can achieve this by iterating through the interior cells of the grid and computing the maximum value within each submatrix centered at these cells.

# Approach
1. Iterate through the interior cells of the grid.
2. For each interior cell, initialize a variable max with the value of the top-left cell of the corresponding 3x3 submatrix.
3. Traverse the 3x3 submatrix centered at the current cell, updating max if a greater value is encountered.
4. Store the maximum value max in the result matrix maxLocal.
5. Repeat steps 2-4 for all interior cells.
6. Return the resulting matrix maxLocal.

# Complexity
- Time complexity:
O(n^2), where n is the size of the input grid, as we iterate through each cell of the grid once.

- Space complexity:
O((n\u22122)^2), since we store the result in a matrix of size (n\u22122)\xD7(n\u22122).

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer[][]
     */
    function largestLocal($grid) {
        $n = count($grid);
        $maxLocal = [];
        
        for ($i = 1; $i < $n - 1; $i++) {
            for ($j = 1; $j < $n - 1; $j++) {
                // Initialize max value for the 3x3 submatrix
                $max = $grid[$i - 1][$j - 1];
                
                // Iterate through the 3x3 submatrix
                for ($di = -1; $di <= 1; $di++) {
                    for ($dj = -1; $dj <= 1; $dj++) {
                        $max = max($max, $grid[$i + $di][$j + $dj]);
                    }
                }
                
                // Assign the maximum value to the corresponding position in maxLocal
                $maxLocal[$i - 1][$j - 1] = $max;
            }
        }
        
        return $maxLocal;
    }
}
```