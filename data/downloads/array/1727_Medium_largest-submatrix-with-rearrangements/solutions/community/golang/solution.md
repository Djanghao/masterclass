# [Golang] No Sorting

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4330698/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4330698/)

---

# Complexity
- Time complexity:
O(m*n)

- Space complexity:
O(n)

# Code
```
type Pair struct {
    Height int
    Column int
}

func largestSubmatrix(matrix [][]int) int {
    m, n := len(matrix), len(matrix[0])
    prevHeights := []Pair{}
    res := 0

    for row := 0; row < m; row++ {
        heights := []Pair{}
        seen := make([]bool, n)

        // Check prevHeights(rows) first and increment heights
        for _, pair := range prevHeights {
            height, col := pair.Height, pair.Column
            if matrix[row][col] == 1 {
                heights = append(heights, Pair{height+1, col})
                seen[col] = true
            }
        }

        // Start from height = 1
        for col := 0; col < n; col++ {
            if !seen[col] && matrix[row][col] == 1 {
                heights = append(heights, Pair{1, col})
            }
        }

        // Here heights will be in descending order
        // So i+1, gives width. 
        for i := 0; i < len(heights); i++ {
            res = max(res, heights[i].Height * (i+1))
        }

        prevHeights = heights
    }

    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```