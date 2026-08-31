# Detailed solution in Python3/Go/TypeScript with O(mn) time and O(1) space complexity

**Author:** Muhtasim-Fuad-Showmik
**Votes:** 4
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/4245680/](https://leetcode.com/problems/set-matrix-zeroes/solutions/4245680/)

---

# Intuition
We can save space by simply marking the first row with zeroes at the columns for which we find zeroes on any row and doing the same for the first column.

However, we will have a common cell at `[0][0]` that will then act as a marker for both, so we will let that act as an indicator for column and use an extra variable for the rows instead.

# Approach
## Determine which rows and columns need to be zeroes
Traverse through the entire `matrix` from top-left to bottom-right. Whenever a zero is found mark its **topmost** cell as zero and its **leftmost** cell as zero, too. 

>If it is the first row however, use an extra variable to mark for the first row instead of the leftmost cell on the first row, as we will be using it for the column indicator already.

Traverse through every cell on the `matrix` again except the first row and the first column and assign zeroes wherever we find the first row or the first column to contain a zero after our first traversal.

As we skipped the first column earlier, now traverse through the first column and set all of it to zero if the **topmost** cell on the first column is zero.

If our extra variable contains `true`, traverse through the first row and set it all to zero as well.

# Complexity
- Time complexity: $$O(mn)$$

- Space complexity: $$O(1)$$

# Code
```python []
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # Get the dimensions of the matrix
        rows, cols = len(matrix), len(matrix[0])
        
        # Set a flag that would indicate if the 
        # first row needs to be zero or not
        rowZero = False

        #  Determine which rows and columns need to be zeroes
        for row in range(rows):
            for col in range(cols):
                if matrix[row][col] == 0:
                    # Place marker on first row for the column
                    matrix[0][col] = 0

                    # Place marker on first column of the row
                    # if it is not the first row in which case
                    # we mark using the flag we set up already
                    if row > 0: matrix[row][0] = 0
                    else: rowZero = True

        # Convert all rows except the first
        # and all columns except the first
        # to zero if they are marked as zero
        # in the first column and the first row
        for row in range(1, rows):
            for col in range(1, cols):
                if matrix[0][col] == 0 or matrix[row][0] == 0:
                    matrix[row][col] = 0

        # Handle the first column as 
        # tbe previous loop skipped it
        if matrix[0][0] == 0:
            for row in range(rows):
                matrix[row][0] = 0

        # Handle the first row as
        # the previous loop skipped it
        if rowZero:
            for col in range(cols):
                matrix[0][col] = 0

```
```golang []
func setZeroes(matrix [][]int)  {
    // Get the dimensions of the matrix
    rows, cols := len(matrix), len(matrix[0])
    
    // Set a flag that would indicate if the 
    // first row needs to be zero or not
    rowZero := false

    //  Determine which rows and columns need to be zeroes
    for row := 0; row < rows; row ++ {
        for col := 0; col < cols; col++ {
            if matrix[row][col] == 0 {
                // Place marker on first row for the column
                matrix[0][col] = 0

                // Place marker on first column of the row
                // if it is not the first row in which case
                // we mark using the flag we set up already
                if row > 0 {
                    matrix[row][0] = 0
                } else {
                    rowZero = true
                }
            }
        }
    }

    // Convert all rows except the first
    // and all columns except the first
    // to zero if they are marked as zero
    // in the first column and the first row
    for row := 1; row < rows; row ++ {
        for col := 1; col < cols; col++ {
            if matrix[0][col] == 0 || matrix[row][0] == 0 {
                matrix[row][col] = 0
            }
        }
    }

    // Handle the first column as 
    // tbe previous loop skipped it
    if matrix[0][0] == 0 {
        for row := 0; row < rows; row ++ {
            matrix[row][0] = 0
        }
    }

    // Handle the first row as
    // the previous loop skipped it
    if rowZero {
        for col := 0; col < cols; col++ {
            matrix[0][col] = 0
        }
    }
}
```
```typescript []
function setZeroes(matrix: number[][]): void {
    // Get the dimensions of the matrix
    const rows = matrix.length, cols = matrix[0].length;
    
    // Set a flag that would indicate if the 
    // first row needs to be zero or not
    let rowZero = false;

    //  Determine which rows and columns need to be zeroes
    for (let row = 0; row < rows; row ++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] == 0) {
                // Place marker on first row for the column
                matrix[0][col] = 0;

                // Place marker on first column of the row
                // if it is not the first row in which case
                // we mark using the flag we set up already
                if (row > 0) 
                    matrix[row][0] = 0;
                else
                    rowZero = true;
            }
        }
    }

    // Convert all rows except the first
    // and all columns except the first
    // to zero if they are marked as zero
    // in the first column and the first row
    for (let row = 1; row < rows; row ++)
        for (let col = 1; col < cols; col++)
            if (matrix[0][col] == 0 || matrix[row][0] == 0)
                matrix[row][col] = 0;

    // Handle the first column as 
    // tbe previous loop skipped it
    if (matrix[0][0] == 0)
        for (let row = 0; row < rows; row ++)
            matrix[row][0] = 0;

    // Handle the first row as
    // the previous loop skipped it
    if (rowZero)
        for (let col = 0; col < cols; col++)
            matrix[0][col] = 0;
};
```