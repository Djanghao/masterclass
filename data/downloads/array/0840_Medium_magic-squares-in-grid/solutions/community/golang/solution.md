# O(R*C) | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 11
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5608607/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5608607/)

---

# Approach 1
### Intuition

The key to solving this problem lies in understanding the definition of a magic square and then devising an efficient algorithm to identify such squares within the given grid.

The intuition is to manually scan through the grid, examining each possible 3x3 subarray and checking if it satisfies the criteria of a magic square. This approach is straightforward and easy to understand, as it involves iterating through the grid, performing the necessary checks, and keeping track of the count of valid magic squares.

The main idea is to use the properties of a magic square, such as the requirement for distinct integers from 1 to 9, and the equality of the sums of rows, columns, and diagonals, to determine if a given 3x3 subarray is a valid magic square.

### Approach
The approach taken in this solution can be divided into the following steps:

1. **Grid Traversal**:
   - The outer loop iterates through the rows of the input grid, starting from the first row (index 0) and ending at the third-to-last row (index `rows - 3`).
   - The inner loop iterates through the columns of the input grid, starting from the first column (index 0) and ending at the third-to-last column (index `cols - 3`).
   - This ensures that for each iteration, the code can consider a 3x3 subarray of the grid, starting from the current row and column.

2. **Magic Square Validation**:
   - For each 3x3 subarray, the code calls the `isValidMagicSquare` helper function to determine if the subarray is a valid magic square.
   - The `isValidMagicSquare` function performs the following steps:

     a. **Presence Tracking**:
        - It creates a boolean array `numPresence` of size 10 (from index 1 to 9) to keep track of the presence of each number from 1 to 9 within the 3x3 subarray.
        - This array is initialized with `false` values, indicating that no numbers have been seen yet.

     b. **Element Checks**:
        - The function then iterates through the 3x3 subarray, accessing each element `num` at the corresponding row and column indices.
        - For each `num`, it checks if the value is within the valid range of 1 to 9. If the value is outside this range, the function immediately returns `false`, as a magic square can only contain integers from 1 to 9.
        - Next, it checks if the `numPresence` array already has `true` at the index corresponding to `num`. If so, it means that the number has been seen before, and the 3x3 subarray cannot be a valid magic square, so the function returns `false`.
        - If the number is within the valid range and has not been seen before, the function sets the corresponding index in the `numPresence` array to `true`.

     c. **Row and Column Sums**:
        - After checking the individual elements, the function calculates the sums of the three rows, three columns, and the two diagonals of the 3x3 subarray.
        - It starts by calculating the sum of the first row, which will be used as the target sum for the rest of the checks.
        - Then, it calculates the sums of the other two rows and checks if they are equal to the target sum. If any of the row sums are different, the function returns `false`.
        - Next, it calculates the sums of the three columns and checks if they are all equal to the target sum. If any of the column sums are different, the function returns `false`.

     d. **Diagonal Sums**:
        - Finally, the function calculates the sums of the two diagonals of the 3x3 subarray and checks if they are both equal to the target sum.
        - If the diagonal sums are not equal to the target sum, the function returns `false`.

     e. **Return Value**:
        - If all the checks pass (i.e., the elements are distinct, within the valid range, and the row, column, and diagonal sums are all equal), the function returns `true`, indicating that the 3x3 subarray is a valid magic square.

3. **Result Accumulation**:
   - After calling the `isValidMagicSquare` function for a 3x3 subarray, the outer loop checks the return value.
   - If the function returns `true`, it means that the 3x3 subarray is a valid magic square, so the `count` variable is incremented.

4. **Final Result**:
   - After the entire grid has been traversed and all the 3x3 subarrays have been checked, the final value of the `count` variable is returned as the output, representing the total number of valid 3x3 contiguous magic square subgrids within the given grid.

### Complexity

**Time Complexity: O(rows * cols)**
The time complexity of this solution is O(rows * cols), where `rows` and `cols` are the dimensions of the input grid. This is because the code iterates through each possible 3x3 subarray, which involves a nested loop over the rows and columns of the grid.

Within the `isValidMagicSquare` function, the following operations are performed:

1. Initializing the `numPresence` array: O(1)
2. Iterating through the 3x3 subarray: O(9)
3. Calculating the row, column, and diagonal sums: O(1)
4. Checking the equality of the sums: O(1)

The overall time complexity of the `isValidMagicSquare` function is O(1), as the number of operations is constant and independent of the grid size.

**Space Complexity: O(1)**
The space complexity of this solution is O(1), as the code only uses a fixed-size boolean array `numPresence` to keep track of the presence of numbers within the 3x3 subarray. This array has a constant size of 10, and its size does not depend on the dimensions of the input grid.



### Code
```Java []
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        if (rows < 3 || cols < 3) {
            return 0;
        }
        int count = 0;
        for (int i = 0; i <= rows - 3; i++) {
            for (int j = 0; j <= cols - 3; j++) {
                if (isValidMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }
        return count;
    }
    
    private boolean isValidMagicSquare(int[][] grid, int startRow, int startCol) {
        boolean[] numPresence = new boolean[10];
        int targetSum = 0;
        
        // Check for distinct numbers and calculate sums
        for (int i = 0; i < 3; i++) {
            int rowSum = 0;
            int colSum = 0;
            for (int j = 0; j < 3; j++) {
                int num = grid[startRow + i][startCol + j];
                if (num < 1 || num > 9 || numPresence[num]) {
                    return false;
                }
                numPresence[num] = true;
                rowSum += num;
                colSum += grid[startRow + j][startCol + i];
            }
            if (i == 0) {
                targetSum = rowSum;
            } else if (rowSum != targetSum || colSum != targetSum) {
                return false;
            }
        }
        
        // Check diagonals
        int mainDiagonalSum = grid[startRow][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow + 2][startCol + 2];
        int antiDiagonalSum = grid[startRow][startCol + 2] + grid[startRow + 1][startCol + 1] + grid[startRow + 2][startCol];
        
        return mainDiagonalSum == targetSum && antiDiagonalSum == targetSum;
    }
}
```
```C++ []
class Solution {
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int count = 0;
        int rows = grid.size();
        int cols = grid[0].size();

        for (int i = 0; i <= rows - 3; i++) {
            for (int j = 0; j <= cols - 3; j++) {
                if (isValidMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }

private:
    bool isValidMagicSquare(const vector<vector<int>>& grid, int startRow, int startCol) {
        // Create a boolean array to track the presence of each number (1-9)
        vector<bool> numPresence(10, false);

        // Check each element in the 3x3 subgrid
        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                int num = grid[i][j];
                if (num < 1 || num > 9 || numPresence[num]) {
                    return false;
                }
                numPresence[num] = true;
            }
        }

        // Check if the sums of rows, columns, and diagonals are equal
        int targetSum = grid[startRow][startCol] + grid[startRow][startCol + 1] + grid[startRow][startCol + 2];
        for (int i = 0; i < 3; i++) {
            if (getRowSum(grid, startRow + i, startCol) != targetSum ||
                getColSum(grid, startRow, startCol + i) != targetSum) {
                return false;
            }
        }

        int diagonalSum1 = grid[startRow][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow + 2][startCol + 2];
        int diagonalSum2 = grid[startRow + 2][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow][startCol + 2];
        return diagonalSum1 == targetSum && diagonalSum2 == targetSum;
    }

    int getRowSum(const vector<vector<int>>& grid, int row, int startCol) {
        return grid[row][startCol] + grid[row][startCol + 1] + grid[row][startCol + 2];
    }

    int getColSum(const vector<vector<int>>& grid, int startRow, int col) {
        return grid[startRow][col] + grid[startRow + 1][col] + grid[startRow + 2][col];
    }
};
```
```Python []
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        count = 0
        rows, cols = len(grid), len(grid[0])

        for i in range(rows - 2):
            for j in range(cols - 2):
                if self.is_valid_magic_square(grid, i, j):
                    count += 1

        return count

    def is_valid_magic_square(self, grid: List[List[int]], start_row: int, start_col: int) -> bool:
        # Create a boolean array to track the presence of each number (1-9)
        num_presence = [False] * 10

        # Check each element in the 3x3 subgrid
        for i in range(start_row, start_row + 3):
            for j in range(start_col, start_col + 3):
                num = grid[i][j]
                if num < 1 or num > 9 or num_presence[num]:
                    return False
                num_presence[num] = True

        # Check if the sums of rows, columns, and diagonals are equal
        target_sum = grid[start_row][start_col] + grid[start_row][start_col + 1] + grid[start_row][start_col + 2]
        for i in range(3):
            if self.get_row_sum(grid, start_row + i, start_col) != target_sum or \\
               self.get_col_sum(grid, start_row, start_col + i) != target_sum:
                return False

        diagonal_sum1 = grid[start_row][start_col] + grid[start_row + 1][start_col + 1] + grid[start_row + 2][start_col + 2]
        diagonal_sum2 = grid[start_row + 2][start_col] + grid[start_row + 1][start_col + 1] + grid[start_row][start_col + 2]
        return diagonal_sum1 == target_sum and diagonal_sum2 == target_sum

    def get_row_sum(self, grid: List[List[int]], row: int, start_col: int) -> int:
        return grid[row][start_col] + grid[row][start_col + 1] + grid[row][start_col + 2]

    def get_col_sum(self, grid: List[List[int]], start_row: int, col: int) -> int:
        return grid[start_row][col] + grid[start_row + 1][col] + grid[start_row + 2][col]
```
```Go []
func numMagicSquaresInside(grid [][]int) int {
    count := 0
    rows, cols := len(grid), len(grid[0])

    for i := 0; i <= rows - 3; i++ {
        for j := 0; j <= cols - 3; j++ {
            if isValidMagicSquare(grid, i, j) {
                count++
            }
        }
    }

    return count
}

func isValidMagicSquare(grid [][]int, startRow, startCol int) bool {
    // Create a boolean array to track the presence of each number (1-9)
    numPresence := make([]bool, 10)

    // Check each element in the 3x3 subgrid
    for i := startRow; i < startRow + 3; i++ {
        for j := startCol; j < startCol + 3; j++ {
            num := grid[i][j]
            if num < 1 || num > 9 || numPresence[num] {
                return false
            }
            numPresence[num] = true
        }
    }

    // Check if the sums of rows, columns, and diagonals are equal
    targetSum := grid[startRow][startCol] + grid[startRow][startCol+1] + grid[startRow][startCol+2]
    for i := 0; i < 3; i++ {
        if getRowSum(grid, startRow+i, startCol) != targetSum ||
           getColSum(grid, startRow, startCol+i) != targetSum {
            return false
        }
    }

    diagonalSum1 := grid[startRow][startCol] + grid[startRow+1][startCol+1] + grid[startRow+2][startCol+2]
    diagonalSum2 := grid[startRow+2][startCol] + grid[startRow+1][startCol+1] + grid[startRow][startCol+2]
    return diagonalSum1 == targetSum && diagonalSum2 == targetSum
}

func getRowSum(grid [][]int, row, startCol int) int {
    return grid[row][startCol] + grid[row][startCol+1] + grid[row][startCol+2]
}

func getColSum(grid [][]int, startRow, col int) int {
    return grid[startRow][col] + grid[startRow+1][col] + grid[startRow+2][col]
}
```
```Rust []
impl Solution {
    pub fn num_magic_squares_inside(grid: Vec<Vec<i32>>) -> i32 {
        let rows = grid.len();
        let cols = if rows > 0 { grid[0].len() } else { 0 };

        if rows < 3 || cols < 3 {
            return 0;
        }

        let mut count = 0;

        for i in 0..rows - 2 {
            for j in 0..cols - 2 {
                if Self::is_valid_magic_square(&grid, i, j) {
                    count += 1;
                }
            }
        }

        count
    }

    fn is_valid_magic_square(grid: &Vec<Vec<i32>>, start_row: usize, start_col: usize) -> bool {
        // Create a HashSet to track the presence of each number (1-9)
        let mut num_presence = std::collections::HashSet::new();

        // Check each element in the 3x3 subgrid
        for i in start_row..start_row + 3 {
            for j in start_col..start_col + 3 {
                let num = grid[i][j];
                if num < 1 || num > 9 || num_presence.contains(&num) {
                    return false;
                }
                num_presence.insert(num);
            }
        }

        // Check if the sums of rows, columns, and diagonals are equal
        let target_sum = grid[start_row][start_col] + grid[start_row][start_col + 1] + grid[start_row][start_col + 2];
        for i in 0..3 {
            if Self::get_row_sum(grid, start_row + i, start_col) != target_sum
                || Self::get_col_sum(grid, start_row, start_col + i) != target_sum
            {
                return false;
            }
        }

        let diagonal_sum1 =
            grid[start_row][start_col] + grid[start_row + 1][start_col + 1] + grid[start_row + 2][start_col + 2];
        let diagonal_sum2 =
            grid[start_row + 2][start_col] + grid[start_row + 1][start_col + 1] + grid[start_row][start_col + 2];
        diagonal_sum1 == target_sum && diagonal_sum2 == target_sum
    }

    fn get_row_sum(grid: &Vec<Vec<i32>>, row: usize, start_col: usize) -> i32 {
        grid[row][start_col] + grid[row][start_col + 1] + grid[row][start_col + 2]
    }

    fn get_col_sum(grid: &Vec<Vec<i32>>, start_row: usize, col: usize) -> i32 {
        grid[start_row][col] + grid[start_row + 1][col] + grid[start_row + 2][col]
    }
}
```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            if (isValidMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
};

/**
 * @param {number[][]} grid
 * @param {number} startRow
 * @param {number} startCol
 * @return {boolean}
 */
function isValidMagicSquare(grid, startRow, startCol) {
    // Create a boolean array to track the presence of each number (1-9)
    const numPresence = new Array(10).fill(false);

    // Check each element in the 3x3 subgrid
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            const num = grid[i][j];
            if (num < 1 || num > 9 || numPresence[num]) {
                return false;
            }
            numPresence[num] = true;
        }
    }

    // Check if the sums of rows, columns, and diagonals are equal
    const targetSum = grid[startRow][startCol] + grid[startRow][startCol + 1] + grid[startRow][startCol + 2];
    for (let i = 0; i < 3; i++) {
        if (getRowSum(grid, startRow + i, startCol) !== targetSum ||
            getColSum(grid, startRow, startCol + i) !== targetSum) {
            return false;
        }
    }

    const diagonalSum1 = grid[startRow][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow + 2][startCol + 2];
    const diagonalSum2 = grid[startRow + 2][startCol] + grid[startRow + 1][startCol + 1] + grid[startRow][startCol + 2];
    return diagonalSum1 === targetSum && diagonalSum2 === targetSum;
}

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} startCol
 * @return {number}
 */
function getRowSum(grid, row, startCol) {
    return grid[row][startCol] + grid[row][startCol + 1] + grid[row][startCol + 2];
}

/**
 * @param {number[][]} grid
 * @param {number} startRow
 * @param {number} col
 * @return {number}
 */
function getColSum(grid, startRow, col) {
    return grid[startRow][col] + grid[startRow + 1][col] + grid[startRow + 2][col];
}
```

---
# Approach 2

## Intuition

The key insight is that we need to examine every possible 3x3 subgrid within the given grid and determine whether each subgrid constitutes a magic square.

A magic square, by definition, must satisfy several conditions:
1. It contains the numbers 1 through 9 exactly once.
2. The sum of each row, each column, and both diagonals must be equal.

The intuition behind using bitwise operations stems from the need to efficiently check for the presence of unique numbers from 1 to 9. By using the binary representation of integers, we can use each bit to represent the presence or absence of a number, allowing for rapid checks and updates.

## Approach

The approach to solving this problem can be broken down into several key components:

### 1. Grid Traversal

The first step in our approach involves systematically examining every possible 3x3 subgrid within the larger input grid. This is achieved through a nested loop structure that iterates over the starting positions of potential 3x3 subgrids.

```
for (int i = 0; i <= rows - 3; i++) {
    for (int j = 0; j <= cols - 3; j++) {
        // Check if the 3x3 subgrid starting at (i, j) is a magic square
    }
}
```

This nested loop ensures that we consider every possible 3x3 subgrid, with the upper bounds (rows - 3 and cols - 3) preventing out-of-bounds access when we examine the rightmost and bottommost subgrids.

### 2. Magic Square Validation

The core of our approach lies in the efficient validation of each 3x3 subgrid to determine if it constitutes a magic square. This validation process is encapsulated within a separate function, which we'll call `isMagicSquare`. This function performs several critical checks:

### 2.1 Number Range and Uniqueness Check

One of the primary requirements of a magic square is that it contains the numbers 1 through 9 exactly once. To efficiently check this condition, we employ a bitwise approach:

```
int usedNumbers = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        int num = grid[row + i][col + j];
        
        // Check if number is between 1 and 9
        if (num < 1 || num > 9) return false;
        
        // Check for duplicates using bit manipulation
        int bit = 1 << num;
        if ((usedNumbers & bit) != 0) return false;
        usedNumbers |= bit;
    }
}
```

This bitwise approach utilizes the following concepts:

- We initialize a variable `usedNumbers` to 0, which will serve as our bit mask.
- For each number encountered in the subgrid, we perform two operations:
  1. We shift 1 to the left by `num` positions (`1 << num`). This creates a binary number with only the `num`-th bit set to 1.
  2. We perform a bitwise AND operation between this shifted bit and our `usedNumbers` mask. If the result is non-zero, it means that this bit was already set, indicating a duplicate number.
- If no duplicate is found, we update our `usedNumbers` mask by performing a bitwise OR operation with the shifted bit, effectively "marking" this number as used.

This bitwise technique allows us to check for uniqueness in constant time for each number, resulting in a highly efficient validation process.

### 2.2 Sum Calculation and Equality Check

Simultaneously with the uniqueness check, we calculate the sums for each row, column, and both diagonals:

```
int[] rowSums = new int[3];
int[] colSums = new int[3];
int diag1 = 0, diag2 = 0;

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        int num = grid[row + i][col + j];
        
        // Update sums
        rowSums[i] += num;
        colSums[j] += num;
        if (i == j) diag1 += num;
        if (i + j == 2) diag2 += num;
    }
}
```

This approach allows us to calculate all necessary sums in a single pass through the 3x3 subgrid, optimizing our time complexity.

After calculating these sums, we perform an equality check to ensure that all rows, columns, and diagonals have the same sum:

```
int sum = rowSums[0];
if (diag1 != sum || diag2 != sum) return false;
for (int i = 0; i < 3; i++) {
    if (rowSums[i] != sum || colSums[i] != sum) return false;
}
```

If all these conditions are met, we can conclude that the subgrid is indeed a magic square.

### 3. Counting Magic Squares

As we traverse the grid and validate each 3x3 subgrid, we maintain a count of the number of valid magic squares encountered:

```
int count = 0;
for (int i = 0; i <= rows - 3; i++) {
    for (int j = 0; j <= cols - 3; j++) {
        if (isMagicSquare(grid, i, j)) {
            count++;
        }
    }
}
return count;
```

This count is incremented each time a valid magic square is found, and the final count is returned as the solution to the problem.

## Complexity Analysis

### Time Complexity O(R * C) 

The time complexity of this algorithm can be analyzed as follows:

1. Grid Traversal: We iterate over every possible starting position for a 3x3 subgrid. In a grid of size R x C, there are (R-2) * (C-2) such positions. This gives us O((R-2)(C-2)) iterations.

2. Magic Square Validation: For each 3x3 subgrid, we perform a constant number of operations:
   - We iterate over the 9 cells of the subgrid exactly once.
   - For each cell, we perform constant-time operations (bitwise operations, arithmetic operations).

Therefore, the time complexity of validating a single 3x3 subgrid is O(1).

Combining these two factors, our overall time complexity is O((R-2)(C-2)), which simplifies to O(RC) where R and C are the number of rows and columns in the input grid, respectively.


### Space Complexity O(1)

The space complexity of our algorithm is constant, O(1). This is because we use a fixed amount of additional space regardless of the input size:

1. We use a single integer (`usedNumbers`) for our bitwise operations.
2. We use two fixed-size arrays (`rowSums` and `colSums`) of length 3.
3. We use two individual integers for diagonal sums (`diag1` and `diag2`).
4. We use a constant number of loop variables and other temporary variables.

All of these space requirements are independent of the input grid size, resulting in a constant space complexity.




### Code

```Java []
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int count = 0;

        for (int i = 0; i <= rows - 3; i++) {
            for (int j = 0; j <= cols - 3; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }

    private boolean isMagicSquare(int[][] grid, int row, int col) {
        int usedNumbers = 0;
        int[] rowSums = new int[3];
        int[] colSums = new int[3];
        int diag1 = 0, diag2 = 0;

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int num = grid[row + i][col + j];
                
                // Check if number is between 1 and 9
                if (num < 1 || num > 9) return false;
                
                // Check for duplicates using bit manipulation
                int bit = 1 << num;
                if ((usedNumbers & bit) != 0) return false;
                usedNumbers |= bit;

                // Update sums
                rowSums[i] += num;
                colSums[j] += num;
                if (i == j) diag1 += num;
                if (i + j == 2) diag2 += num;
            }
        }

        // Check if all sums are equal
        int sum = rowSums[0];
        if (diag1 != sum || diag2 != sum) return false;
        for (int i = 0; i < 3; i++) {
            if (rowSums[i] != sum || colSums[i] != sum) return false;
        }

        return true;
    }
}

```
```C++ []
class Solution {
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int count = 0;

        for (int i = 0; i <= rows - 3; i++) {
            for (int j = 0; j <= cols - 3; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }

private:
    bool isMagicSquare(const vector<vector<int>>& grid, int row, int col) {
        int usedNumbers = 0;
        vector<int> rowSums(3, 0);
        vector<int> colSums(3, 0);
        int diag1 = 0, diag2 = 0;

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int num = grid[row + i][col + j];
                
                if (num < 1 || num > 9) return false;
                
                int bit = 1 << num;
                if ((usedNumbers & bit) != 0) return false;
                usedNumbers |= bit;

                rowSums[i] += num;
                colSums[j] += num;
                if (i == j) diag1 += num;
                if (i + j == 2) diag2 += num;
            }
        }

        int sum = rowSums[0];
        if (diag1 != sum || diag2 != sum) return false;
        for (int i = 0; i < 3; i++) {
            if (rowSums[i] != sum || colSums[i] != sum) return false;
        }

        return true;
    }
};

```
```Python []
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        count = 0

        for i in range(rows - 2):
            for j in range(cols - 2):
                if self.isMagicSquare(grid, i, j):
                    count += 1

        return count

    def isMagicSquare(self, grid: List[List[int]], row: int, col: int) -> bool:
        used_numbers = 0
        row_sums = [0] * 3
        col_sums = [0] * 3
        diag1 = diag2 = 0

        for i in range(3):
            for j in range(3):
                num = grid[row + i][col + j]
                
                if num < 1 or num > 9:
                    return False
                
                bit = 1 << num
                if used_numbers & bit:
                    return False
                used_numbers |= bit

                row_sums[i] += num
                col_sums[j] += num
                if i == j:
                    diag1 += num
                if i + j == 2:
                    diag2 += num

        sum_val = row_sums[0]
        if diag1 != sum_val or diag2 != sum_val:
            return False
        return all(sum_val == row_sum == col_sum for row_sum, col_sum in zip(row_sums, col_sums))

```
```Go []
func numMagicSquaresInside(grid [][]int) int {
    rows, cols := len(grid), len(grid[0])
    count := 0

    for i := 0; i <= rows-3; i++ {
        for j := 0; j <= cols-3; j++ {
            if isMagicSquare(grid, i, j) {
                count++
            }
        }
    }

    return count
}

func isMagicSquare(grid [][]int, row, col int) bool {
    usedNumbers := 0
    rowSums := [3]int{}
    colSums := [3]int{}
    diag1, diag2 := 0, 0

    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            num := grid[row+i][col+j]
            
            if num < 1 || num > 9 {
                return false
            }
            
            bit := 1 << uint(num)
            if (usedNumbers & bit) != 0 {
                return false
            }
            usedNumbers |= bit

            rowSums[i] += num
            colSums[j] += num
            if i == j {
                diag1 += num
            }
            if i+j == 2 {
                diag2 += num
            }
        }
    }

    sum := rowSums[0]
    if diag1 != sum || diag2 != sum {
        return false
    }
    for i := 0; i < 3; i++ {
        if rowSums[i] != sum || colSums[i] != sum {
            return false
        }
    }

    return true
}

```
```Rust []
impl Solution {
    pub fn num_magic_squares_inside(grid: Vec<Vec<i32>>) -> i32 {
        let rows = grid.len();
        if rows < 3 {
            return 0;
        }
        let cols = grid[0].len();
        if cols < 3 {
            return 0;
        }

        let mut count = 0;

        for i in 0..=rows-3 {
            for j in 0..=cols-3 {
                if Self::is_magic_square(&grid, i, j) {
                    count += 1;
                }
            }
        }

        count
    }

    fn is_magic_square(grid: &Vec<Vec<i32>>, row: usize, col: usize) -> bool {
        let mut used_numbers = 0;
        let mut row_sums = [0; 3];
        let mut col_sums = [0; 3];
        let (mut diag1, mut diag2) = (0, 0);

        for i in 0..3 {
            for j in 0..3 {
                let num = grid[row + i][col + j];
                
                if num < 1 || num > 9 {
                    return false;
                }
                
                let bit = 1 << num;
                if (used_numbers & bit) != 0 {
                    return false;
                }
                used_numbers |= bit;

                row_sums[i] += num;
                col_sums[j] += num;
                if i == j {
                    diag1 += num;
                }
                if i + j == 2 {
                    diag2 += num;
                }
            }
        }

        let sum = row_sums[0];
        if diag1 != sum || diag2 != sum {
            return false;
        }
        for i in 0..3 {
            if row_sums[i] != sum || col_sums[i] != sum {
                return false;
            }
        }

        true
    }
}

```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
};

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
function isMagicSquare(grid, row, col) {
    let usedNumbers = 0;
    const rowSums = [0, 0, 0];
    const colSums = [0, 0, 0];
    let diag1 = 0, diag2 = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const num = grid[row + i][col + j];
            
            if (num < 1 || num > 9) return false;
            
            const bit = 1 << num;
            if ((usedNumbers & bit) !== 0) return false;
            usedNumbers |= bit;

            rowSums[i] += num;
            colSums[j] += num;
            if (i === j) diag1 += num;
            if (i + j === 2) diag2 += num;
        }
    }

    const sum = rowSums[0];
    if (diag1 !== sum || diag2 !== sum) return false;
    for (let i = 0; i < 3; i++) {
        if (rowSums[i] !== sum || colSums[i] !== sum) return false;
    }

    return true;
}

```

---
# Approach 3

# Intuition

Instead of checking each subgrid against the general definition of a magic square, we leverage specific characteristics that all 3x3 magic squares must possess. This approach significantly reduces the complexity of our validation process.

Key observations about 3x3 magic squares:

1. The sum of each row, column, and diagonal must be 15. This is because the sum of all numbers from 1 to 9 is 45, and this sum must be evenly distributed across three rows (or columns).

2. The middle element must always be 5. This is because 5 is the only number that appears in four sums (middle row, middle column, and both diagonals).

3. The corner elements must be even numbers (2, 4, 6, 8), as these are the only elements that appear in exactly three sums each (one row, one column, and one diagonal).

4. The remaining edge elements must be odd numbers (1, 3, 7, 9), as these appear in exactly two sums each (one row and one column).

5. Most crucially, the border elements of all valid 3x3 magic squares follow a specific cyclic pattern: 2, 9, 4, 3, 8, 1, 6, 7. This sequence can start at any corner and proceed either clockwise or counterclockwise.

These observations allow us to create a much more efficient validation process, focusing on checking only these specific properties rather than calculating and comparing all possible sums.

## Approach

Our approach can be broken down into several key components:

### 1. Grid Traversal

Similar to the bitwise approach, we start by systematically examining every possible 3x3 subgrid within the larger input grid:

```java
for (int i = 0; i < grid.length - 2; i++) {
    for (int j = 0; j < grid[0].length - 2; j++) {
        if (isMagicSquare(grid, i, j)) {
            count++;
        }
    }
}
```

This nested loop structure ensures we consider every possible 3x3 subgrid in the input.

### 2. Magic Square Validation

The core of our approach lies in the `isMagicSquare` method, which efficiently validates each 3x3 subgrid:

```java
private boolean isMagicSquare(int[][] grid, int row, int col) {
    // Check if the middle element is 5
    if (grid[row + 1][col + 1] != 5) {
        return false;
    }

    // Get the border elements
    int[] border = getBorderElements(grid, row, col);

    // Check if the border follows the expected sequence
    String[] expectedSequences = {"2943816729438167", "7618349276183492"};
    for (String sequence : expectedSequences) {
        if (isValidBorderSequence(border, sequence)) {
            return true;
        }
    }
    return false;
}
```

This method performs two crucial checks:

### 2.1 Middle Element Check

We first check if the middle element of the subgrid is 5. This is a necessary condition for a 3x3 magic square, based on our earlier observations. If this condition is not met, we can immediately return false, as the subgrid cannot be a magic square.

### 2.2 Border Sequence Check

If the middle element is 5, we then check if the border elements follow one of the expected sequences. This is where the power of our approach becomes evident. Instead of calculating and comparing sums, we're checking if the border elements match a known pattern.

### 3. Border Element Extraction

To facilitate the border sequence check, we extract the border elements into an array:

```java
private int[] getBorderElements(int[][] grid, int row, int col) {
    int[] border = new int[8];
    int[] borderIndices = {0, 1, 2, 5, 8, 7, 6, 3};
    for (int i = 0; i < borderIndices.length; i++) {
        border[i] = grid[row + borderIndices[i] / 3][col + borderIndices[i] % 3];
    }
    return border;
}
```

This method cleverly uses a predefined array of indices to extract the border elements in clockwise order, starting from the top-left corner. The use of integer division and modulo operations allows us to map these indices to the correct positions in the 3x3 subgrid.

### 4. Border Sequence Validation

Finally, we check if the extracted border sequence matches one of the expected patterns:

```java
private boolean isValidBorderSequence(int[] border, String expectedSequence) {
    StringBuilder borderStr = new StringBuilder();
    for (int num : border) {
        borderStr.append(num);
    }
    return expectedSequence.contains(borderStr.toString());
}
```

This method converts the border array to a string and checks if it's a substring of one of the expected sequences. The expected sequences are defined as:

```java
String[] expectedSequences = {"2943816729438167", "7618349276183492"};
```

These sequences represent the two possible directions (clockwise and counterclockwise) that the border elements can follow, repeated twice to account for all possible starting positions.

## Complexity Analysis

### Time Complexity O(R*C)

The time complexity of this algorithm can be analyzed as follows:

1. Grid Traversal: We iterate over every possible starting position for a 3x3 subgrid. In a grid of size R x C, there are (R-2) * (C-2) such positions. This gives us O((R-2)(C-2)) iterations.

2. Magic Square Validation: For each 3x3 subgrid, we perform the following operations:
   - Check the middle element: O(1)
   - Extract border elements: O(1) (always 8 elements)
   - Check border sequence: O(1) (comparing fixed-length strings)

Therefore, the time complexity of validating a single 3x3 subgrid is O(1).

Combining these factors, our overall time complexity is O(RC) where R and C are the number of rows and columns in the input grid, respectively.

This complexity is identical to the bitwise approach, but the constant factor is likely to be smaller due to the reduced number of operations per subgrid.

### Space Complexity O(1)

The space complexity of our algorithm is constant, O(1). This is because we use a fixed amount of additional space regardless of the input size:

1. We use a fixed-size array (`border`) of length 8 to store border elements.
2. We use two fixed-length strings to store the expected sequences.
3. We use a StringBuilder to construct the border sequence string.
4. We use a constant number of loop variables and other temporary variables.

All of these space requirements are independent of the input grid size, resulting in a constant space complexity.




### Code 

```Java []
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length - 2; i++) {
            for (int j = 0; j < grid[0].length - 2; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }
        return count;
    }

    private boolean isMagicSquare(int[][] grid, int row, int col) {
        // Check if the middle element is 5
        if (grid[row + 1][col + 1] != 5) {
            return false;
        }

        // Get the border elements
        int[] border = getBorderElements(grid, row, col);

        // Check if the border follows the expected sequence
        String[] expectedSequences = {"2943816729438167", "7618349276183492"};
        for (String sequence : expectedSequences) {
            if (isValidBorderSequence(border, sequence)) {
                return true;
            }
        }

        return false;
    }

    private int[] getBorderElements(int[][] grid, int row, int col) {
        int[] border = new int[8];
        int[] borderIndices = {0, 1, 2, 5, 8, 7, 6, 3};
        for (int i = 0; i < borderIndices.length; i++) {
            border[i] = grid[row + borderIndices[i] / 3][col + borderIndices[i] % 3];
        }
        return border;
    }

    private boolean isValidBorderSequence(int[] border, String expectedSequence) {
        StringBuilder borderStr = new StringBuilder();
        for (int num : border) {
            borderStr.append(num);
        }
        return expectedSequence.contains(borderStr.toString());
    }
}
```
```C++ []
class Solution {
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int count = 0;
        int m = grid.size();
        int n = grid[0].size();
        for (int i = 0; i + 2 < m; i++) {
            for (int j = 0; j + 2 < n; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }
        return count;
    }

private:
    bool isMagicSquare(vector<vector<int>>& grid, int row, int col) {
        // Check if the middle element is 5
        if (grid[row + 1][col + 1] != 5) {
            return false;
        }

        // Flattened indices for bordering elements of 3x3 grid
        vector<int> borderIndices = {0, 1, 2, 5, 8, 7, 6, 3};
        string border = "";
        for (int i : borderIndices) {
            int num = grid[row + i / 3][col + i % 3];
            border += to_string(num);
        }

        // Expected sequences for a valid magic square
        string expectedSequence1 = "2943816729438167";
        string expectedSequence2 = "7618349276183492";

        // Check if the border sequence matches either of the expected sequences
        return (expectedSequence1.find(border) != string::npos ||
                expectedSequence2.find(border) != string::npos);
    }
};


```
```Python []
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        count = 0
        for i in range(len(grid) - 2):
            for j in range(len(grid[0]) - 2):
                if self.is_magic_square(grid, i, j):
                    count += 1
        return count

    def is_magic_square(self, grid: List[List[int]], row: int, col: int) -> bool:
        # Check if the middle element is 5
        if grid[row + 1][col + 1] != 5:
            return False

        # Check the border elements
        border = self.get_border_elements(grid, row, col)

        # Check if the border follows the expected sequence
        expected_sequences = ["2943816729438167", "7618349276183492"]
        for sequence in expected_sequences:
            if self.is_valid_border_sequence(border, sequence):
                return True

        return False

    def get_border_elements(self, grid: List[List[int]], row: int, col: int) -> List[int]:
        border = []
        border_indices = [0, 1, 2, 5, 8, 7, 6, 3]
        for i in border_indices:
            border.append(grid[row + i // 3][col + i % 3])
        return border

    def is_valid_border_sequence(self, border: List[int], expected_sequence: str) -> bool:
        border_str = "".join(map(str, border))
        return border_str in expected_sequence
```

```Go []
func numMagicSquaresInside(grid [][]int) int {
    count := 0
    for i := 0; i < len(grid)-2; i++ {
        for j := 0; j < len(grid[0])-2; j++ {
            if isMagicSquare(grid, i, j) {
                count++
            }
        }
    }
    return count
}

func isMagicSquare(grid [][]int, row, col int) bool {
    // Check if the middle element is 5
    if grid[row+1][col+1] != 5 {
        return false
    }

    // Get the border elements
    border := getBorderElements(grid, row, col)

    // Check if the border follows the expected sequence
    expectedSequences := []string{"2943816729438167", "7618349276183492"}
    for _, sequence := range expectedSequences {
        if isValidBorderSequence(border, sequence) {
            return true
        }
    }

    return false
}

func getBorderElements(grid [][]int, row, col int) []int {
    border := make([]int, 8)
    borderIndices := []int{0, 1, 2, 5, 8, 7, 6, 3}
    for i, idx := range borderIndices {
        border[i] = grid[row+idx/3][col+idx%3]
    }
    return border
}

func isValidBorderSequence(border []int, expectedSequence string) bool {
    borderStr := ""
    for _, num := range border {
        borderStr += strconv.Itoa(num)
    }
    return strings.Contains(expectedSequence, borderStr)
}

```
```Rust []


impl Solution {
    pub fn num_magic_squares_inside(grid: Vec<Vec<i32>>) -> i32 {
        let mut count = 0;
        let m = grid.len();
        
        if m < 3 || grid[0].len() < 3 {
            return 0; // Early return if grid dimensions are too small
        }

        let n = grid[0].len();

        for i in 0..m - 2 {
            for j in 0..n - 2 {
                if Solution::is_magic_square(&grid, i, j) {
                    count += 1;
                }
            }
        }

        count
    }

    fn is_magic_square(grid: &Vec<Vec<i32>>, row: usize, col: usize) -> bool {
        // Check if the middle element is 5
        if grid[row + 1][col + 1] != 5 {
            return false;
        }

        // Flattened indices for bordering elements of 3x3 grid
        let border_indices = vec![0, 1, 2, 5, 8, 7, 6, 3];
        let mut border = String::new();
        for i in &border_indices {
            let num = grid[row + i / 3][col + i % 3];
            border.push_str(&num.to_string());
        }

        // Expected sequences for a valid magic square
        let expected_sequence1 = "2943816729438167";
        let expected_sequence2 = "7618349276183492";

        // Check if the border sequence matches either of the expected sequences
        expected_sequence1.contains(&border) || expected_sequence2.contains(&border)
    }
}


```

```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }
    return count;
};

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @return {boolean}
 */
function isMagicSquare(grid, row, col) {
    // Check if the middle element is 5
    if (grid[row + 1][col + 1] !== 5) {
        return false;
    }

    // Get the border elements
    let border = getBorderElements(grid, row, col);

    // Check if the border follows the expected sequence
    let expectedSequences = ["2943816729438167", "7618349276183492"];
    for (let sequence of expectedSequences) {
        if (isValidBorderSequence(border, sequence)) {
            return true;
        }
    }

    return false;
}

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @return {number[]}
 */
function getBorderElements(grid, row, col) {
    let border = [];
    let borderIndices = [0, 1, 2, 5, 8, 7, 6, 3];
    for (let i of borderIndices) {
        border.push(grid[row + Math.floor(i / 3)][col + (i % 3)]);
    }
    return border;
}

/**
 * @param {number[]} border
 * @param {string} expectedSequence
 * @return {boolean}
 */
function isValidBorderSequence(border, expectedSequence) {
    let borderStr = border.join('');
    return expectedSequence.includes(borderStr);
}

```


---


# Approach 4

## Intuition

This approach leverages two key insights:

1. The Magic Constant: In a 3x3 magic square, the sum of each row, column, and diagonal must be 15. This is known as the "magic constant" for 3x3 magic squares.

2. Prefix Sum Arrays: By precomputing prefix sum arrays for rows and columns, we can efficiently calculate the sum of any subarray in constant time. 

## Approach

Our solution can be broken down into several key components:

### 1. Prefix Sum Computation

We start by precomputing two 2D prefix sum arrays:
Prefix sum arrays allow us to calculate the sum of any contiguous subarray in constant time. This property is particularly valuable for our problem, where we need to frequently compute sums of rows and columns and By precomputing these sums, we trade upfront calculation time for faster repeated access later. This is especially beneficial when we need to check multiple subgrids within the larger grid.


```java
int[][] rowPrefixSum = new int[rows + 1][cols + 1];
int[][] colPrefixSum = new int[rows + 1][cols + 1];
for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= cols; j++) {
        rowPrefixSum[i][j] = rowPrefixSum[i][j-1] + grid[i-1][j-1];
        colPrefixSum[i][j] = colPrefixSum[i-1][j] + grid[i-1][j-1];
    }
}
```

- `rowPrefixSum[i][j]` represents the sum of all elements in row `i` from column 1 to `j`.
- `colPrefixSum[i][j]` represents the sum of all elements in column `j` from row 1 to `i`.

These prefix sum arrays allow us to calculate the sum of any subarray in constant time.

### 2. Grid Traversal

We then traverse the grid, checking each 3x3 subgrid: Similar to other approaches, we systematically examine each potential 3x3 subgrid in the larger grid. The difference lies in how we validate each subgrid.

```java
for (int i = 0; i <= rows - GRID_SIZE; i++) {
    for (int j = 0; j <= cols - GRID_SIZE; j++) {
        if (isMagicSquare(grid, rowPrefixSum, colPrefixSum, i, j)) {
            count++;
        }
    }
}
```

### 3. Magic Square Validation

The core of our approach lies in the `isMagicSquare` method: We still need to verify that each subgrid contains the numbers 1-9 exactly once.

### 3.1 Number Range and Uniqueness Check

We first ensure that all numbers in the subgrid are between 1 and 9 and are unique:

```java
boolean[] used = new boolean[10];
for (int i = 0; i < GRID_SIZE; i++) {
    for (int j = 0; j < GRID_SIZE; j++) {
        int num = grid[startRow + i][startCol + j];
        if (num < 1 || num > 9 || used[num]) return false;
        used[num] = true;
    }
}
```

### 3.2 Row Sum Check

We use the row prefix sum array to efficiently check if each row sum equals the magic constant: 

```java
for (int i = 0; i < GRID_SIZE; i++) {
    int rowSum = rowPrefixSum[startRow + i + 1][startCol + GRID_SIZE] - rowPrefixSum[startRow + i + 1][startCol];
    if (rowSum != MAGIC_CONSTANT) return false;
}
```

### 3.3 Column Sum Check

Similarly, we use the column prefix sum array for column sums:

```java
for (int j = 0; j < GRID_SIZE; j++) {
    int colSum = colPrefixSum[startRow + GRID_SIZE][startCol + j + 1] - colPrefixSum[startRow][startCol + j + 1];
    if (colSum != MAGIC_CONSTANT) return false;
}
```

### 3.4 Diagonal Sum Checks

For diagonals, we calculate the sums directly:

```java
int mainDiagSum = 0;
for (int i = 0; i < GRID_SIZE; i++) {
    mainDiagSum += grid[startRow + i][startCol + i];
}
if (mainDiagSum != MAGIC_CONSTANT) return false;

int antiDiagSum = 0;
for (int i = 0; i < GRID_SIZE; i++) {
    antiDiagSum += grid[startRow + i][startCol + GRID_SIZE - 1 - i];
}
return antiDiagSum == MAGIC_CONSTANT;
```

## Complexity Analysis

### Time Complexity O(R*C)

1. Prefix Sum Computation: O(RC), where R is the number of rows and C is the number of columns in the grid.
2. Grid Traversal and Magic Square Validation: O((R-2)(C-2)), as we check each 3x3 subgrid.
3. Each Magic Square Validation: O(1), as we use constant-time operations for sum checks.

The overall time complexity is O(RC), which is asymptotically the same as previous approaches, but with different constant factors.

### Space Complexity O(R*C)

The space complexity is O(RC) due to the two prefix sum arrays. This is higher than the previous approaches, which used O(1) extra space.


### Code


```Java []
class Solution {
    private static final int MAGIC_CONSTANT = 15;
    private static final int GRID_SIZE = 3;

    public int numMagicSquaresInside(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        if (rows < GRID_SIZE || cols < GRID_SIZE) return 0;

        // Precompute row and column prefix sums
        int[][] rowPrefixSum = new int[rows + 1][cols + 1];
        int[][] colPrefixSum = new int[rows + 1][cols + 1];
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                rowPrefixSum[i][j] = rowPrefixSum[i][j-1] + grid[i-1][j-1];
                colPrefixSum[i][j] = colPrefixSum[i-1][j] + grid[i-1][j-1];
            }
        }

        int count = 0;
        for (int i = 0; i <= rows - GRID_SIZE; i++) {
            for (int j = 0; j <= cols - GRID_SIZE; j++) {
                if (isMagicSquare(grid, rowPrefixSum, colPrefixSum, i, j)) {
                    count++;
                }
            }
        }
        return count;
    }

    private boolean isMagicSquare(int[][] grid, int[][] rowPrefixSum, int[][] colPrefixSum, int startRow, int startCol) {
        // Check if all numbers are between 1 and 9
        boolean[] used = new boolean[10];
        for (int i = 0; i < GRID_SIZE; i++) {
            for (int j = 0; j < GRID_SIZE; j++) {
                int num = grid[startRow + i][startCol + j];
                if (num < 1 || num > 9 || used[num]) return false;
                used[num] = true;
            }
        }

        // Check row sums
        for (int i = 0; i < GRID_SIZE; i++) {
            int rowSum = rowPrefixSum[startRow + i + 1][startCol + GRID_SIZE] - rowPrefixSum[startRow + i + 1][startCol];
            if (rowSum != MAGIC_CONSTANT) return false;
        }

        // Check column sums
        for (int j = 0; j < GRID_SIZE; j++) {
            int colSum = colPrefixSum[startRow + GRID_SIZE][startCol + j + 1] - colPrefixSum[startRow][startCol + j + 1];
            if (colSum != MAGIC_CONSTANT) return false;
        }

        // Check main diagonal
        int mainDiagSum = 0;
        for (int i = 0; i < GRID_SIZE; i++) {
            mainDiagSum += grid[startRow + i][startCol + i];
        }
        if (mainDiagSum != MAGIC_CONSTANT) return false;

        // Check anti-diagonal
        int antiDiagSum = 0;
        for (int i = 0; i < GRID_SIZE; i++) {
            antiDiagSum += grid[startRow + i][startCol + GRID_SIZE - 1 - i];
        }
        return antiDiagSum == MAGIC_CONSTANT;
    }
}
```

```C++ []
class Solution {
private:
    static const int MAGIC_CONSTANT = 15;
    static const int GRID_SIZE = 3;

    bool isMagicSquare(const vector<vector<int>>& grid, const vector<vector<int>>& rowPrefixSum, 
                       const vector<vector<int>>& colPrefixSum, int startRow, int startCol) {
        vector<bool> used(10, false);
        for (int i = 0; i < GRID_SIZE; i++) {
            for (int j = 0; j < GRID_SIZE; j++) {
                int num = grid[startRow + i][startCol + j];
                if (num < 1 || num > 9 || used[num]) return false;
                used[num] = true;
            }
        }

        for (int i = 0; i < GRID_SIZE; i++) {
            int rowSum = rowPrefixSum[startRow + i + 1][startCol + GRID_SIZE] - rowPrefixSum[startRow + i + 1][startCol];
            if (rowSum != MAGIC_CONSTANT) return false;
        }

        for (int j = 0; j < GRID_SIZE; j++) {
            int colSum = colPrefixSum[startRow + GRID_SIZE][startCol + j + 1] - colPrefixSum[startRow][startCol + j + 1];
            if (colSum != MAGIC_CONSTANT) return false;
        }

        int mainDiagSum = 0, antiDiagSum = 0;
        for (int i = 0; i < GRID_SIZE; i++) {
            mainDiagSum += grid[startRow + i][startCol + i];
            antiDiagSum += grid[startRow + i][startCol + GRID_SIZE - 1 - i];
        }

        return mainDiagSum == MAGIC_CONSTANT && antiDiagSum == MAGIC_CONSTANT;
    }

public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        if (rows < GRID_SIZE || cols < GRID_SIZE) return 0;

        vector<vector<int>> rowPrefixSum(rows + 1, vector<int>(cols + 1, 0));
        vector<vector<int>> colPrefixSum(rows + 1, vector<int>(cols + 1, 0));

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                rowPrefixSum[i][j] = rowPrefixSum[i][j-1] + grid[i-1][j-1];
                colPrefixSum[i][j] = colPrefixSum[i-1][j] + grid[i-1][j-1];
            }
        }

        int count = 0;
        for (int i = 0; i <= rows - GRID_SIZE; i++) {
            for (int j = 0; j <= cols - GRID_SIZE; j++) {
                if (isMagicSquare(grid, rowPrefixSum, colPrefixSum, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }
};

```
```Python []
class Solution:
    MAGIC_CONSTANT = 15
    GRID_SIZE = 3

    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        if rows < self.GRID_SIZE or cols < self.GRID_SIZE:
            return 0

        row_prefix_sum = [[0] * (cols + 1) for _ in range(rows + 1)]
        col_prefix_sum = [[0] * (cols + 1) for _ in range(rows + 1)]

        for i in range(1, rows + 1):
            for j in range(1, cols + 1):
                row_prefix_sum[i][j] = row_prefix_sum[i][j-1] + grid[i-1][j-1]
                col_prefix_sum[i][j] = col_prefix_sum[i-1][j] + grid[i-1][j-1]

        count = 0
        for i in range(rows - self.GRID_SIZE + 1):
            for j in range(cols - self.GRID_SIZE + 1):
                if self.is_magic_square(grid, row_prefix_sum, col_prefix_sum, i, j):
                    count += 1

        return count

    def is_magic_square(self, grid, row_prefix_sum, col_prefix_sum, start_row, start_col):
        used = [False] * 10
        for i in range(self.GRID_SIZE):
            for j in range(self.GRID_SIZE):
                num = grid[start_row + i][start_col + j]
                if num < 1 or num > 9 or used[num]:
                    return False
                used[num] = True

        for i in range(self.GRID_SIZE):
            row_sum = row_prefix_sum[start_row + i + 1][start_col + self.GRID_SIZE] - row_prefix_sum[start_row + i + 1][start_col]
            if row_sum != self.MAGIC_CONSTANT:
                return False

        for j in range(self.GRID_SIZE):
            col_sum = col_prefix_sum[start_row + self.GRID_SIZE][start_col + j + 1] - col_prefix_sum[start_row][start_col + j + 1]
            if col_sum != self.MAGIC_CONSTANT:
                return False

        main_diag_sum = sum(grid[start_row + i][start_col + i] for i in range(self.GRID_SIZE))
        anti_diag_sum = sum(grid[start_row + i][start_col + self.GRID_SIZE - 1 - i] for i in range(self.GRID_SIZE))

        return main_diag_sum == self.MAGIC_CONSTANT and anti_diag_sum == self.MAGIC_CONSTANT

```
```GO []
const (
    MAGIC_CONSTANT = 15
    GRID_SIZE      = 3
)

func numMagicSquaresInside(grid [][]int) int {
    rows, cols := len(grid), len(grid[0])
    if rows < GRID_SIZE || cols < GRID_SIZE {
        return 0
    }

    rowPrefixSum := make([][]int, rows+1)
    colPrefixSum := make([][]int, rows+1)
    for i := range rowPrefixSum {
        rowPrefixSum[i] = make([]int, cols+1)
        colPrefixSum[i] = make([]int, cols+1)
    }

    for i := 1; i <= rows; i++ {
        for j := 1; j <= cols; j++ {
            rowPrefixSum[i][j] = rowPrefixSum[i][j-1] + grid[i-1][j-1]
            colPrefixSum[i][j] = colPrefixSum[i-1][j] + grid[i-1][j-1]
        }
    }

    count := 0
    for i := 0; i <= rows-GRID_SIZE; i++ {
        for j := 0; j <= cols-GRID_SIZE; j++ {
            if isMagicSquare(grid, rowPrefixSum, colPrefixSum, i, j) {
                count++
            }
        }
    }

    return count
}

func isMagicSquare(grid [][]int, rowPrefixSum, colPrefixSum [][]int, startRow, startCol int) bool {
    used := make([]bool, 10)
    for i := 0; i < GRID_SIZE; i++ {
        for j := 0; j < GRID_SIZE; j++ {
            num := grid[startRow+i][startCol+j]
            if num < 1 || num > 9 || used[num] {
                return false
            }
            used[num] = true
        }
    }

    for i := 0; i < GRID_SIZE; i++ {
        rowSum := rowPrefixSum[startRow+i+1][startCol+GRID_SIZE] - rowPrefixSum[startRow+i+1][startCol]
        if rowSum != MAGIC_CONSTANT {
            return false
        }
    }

    for j := 0; j < GRID_SIZE; j++ {
        colSum := colPrefixSum[startRow+GRID_SIZE][startCol+j+1] - colPrefixSum[startRow][startCol+j+1]
        if colSum != MAGIC_CONSTANT {
            return false
        }
    }

    mainDiagSum, antiDiagSum := 0, 0
    for i := 0; i < GRID_SIZE; i++ {
        mainDiagSum += grid[startRow+i][startCol+i]
        antiDiagSum += grid[startRow+i][startCol+GRID_SIZE-1-i]
    }

    return mainDiagSum == MAGIC_CONSTANT && antiDiagSum == MAGIC_CONSTANT
}

```
```Rust []
impl Solution {
    const MAGIC_CONSTANT: i32 = 15;
    const GRID_SIZE: usize = 3;

    pub fn num_magic_squares_inside(grid: Vec<Vec<i32>>) -> i32 {
        let (rows, cols) = (grid.len(), grid[0].len());
        if rows < Self::GRID_SIZE || cols < Self::GRID_SIZE {
            return 0;
        }

        let mut row_prefix_sum = vec![vec![0; cols + 1]; rows + 1];
        let mut col_prefix_sum = vec![vec![0; cols + 1]; rows + 1];

        for i in 1..=rows {
            for j in 1..=cols {
                row_prefix_sum[i][j] = row_prefix_sum[i][j-1] + grid[i-1][j-1];
                col_prefix_sum[i][j] = col_prefix_sum[i-1][j] + grid[i-1][j-1];
            }
        }

        let mut count = 0;
        for i in 0..=rows-Self::GRID_SIZE {
            for j in 0..=cols-Self::GRID_SIZE {
                if Self::is_magic_square(&grid, &row_prefix_sum, &col_prefix_sum, i, j) {
                    count += 1;
                }
            }
        }

        count
    }

    fn is_magic_square(grid: &Vec<Vec<i32>>, row_prefix_sum: &Vec<Vec<i32>>, col_prefix_sum: &Vec<Vec<i32>>, start_row: usize, start_col: usize) -> bool {
        let mut used = [false; 10];
        for i in 0..Self::GRID_SIZE {
            for j in 0..Self::GRID_SIZE {
                let num = grid[start_row + i][start_col + j] as usize;
                if num < 1 || num > 9 || used[num] {
                    return false;
                }
                used[num] = true;
            }
        }

        for i in 0..Self::GRID_SIZE {
            let row_sum = row_prefix_sum[start_row + i + 1][start_col + Self::GRID_SIZE] - row_prefix_sum[start_row + i + 1][start_col];
            if row_sum != Self::MAGIC_CONSTANT {
                return false;
            }
        }

        for j in 0..Self::GRID_SIZE {
            let col_sum = col_prefix_sum[start_row + Self::GRID_SIZE][start_col + j + 1] - col_prefix_sum[start_row][start_col + j + 1];
            if col_sum != Self::MAGIC_CONSTANT {
                return false;
            }
        }

        let main_diag_sum: i32 = (0..Self::GRID_SIZE).map(|i| grid[start_row + i][start_col + i]).sum();
        let anti_diag_sum: i32 = (0..Self::GRID_SIZE).map(|i| grid[start_row + i][start_col + Self::GRID_SIZE - 1 - i]).sum();

        main_diag_sum == Self::MAGIC_CONSTANT && anti_diag_sum == Self::MAGIC_CONSTANT
    }
}

```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const MAGIC_CONSTANT = 15;
    const GRID_SIZE = 3;

    const rows = grid.length;
    const cols = grid[0].length;
    
    if (rows < GRID_SIZE || cols < GRID_SIZE) {
        return 0;
    }

    const rowPrefixSum = Array(rows + 1).fill().map(() => Array(cols + 1).fill(0));
    const colPrefixSum = Array(rows + 1).fill().map(() => Array(cols + 1).fill(0));

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            rowPrefixSum[i][j] = rowPrefixSum[i][j-1] + grid[i-1][j-1];
            colPrefixSum[i][j] = colPrefixSum[i-1][j] + grid[i-1][j-1];
        }
    }

    let count = 0;
    for (let i = 0; i <= rows - GRID_SIZE; i++) {
        for (let j = 0; j <= cols - GRID_SIZE; j++) {
            if (isMagicSquare(grid, rowPrefixSum, colPrefixSum, i, j)) {
                count++;
            }
        }
    }

    return count;
};

function isMagicSquare(grid, rowPrefixSum, colPrefixSum, startRow, startCol) {
    const MAGIC_CONSTANT = 15;
    const GRID_SIZE = 3;
    const used = Array(10).fill(false);

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            const num = grid[startRow + i][startCol + j];
            if (num < 1 || num > 9 || used[num]) {
                return false;
            }
            used[num] = true;
        }
    }

    for (let i = 0; i < GRID_SIZE; i++) {
        const rowSum = rowPrefixSum[startRow + i + 1][startCol + GRID_SIZE] - rowPrefixSum[startRow + i + 1][startCol];
        if (rowSum !== MAGIC_CONSTANT) {
            return false;
        }
    }

    for (let j = 0; j < GRID_SIZE; j++) {
        const colSum = colPrefixSum[startRow + GRID_SIZE][startCol + j + 1] - colPrefixSum[startRow][startCol + j + 1];
        if (colSum !== MAGIC_CONSTANT) {
            return false;
        }
    }

    const mainDiagSum = Array(GRID_SIZE).fill().reduce((sum, _, i) => sum + grid[startRow + i][startCol + i], 0);
    const antiDiagSum = Array(GRID_SIZE).fill().reduce((sum, _, i) => sum + grid[startRow + i][startCol + GRID_SIZE - 1 - i], 0);

    return mainDiagSum === MAGIC_CONSTANT && antiDiagSum === MAGIC_CONSTANT;
}

```

---
# Approach 5


## Intuition

The problem at hand involves finding 3x3 magic squares within a larger grid of numbers. A magic square is a grid where the sum of each row, each column, and both main diagonals are equal. In the case of a 3x3 magic square, it must contain the numbers 1 through 9 exactly once, with each row, column, and diagonal summing to 15.

Theis algorithm uses pre-computation, efficient storage, and grid traversal to solve this problem efficiently. Let's break down each component of the solution in detail.

## 1. Pre-computation of Magic Squares

### The Concept of Pre-computation

Pre-computation is a technique where we perform some calculations in advance and store the results for quick access later. In this case, we pre-compute all possible 3x3 magic squares. This is feasible because there are only a limited number of valid 3x3 magic squares.

### The Base Magic Square

We start with a known 3x3 magic square:

```
4 9 2
3 5 7
8 1 6
```

This square has some interesting properties:
- The center is always 5 in a 3x3 magic square.
- The corners sum to 4 + 2 + 8 + 6 = 20.
- The middle edges sum to 9 + 3 + 1 + 7 = 20.

### Generating All Magic Squares

From this base square, we can generate all other valid 3x3 magic squares through a series of rotations and reflections. Here's how:

1. Rotation: We rotate the square 90 degrees clockwise three times. Each rotation gives us a new valid magic square.

2. Reflection: After the rotations, we reflect the original square (e.g., flip it horizontally or vertically).

3. Rotation of Reflection: We then rotate this reflected square 90 degrees clockwise three times.

This process generates all 8 possible 3x3 magic squares. Let's look at the rotation process in detail:

```
Original:     90\xB0 Rotation:   180\xB0 Rotation:  270\xB0 Rotation:
4 9 2         8 3 4           6 1 8           2 7 6
3 5 7   -->   1 5 9    -->    7 5 3    -->    9 5 1
8 1 6         6 7 2           2 9 4           4 3 8

Reflection:   90\xB0 Rotation:   180\xB0 Rotation:  270\xB0 Rotation:
2 9 4         6 7 2           8 1 6           4 3 8
3 5 7   -->   1 5 9    -->    7 5 3    -->    9 5 1
6 1 8         8 3 4           4 9 2           2 7 6
```

### Efficient Storage: Hashing Magic Squares

To efficiently store and compare these magic squares, we use a hashing technique. Each 3x3 grid is converted into a single integer by concatenating its numbers row by row.

For example, the base magic square would be hashed as: 492357816.

We store these hash values in a HashSet for O(1) lookup time. The HashSet in Java provides constant-time performance for basic operations (add, remove, contains), assuming the hash function disperses the elements properly among the buckets.

## 2. Processing the Input Grid

### The Sliding Window Approach

To find magic squares within the larger input grid, we use a sliding window approach. This involves moving a 3x3 "window" across the entire grid, checking each possible 3x3 subgrid.

Here's how it works:

1. Start at the top-left corner of the input grid.
2. Consider the 3x3 subgrid starting at this position.
3. Check if this subgrid is a magic square (more on this in the next section).
4. Move the window one column to the right and repeat steps 2-3.
5. When we reach the end of a row, move down one row and start again from the left.

This process ensures we check every possible 3x3 subgrid within the input grid.

### Checking Each Subgrid

For each 3x3 subgrid, we perform two levels of checks:

1. Quick Validation:
   - Check if all numbers in the subgrid are between 1 and 9.
   - This is a fast pre-check to quickly eliminate many invalid subgrids.

2. Magic Square Check:
   - If the quick validation passes, hash the subgrid.
   - Check if this hash exists in our pre-computed set of valid magic square hashes.

This two-step process allows us to quickly discard many invalid subgrids without performing the more expensive hash computation and lookup.

## 3. Detailed Implementation

Let's break down the key components of the implementation:

### Static Initialization

The class uses a static initializer to pre-compute all valid magic squares:

```java
private static final Set<Integer> magicSquares = new HashSet<>();

static {
    int[][] base = {{4,9,2}, {3,5,7}, {8,1,6}};
    for (int i = 0; i < 8; i++) {
        int[][] rotated = rotate(base);
        magicSquares.add(hash(rotated));
        base = rotated;
        if (i == 3) {
            base = reflect(base);
        }
    }
}
```

This code:
1. Defines the base magic square.
2. Rotates it 4 times, hashing and storing each rotation.
3. Reflects the square.
4. Rotates the reflected square 4 times, hashing and storing each rotation.

### Main Solution Method

The `numMagicSquaresInside` method is the main entry point:

```java
public int numMagicSquaresInside(int[][] grid) {
    int rows = grid.length, cols = grid[0].length;
    int count = 0;
    for (int i = 0; i <= rows - 3; i++) {
        for (int j = 0; j <= cols - 3; j++) {
            if (isValid(grid, i, j) && magicSquares.contains(hash(extractSubgrid(grid, i, j)))) {
                count++;
            }
        }
    }
    return count;
}
```

This method:
1. Iterates over all possible 3x3 subgrids in the input grid.
2. For each subgrid, it checks if it's valid (contains numbers 1-9) and if its hash is in the pre-computed set of magic square hashes.
3. Counts the number of valid magic squares found.

### Helper Methods

Several helper methods support the main algorithm:

1. `isValid`: Quickly checks if a subgrid contains only numbers 1-9.

```java
private boolean isValid(int[][] grid, int row, int col) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            int num = grid[row + i][col + j];
            if (num < 1 || num > 9) return false;
        }
    }
    return true;
}
```

2. `extractSubgrid`: Extracts a 3x3 subgrid from the main grid.

```java
private int[][] extractSubgrid(int[][] grid, int row, int col) {
    int[][] subgrid = new int[3][3];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            subgrid[i][j] = grid[row + i][col + j];
        }
    }
    return subgrid;
}
```

3. `hash`: Converts a 3x3 grid into a single integer for comparison.

```java
private static int hash(int[][] grid) {
    int hash = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            hash = hash * 10 + grid[i][j];
        }
    }
    return hash;
}
```

4. `rotate`: Rotates a 3x3 grid 90 degrees clockwise.

```java
private static int[][] rotate(int[][] grid) {
    int[][] rotated = new int[3][3];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            rotated[j][2-i] = grid[i][j];
        }
    }
    return rotated;
}
```

5. `reflect`: Reflects a 3x3 grid horizontally.

```java
private static int[][] reflect(int[][] grid) {
    int[][] reflected = new int[3][3];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            reflected[i][2-j] = grid[i][j];
        }
    }
    return reflected;
}
```

## Complexity Analysis


### Time Complexity O(r*c)

The time complexity can be broken down into two parts:

1. Pre-computation:
   - This happens once when the class is loaded.
   - It involves generating 8 magic squares, each of which is a constant-time operation.
   - Time: O(1)

2. Grid Processing:
   - Let r be the number of rows and c be the number of columns in the input grid.
   - We slide a 3x3 window over the grid, which gives us (r-2)*(c-2) positions to check.
   - For each position:
     - Quick validation: O(1) time (always 9 elements)
     - Subgrid extraction: O(1) time (always 9 elements)
     - Hashing: O(1) time (always 9 elements)
     - Hash set lookup: O(1) time on average

Therefore, the overall time complexity is O((r-2)*(c-2)), which simplifies to O(r*c) for grids where r and c are significantly larger than 2.



### Space Complexity O(1)

The space complexity also has two components:

1. Pre-computed Magic Squares:
   - We store 8 hash values in a HashSet.
   - This is a constant amount of extra space: O(1)

2. Algorithm Execution:
   - We use a constant amount of extra space for our sliding window and temporary variables.
   - We don't use any data structures that grow with the input size.

Therefore, the overall space complexity is O(1).


### Code

```Java []
class Solution {
    private static final Set<Integer> magicSquares = new HashSet<>();
    
    static {
        // Pre-compute all possible 3x3 magic squares
        int[][] base = {{4,9,2}, {3,5,7}, {8,1,6}};
        for (int i = 0; i < 8; i++) {
            int[][] rotated = rotate(base);
            magicSquares.add(hash(rotated));
            base = rotated;
            if (i == 3) {
                base = reflect(base);
            }
        }
    }
    
    public int numMagicSquaresInside(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        int count = 0;
        
        for (int i = 0; i <= rows - 3; i++) {
            for (int j = 0; j <= cols - 3; j++) {
                if (isValid(grid, i, j) && magicSquares.contains(hash(extractSubgrid(grid, i, j)))) {
                    count++;
                }
            }
        }
        
        return count;
    }
    
    private boolean isValid(int[][] grid, int row, int col) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int num = grid[row + i][col + j];
                if (num < 1 || num > 9) return false;
            }
        }
        return true;
    }
    
    private int[][] extractSubgrid(int[][] grid, int row, int col) {
        int[][] subgrid = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                subgrid[i][j] = grid[row + i][col + j];
            }
        }
        return subgrid;
    }
    
    private static int hash(int[][] grid) {
        int hash = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                hash = hash * 10 + grid[i][j];
            }
        }
        return hash;
    }
    
    private static int[][] rotate(int[][] grid) {
        int[][] rotated = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                rotated[j][2-i] = grid[i][j];
            }
        }
        return rotated;
    }
    
    private static int[][] reflect(int[][] grid) {
        int[][] reflected = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                reflected[i][2-j] = grid[i][j];
            }
        }
        return reflected;
    }
}

```
```C++ []
class Solution {
private:
    static const unordered_set<int> magicSquares;
    
    static unordered_set<int> generateMagicSquares() {
        vector<vector<int>> base = {{4,9,2}, {3,5,7}, {8,1,6}};
        unordered_set<int> squares;
        for (int i = 0; i < 8; i++) {
            auto rotated = rotate(base);
            squares.insert(hash(rotated));
            base = rotated;
            if (i == 3) {
                base = reflect(base);
            }
        }
        return squares;
    }
    
    static int hash(const vector<vector<int>>& grid) {
        int hash = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                hash = hash * 10 + grid[i][j];
            }
        }
        return hash;
    }
    
    static vector<vector<int>> rotate(const vector<vector<int>>& grid) {
        vector<vector<int>> rotated(3, vector<int>(3));
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                rotated[j][2-i] = grid[i][j];
            }
        }
        return rotated;
    }
    
    static vector<vector<int>> reflect(const vector<vector<int>>& grid) {
        vector<vector<int>> reflected(3, vector<int>(3));
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                reflected[i][2-j] = grid[i][j];
            }
        }
        return reflected;
    }
    
    bool isValid(const vector<vector<int>>& grid, int row, int col) {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int num = grid[row + i][col + j];
                if (num < 1 || num > 9) return false;
            }
        }
        return true;
    }
    
    vector<vector<int>> extractSubgrid(const vector<vector<int>>& grid, int row, int col) {
        vector<vector<int>> subgrid(3, vector<int>(3));
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                subgrid[i][j] = grid[row + i][col + j];
            }
        }
        return subgrid;
    }
    
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int rows = grid.size(), cols = grid[0].size();
        int count = 0;
        
        for (int i = 0; i <= rows - 3; i++) {
            for (int j = 0; j <= cols - 3; j++) {
                if (isValid(grid, i, j) && magicSquares.count(hash(extractSubgrid(grid, i, j)))) {
                    count++;
                }
            }
        }
        
        return count;
    }
};

const unordered_set<int> Solution::magicSquares = Solution::generateMagicSquares();

```


```Python []
class Solution:
    def __init__(self):
        self.magic_squares = self.generate_magic_squares()

    def generate_magic_squares(self):
        base = [[4,9,2], [3,5,7], [8,1,6]]
        squares = set()
        for i in range(8):
            rotated = self.rotate(base)
            squares.add(self.hash(rotated))
            base = rotated
            if i == 3:
                base = self.reflect(base)
        return squares

    def hash(self, grid):
        return int(''.join(str(num) for row in grid for num in row))

    def rotate(self, grid):
        return [[grid[2-j][i] for j in range(3)] for i in range(3)]

    def reflect(self, grid):
        return [row[::-1] for row in grid]

    def is_valid(self, grid, row, col):
        return all(1 <= grid[row+i][col+j] <= 9 for i in range(3) for j in range(3))

    def extract_subgrid(self, grid, row, col):
        return [[grid[row+i][col+j] for j in range(3)] for i in range(3)]

    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        count = 0
        
        for i in range(rows - 2):
            for j in range(cols - 2):
                if self.is_valid(grid, i, j) and self.hash(self.extract_subgrid(grid, i, j)) in self.magic_squares:
                    count += 1
        
        return count
```
```Go []
package main

import (
    "strconv"
)

var magicSquares map[string]bool

func init() {
    magicSquares = make(map[string]bool)
    base := [][]int{{4, 9, 2}, {3, 5, 7}, {8, 1, 6}}
    for i := 0; i < 8; i++ {
        rotated := rotate(base)
        magicSquares[hash(rotated)] = true
        base = rotated
        if i == 3 {
            base = reflect(base)
        }
    }
}

func numMagicSquaresInside(grid [][]int) int {
    rows, cols := len(grid), len(grid[0])
    count := 0

    for i := 0; i <= rows-3; i++ {
        for j := 0; j <= cols-3; j++ {
            if isValid(grid, i, j) && magicSquares[hash(extractSubgrid(grid, i, j))] {
                count++
            }
        }
    }

    return count
}

func isValid(grid [][]int, row, col int) bool {
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            num := grid[row+i][col+j]
            if num < 1 || num > 9 {
                return false
            }
        }
    }
    return true
}

func extractSubgrid(grid [][]int, row, col int) [][]int {
    subgrid := make([][]int, 3)
    for i := range subgrid {
        subgrid[i] = make([]int, 3)
        for j := range subgrid[i] {
            subgrid[i][j] = grid[row+i][col+j]
        }
    }
    return subgrid
}

func hash(grid [][]int) string {
    var hash string
    for _, row := range grid {
        for _, num := range row {
            hash += strconv.Itoa(num)
        }
    }
    return hash
}

func rotate(grid [][]int) [][]int {
    rotated := make([][]int, 3)
    for i := range rotated {
        rotated[i] = make([]int, 3)
        for j := range rotated[i] {
            rotated[i][j] = grid[2-j][i]
        }
    }
    return rotated
}

func reflect(grid [][]int) [][]int {
    reflected := make([][]int, 3)
    for i := range reflected {
        reflected[i] = make([]int, 3)
        for j := range reflected[i] {
            reflected[i][j] = grid[i][2-j]
        }
    }
    return reflected
}

```
```Rust []

use std::collections::HashSet;
use lazy_static::lazy_static;

impl Solution {
    pub fn num_magic_squares_inside(grid: Vec<Vec<i32>>) -> i32 {
        lazy_static! {
            static ref MAGIC_SQUARES: HashSet<String> = {
                let mut set = HashSet::new();
                let mut base = vec![vec![4, 9, 2], vec![3, 5, 7], vec![8, 1, 6]];
                for i in 0..8 {
                    let rotated = Solution::rotate(&base);
                    set.insert(Solution::hash(&rotated));
                    base = rotated;
                    if i == 3 {
                        base = Solution::reflect(&base);
                    }
                }
                set
            };
        }

        let (rows, cols) = (grid.len(), grid[0].len());
        let mut count = 0;

        for i in 0..=rows.saturating_sub(3) {
            for j in 0..=cols.saturating_sub(3) {
                if Solution::is_valid(&grid, i, j) && MAGIC_SQUARES.contains(&Solution::hash(&Solution::extract_subgrid(&grid, i, j))) {
                    count += 1;
                }
            }
        }

        count
    }

    fn is_valid(grid: &Vec<Vec<i32>>, row: usize, col: usize) -> bool {
        if row + 2 >= grid.len() || col + 2 >= grid[0].len() {
            return false;
        }
        for i in 0..3 {
            for j in 0..3 {
                let num = grid[row+i][col+j];
                if num < 1 || num > 9 {
                    return false;
                }
            }
        }
        true
    }

    fn extract_subgrid(grid: &Vec<Vec<i32>>, row: usize, col: usize) -> Vec<Vec<i32>> {
        let mut subgrid = vec![vec![0; 3]; 3];
        for i in 0..3 {
            for j in 0..3 {
                if row+i < grid.len() && col+j < grid[0].len() {
                    subgrid[i][j] = grid[row+i][col+j];
                }
            }
        }
        subgrid
    }

    fn hash(grid: &Vec<Vec<i32>>) -> String {
        grid.iter().flat_map(|row| row.iter()).map(|&num| num.to_string()).collect()
    }

    fn rotate(grid: &Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut rotated = vec![vec![0; 3]; 3];
        for i in 0..3 {
            for j in 0..3 {
                rotated[i][j] = grid[2-j][i];
            }
        }
        rotated
    }

    fn reflect(grid: &Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut reflected = vec![vec![0; 3]; 3];
        for i in 0..3 {
            for j in 0..3 {
                reflected[i][j] = grid[i][2-j];
            }
        }
        reflected
    }
}
```
```JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const magicSquares = new Set();
    
    function init() {
        let base = [[4,9,2], [3,5,7], [8,1,6]];
        for (let i = 0; i < 8; i++) {
            let rotated = rotate(base);
            magicSquares.add(hash(rotated));
            base = rotated;
            if (i === 3) {
                base = reflect(base);
            }
        }
    }
    
    function rotate(grid) {
        let rotated = Array(3).fill().map(() => Array(3).fill(0));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                rotated[j][2-i] = grid[i][j];
            }
        }
        return rotated;
    }
    
    function reflect(grid) {
        let reflected = Array(3).fill().map(() => Array(3).fill(0));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                reflected[i][2-j] = grid[i][j];
            }
        }
        return reflected;
    }
    
    function hash(grid) {
        return grid.flat().join('');
    }
    
    function isValid(grid, row, col) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let num = grid[row + i][col + j];
                if (num < 1 || num > 9) return false;
            }
        }
        return true;
    }
    
    function extractSubgrid(grid, row, col) {
        let subgrid = Array(3).fill().map(() => Array(3).fill(0));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                subgrid[i][j] = grid[row + i][col + j];
            }
        }
        return subgrid;
    }
    
    init();
    
    let count = 0;
    let rows = grid.length, cols = grid[0].length;
    
    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            if (isValid(grid, i, j) && magicSquares.has(hash(extractSubgrid(grid, i, j)))) {
                count++;
            }
        }
    }
    
    return count;
};
```
---
Hey everyone,

**PLEASE DON'T UPVOTE THIS POST AT ALL.**

Look, I write these solutions for myself. It's just easier to post 'em here than keeping them on my computer or throwing them in a GitHub repo. When I need to revise stuff, I can just come back here. Simple.

*Once posts hit the top 4-5 solutions, things get messy real fast. You get all this spam, bots, random unrelated comments, Fake-real and stupid upvote/downvote drama. I want none of that BS.
So if you see this post going above 2-3 upvotes, even a downvote is better than an upvote. If you've got a real question, sure, drop a comment. I'll try to help if I can. If you find the solution helpful, good for you. If you don't, I'm sorry. And if you've got something to add like an advice, optimization, or anything useful just drop a comment. But for god's sake, don't upvote. People have turned LeetCode into some kinda social media, farming likes as if LeetCode's gonna pay them or companies are gonna grab them by the leg and offer them a job. I don't want any of that nonsense.
so please, **DO NOT UPVOTE THIS POST**. I mean it.*



Thanks for getting it.