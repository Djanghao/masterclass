# Golang Easy Approach w/ Explanation + Comments

**Author:** yangiff
**Votes:** 3
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/3933107/](https://leetcode.com/problems/spiral-matrix-iv/solutions/3933107/)

---

# Intuition
This problem can be solved very intuitively. Simply iterate through the linked list and record the value of the node in the correct spot in the matrix.

# Approach
1. Initialize matrix
2. Initialize directions to be clockwise
    - (0, 1) = right
    - (1, 0) = down
    - (0, -1) = left
    - (-1, 0) = up
3. Iterate through Linked List, and if ***r*** or ***c*** go out of bounds or the next square is already filled, change direction 90 degrees clockwise.

# Code
```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func spiralMatrix(rows int, cols int, head *ListNode) [][]int {
    // initialize matrix
    mat := make([][]int, rows)
    for i := 0; i < rows; i++ {
        mat[i] = make([]int, cols)
        for j := 0; j < cols; j++ {
            mat[i][j] = -1
        }
    }

    // keeps track of which operation to do
    operations := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
    op := 0
    
    // current index
    r, c := 0, 0

    // iterate through LL
    for head != nil {

        mat[r][c] = head.Val

        // if next square is out of bounds or already filled out, 
        // change direction of operation clockwise by incrementing op
        nr, nc := operations[op%4][0] + r, operations[op%4][1] + c
        if nr >= rows || nr < 0 || nc >= cols || nc < 0 || mat[nr][nc] != -1 {
            op++
        }

        // apply operation to r and c
        r += operations[op%4][0]
        c += operations[op%4][1]

        // keep moving through LL
        head = head.Next
    }

    return mat
}
```