# Editorial explanation and Proof in Simpler terms | Java | Python | C++ | JavaScript | Go

**Author:** kartikdevsharma_
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5503713/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5503713/)

---

## Problem Statement

1. **The Problem Setup:**
   Imagine you have a grid or table, but you don't know what numbers are in each cell. However, you do know:
   - The sum of each row
   - The sum of each column

2. **Your Task:**
   Your job is to fill in this grid with numbers that make all these sums correct. There are a few rules:
   - You can only use non-negative whole numbers (0 or positive integers)
   - The numbers you put in must make both the row sums and column sums correct

3. **The Input:**
   You're given two lists of numbers:
   - `rowSum`: Each number in this list tells you what the sum of a row should be
   - `colSum`: Each number in this list tells you what the sum of a column should be

4. **The Output:**
   You need to return a 2D array (a grid) filled with numbers that satisfy all the conditions.

5. An Example Explained:
   Let's look at Example 1 in detail:
   
   Input: 

   - `rowSum = [3, 8]` (This means we have 2 rows, first row sum is 3, second row sum is 8)
   - `colSum = [4, 7]` (This means we have 2 columns, first column sum is 4, second column sum is 7)

   *A possible output:* 
   ```
   [[3, 0],
    [1, 7]]
   ```

   Let's check if this satisfies all conditions:
   - First row: 3 + 0 = 3 (matches rowSum[0])
   - Second row: 1 + 7 = 8 (matches rowSum[1])
   - First column: 3 + 1 = 4 (matches colSum[0])
   - Second column: 0 + 7 = 7 (matches colSum[1])
   - All numbers are non-negative

6. **Important Note:**
   There might be multiple correct answers. You just need to find one that works.

7. **The Challenge:**
   The tricky part is figuring out how to distribute the numbers across the grid so that everything adds up correctly. You need to think about how to balance the numbers to satisfy both row and column sums simultaneously.

8. **Approach Hint:**
   One way to think about this is to start filling the grid from the top-left, always using the smallest possible number that won't make future sums impossible.

9. **Constraints:**
   - The grid can be quite large (up to 500 x 500)
   - The sums can be very large numbers (up to 100 million)
   - The total sum of all rows must equal the total sum of all columns (this guarantees a solution exists)

---


## Approach 1 ***Greedy Algorithm***
***FROM EDITORIAL***
### Intuition

The problem of restoring a matrix given only its row and column sums is essentially a puzzle of distributing numbers across a grid. The key insight is that we don't need to find the "correct" solution - we just need to find *any* valid solution. This realization leads us to a greedy approach: we can build the matrix cell by cell, always choosing the smallest possible value that doesn't violate our constraints.

### Approach

The approach used in this solution is known as the **Greedy Algorithm**. Specifically, we're using a variation of the **Matrix Greedy Filling** technique. Here's how it works:

    1. We iterate through the matrix cell by cell, row by row.
    2. For each cell, we calculate the minimum of two values:
    a) The remaining sum needed for the current row
    b) The remaining sum needed for the current column
    3. We place this minimum value in the current cell.
    4. We update our running totals for the current row and column.
    5. We move to the next cell and repeat until the entire matrix is filled.

This approach guarantees that we'll never exceed the required sum for any row or column, and by the end, we'll have exactly met all the required sums.




### Understanding the Problem

Imagine you're given a blank grid (like a spreadsheet), and you're told:

    1. How many rows and columns it has
    2. What the sum of each row should be
    3. What the sum of each column should be

Your job is to fill in this grid with non-negative whole numbers so that all these sums are correct. It's like a number puzzle!

### The Matrix Greedy Filling Approach

The solution uses an approach called "Matrix Greedy Filling". Don't let the name intimidate you - it's actually quite simple! Here's what "greedy" means in this context:

    - We fill the grid one cell at a time.
    - For each cell, we choose the largest number we can without breaking any rules.
    - We never go back to change a number we've already placed.

This is "greedy" because we're always taking as much as we can right now, without worrying too much about the future.


### Why This Works


1. We never exceed the sum we need for any row or column (we always take the minimum).
2. By the time we reach the last cell in a row or column, we'll have exactly the right amount left to make the sum correct.
3. We're guaranteed that a solution exists (given in the problem statement), so we don't need to worry about running out of numbers to put in our cells.

### An Example

Let's walk through a small example. Say we have:
- `rowTotals = [3, 8]`
- `colTotals = [4, 7]`

*Our process would look like this:*

1. **Start at cell (0,0):**

   - Row needs 3, Column needs 4. Min is 3.
   - Put 3 in (0,0). Row now needs 0, Column needs 1.

2. **Move to (0,1):**
   - Row needs 0, Column needs 7. Min is 0.
   - Put 0 in (0,1). Row still needs 0, Column still needs 7.

3. **Move to (1,0):**
   - Row needs 8, Column needs 1. Min is 1.
   - Put 1 in (1,0). Row now needs 7, Column needs 0.

4. **Finally, (1,1):**
   - Row needs 7, Column needs 7. Min is 7.
   - Put 7 in (1,1). Both Row and Column now need 0.

*Our result is **[[3,0],[1,7]]**, which satisfies all the requirements!*



```java []
class Solution {
    public int[][] reconstructMatrix(int[] rowTotals, int[] colTotals) {
        int rowCount = rowTotals.length;
        int colCount = colTotals.length;
        int[] currentRowSums = new int[rowCount];
        int[] currentColSums = new int[colCount];
        int[][] resultMatrix = new int[rowCount][colCount];

        for (int row = 0; row < rowCount; row++) {
            for (int col = 0; col < colCount; col++) {
                int rowRemaining = rowTotals[row] - currentRowSums[row];
                int colRemaining = colTotals[col] - currentColSums[col];
                resultMatrix[row][col] = Math.min(rowRemaining, colRemaining);
                
                currentRowSums[row] += resultMatrix[row][col];
                currentColSums[col] += resultMatrix[row][col];
            }
        }
        
        return resultMatrix;
    }
}

```


```C++ []
class Solution {
public:
    vector<vector<int>> restoreMatrix(vector<int>& rowSum, vector<int>& colSum) {
        int n = rowSum.size(), m = colSum.size();
        vector<vector<int>> matrix(n, vector<int>(m, 0));
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                matrix[i][j] = min(rowSum[i], colSum[j]);
                rowSum[i] -= matrix[i][j];
                colSum[j] -= matrix[i][j];
            }
        }
        
        return matrix;
    }
};

```

```Python []
class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        n, m = len(rowSum), len(colSum)
        matrix = [[0] * m for _ in range(n)]
        
        for i in range(n):
            for j in range(m):
                matrix[i][j] = min(rowSum[i], colSum[j])
                rowSum[i] -= matrix[i][j]
                colSum[j] -= matrix[i][j]
        
        return matrix

```

```Js []

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const n = rowSum.length;
    const m = colSum.length;
    const matrix = Array(n).fill().map(() => Array(m).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= matrix[i][j];
            colSum[j] -= matrix[i][j];
        }
    }
    
    return matrix;
};
```

```GO []
func restoreMatrix(rowSum []int, colSum []int) [][]int {
    n, m := len(rowSum), len(colSum)
    matrix := make([][]int, n)
    for i := range matrix {
        matrix[i] = make([]int, m)
    }
    
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            matrix[i][j] = min(rowSum[i], colSum[j])
            rowSum[i] -= matrix[i][j]
            colSum[j] -= matrix[i][j]
        }
    }
    
    return matrix
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```

### Dry Run

**Input:** 
- rowTotals = [3, 8]
- colTotals = [4, 7]

Let's go through the algorithm step by step:

**1. Initialize variables:**
   - rowCount = 2
   - colCount = 2
   - currentRowSums = [0, 0]
   - currentColSums = [0, 0]
   - resultMatrix = [[0, 0], [0, 0]]

**2. Now, we'll iterate through each cell of the matrix:**

*Iteration 1 (row = 0, col = 0):*
```
rowRemaining = rowTotals[0] - currentRowSums[0] = 3 - 0 = 3
colRemaining = colTotals[0] - currentColSums[0] = 4 - 0 = 4
resultMatrix[0][0] = min(3, 4) = 3
currentRowSums[0] += 3 (now [3, 0])
currentColSums[0] += 3 (now [3, 0])

State after iteration:
resultMatrix = [[3, 0], [0, 0]]
currentRowSums = [3, 0]
currentColSums = [3, 0]
```

*Iteration 2 (row = 0, col = 1):*
```
rowRemaining = rowTotals[0] - currentRowSums[0] = 3 - 3 = 0
colRemaining = colTotals[1] - currentColSums[1] = 7 - 0 = 7
resultMatrix[0][1] = min(0, 7) = 0
currentRowSums[0] += 0 (still [3, 0])
currentColSums[1] += 0 (now [3, 0])

State after iteration:
resultMatrix = [[3, 0], [0, 0]]
currentRowSums = [3, 0]
currentColSums = [3, 0]
```

*Iteration 3 (row = 1, col = 0):*
```
rowRemaining = rowTotals[1] - currentRowSums[1] = 8 - 0 = 8
colRemaining = colTotals[0] - currentColSums[0] = 4 - 3 = 1
resultMatrix[1][0] = min(8, 1) = 1
currentRowSums[1] += 1 (now [3, 1])
currentColSums[0] += 1 (now [4, 0])

State after iteration:
resultMatrix = [[3, 0], [1, 0]]
currentRowSums = [3, 1]
currentColSums = [4, 0]
```

*Iteration 4 (row = 1, col = 1):*
```
rowRemaining = rowTotals[1] - currentRowSums[1] = 8 - 1 = 7
colRemaining = colTotals[1] - currentColSums[1] = 7 - 0 = 7
resultMatrix[1][1] = min(7, 7) = 7
currentRowSums[1] += 7 (now [3, 8])
currentColSums[1] += 7 (now [4, 7])

Final state:
resultMatrix = [[3, 0], [1, 7]]
currentRowSums = [3, 8]
currentColSums = [4, 7]
```

Tabular representation of the process:

| Iteration | Cell | rowRemaining | colRemaining | Value Set | currentRowSums | currentColSums | resultMatrix |
|-----------|------|--------------|--------------|-----------|----------------|----------------|--------------|
| Initial   | -    | -            | -            | -         | [0, 0]         | [0, 0]         | [[0, 0], [0, 0]] |
| 1         | [0,0]| 3            | 4            | 3         | [3, 0]         | [3, 0]         | [[3, 0], [0, 0]] |
| 2         | [0,1]| 0            | 7            | 0         | [3, 0]         | [3, 0]         | [[3, 0], [0, 0]] |
| 3         | [1,0]| 8            | 1            | 1         | [3, 1]         | [4, 0]         | [[3, 0], [1, 0]] |
| 4         | [1,1]| 7            | 7            | 7         | [3, 8]         | [4, 7]         | [[3, 0], [1, 7]] |

This process ensures that we fill the matrix in a way that satisfies both the row and column sum requirements, always choosing the minimum between the remaining row sum and the remaining column sum for each cell. The algorithm guarantees that we will find a valid solution if one exists.


# Complexity

- Time complexity: O(N * M), where N is the number of rows and M is the number of columns. We visit each cell in the matrix exactly once.
- Space complexity: O(N * M) for the result matrix, plus O(N + M) for the current sum arrays. Overall, this simplifies to O(N * M).

---

# ***Approach 2: Time + Space Optimized Greedy***
***FROM EDITORIAL***
### *Intuition*

Imagine you're given a blank grid and told the sum of each row and column. Your task is to fill in this grid with numbers that make all these sums correct. It's like a number puzzle!

    1. Start from the top-left corner of the grid.
    2. For each cell, put in the largest number we can without breaking any rules.
    3. Move to the next cell and repeat.


### Approach

Let's break down our approach step by step, imagining we're filling this grid by hand:

1. **Start at the Top-Left**:
   We begin in the top-left corner of our grid. This is our starting point.

2. **Choose the Smaller Sum**:
   Look at the sum needed for the current row and the sum needed for the current column. We'll put the smaller of these two numbers in our current cell.

   Why the smaller number? Because if we took the larger one, we might end up exceeding the sum we need for either the row or the column!

3. **Update the Sums**:
   After we put a number in a cell, we need to update our row and column sums. We subtract the number we just used from both the row sum and the column sum.

4. **Move to the Next Cell**:
   Here's where it gets clever: we don't just move right to the next cell. Instead:
   - If the row sum became zero, we move down to the next row.
   - Otherwise, we move right to the next column.

   This ensures we're always working with non-zero sums, making our process more efficient.

5. **Repeat Until Done**:

   We keep doing steps 2-4 until we've either filled all rows or all columns.

Let's see this in action with a small example:

Suppose we have:

    - Row sums: [3, 8]
    - Column sums: [4, 7]

Our process would look like this:

1. **Start at (0,0):**

   - Row needs 3, Column needs 4. Min is 3.
   - Put 3 in (0,0). Row now needs 0, Column needs 1.
   - Row sum is 0, so move down.

2. **Move to (1,0):**
   - Row needs 8, Column needs 1. Min is 1.
   - Put 1 in (1,0). Row now needs 7, Column needs 0.
   - Column sum is 0, so move right.

3. **Move to (1,1):**
   - Row needs 7, Column needs 7. Min is 7.
   - Put 7 in (1,1). Both Row and Column now need 0.
   - We're done!

Our result is [[3,0],[1,7]], which satisfies all the requirements!




### CODE

```java []
class Solution {
    public int[][] restoreMatrix(int[] rowSum, int[] colSum) {
        int rows = rowSum.length;
        int cols = colSum.length;
        int[][] resultMatrix = new int[rows][cols];
        
        int r = 0, c = 0;
        while (r < rows && c < cols) {
            int cellValue = Math.min(rowSum[r], colSum[c]);
            resultMatrix[r][c] = cellValue;
            
            rowSum[r] -= cellValue;
            colSum[c] -= cellValue;
            
            if (rowSum[r] == 0) r++;
            else c++;
        }
        
        return resultMatrix;
    }
}

```


```C++ []
class Solution {
public:
    vector<vector<int>> restoreMatrix(vector<int>& rowSum, vector<int>& colSum) {
        int rows = rowSum.size();
        int cols = colSum.size();
        vector<vector<int>> resultMatrix(rows, vector<int>(cols, 0));
        
        int r = 0, c = 0;
        while (r < rows && c < cols) {
            int cellValue = min(rowSum[r], colSum[c]);
            resultMatrix[r][c] = cellValue;
            
            rowSum[r] -= cellValue;
            colSum[c] -= cellValue;
            
            if (rowSum[r] == 0) {
                ++r;
            } else {
                ++c;
            }
        }
        
        return resultMatrix;
    }
};

```

```Python []
class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        rows, cols = len(rowSum), len(colSum)
        result_matrix = [[0] * cols for _ in range(rows)]
        
        r, c = 0, 0
        while r < rows and c < cols:
            cell_value = min(rowSum[r], colSum[c])
            result_matrix[r][c] = cell_value
            
            rowSum[r] -= cell_value
            colSum[c] -= cell_value
            
            if rowSum[r] == 0:
                r += 1
            else:
                c += 1
        
        return result_matrix

```

```Js []

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const rows = rowSum.length;
    const cols = colSum.length;
    const resultMatrix = Array(rows).fill().map(() => Array(cols).fill(0));
    
    let r = 0, c = 0;
    while (r < rows && c < cols) {
        const cellValue = Math.min(rowSum[r], colSum[c]);
        resultMatrix[r][c] = cellValue;
        
        rowSum[r] -= cellValue;
        colSum[c] -= cellValue;
        
        if (rowSum[r] === 0) {
            r++;
        } else {
            c++;
        }
    }
    
    return resultMatrix;
};
```

```GO []
func restoreMatrix(rowSum []int, colSum []int) [][]int {
    rows, cols := len(rowSum), len(colSum)
    resultMatrix := make([][]int, rows)
    for i := range resultMatrix {
        resultMatrix[i] = make([]int, cols)
    }
    
    r, c := 0, 0
    for r < rows && c < cols {
        cellValue := min(rowSum[r], colSum[c])
        resultMatrix[r][c] = cellValue
        
        rowSum[r] -= cellValue
        colSum[c] -= cellValue
        
        if rowSum[r] == 0 {
            r++
        } else {
            c++
        }
    }
    
    return resultMatrix
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
### Dry Run

**Input:**
- rowSum = [3, 8]
- colSum = [4, 7]

Let's go through the algorithm step by step:

**1. Initialize variables:**
   - rows = 2
   - cols = 2
   - resultMatrix = [[0, 0], [0, 0]]
   - r = 0 (current row)
   - c = 0 (current column)

**2. Now, **we'll iterate through the matrix**, filling one cell at a time:**

**Iteration 1:**
```
cellValue = min(rowSum[0], colSum[0]) = min(3, 4) = 3
resultMatrix[0][0] = 3
rowSum[0] -= 3 (now [0, 8])
colSum[0] -= 3 (now [1, 7])
rowSum[0] == 0, so r++ (r is now 1)

State after iteration:
resultMatrix = [[3, 0], [0, 0]]
rowSum = [0, 8]
colSum = [1, 7]
r = 1, c = 0
```

**Iteration 2:**
```
cellValue = min(rowSum[1], colSum[0]) = min(8, 1) = 1
resultMatrix[1][0] = 1
rowSum[1] -= 1 (now [0, 7])
colSum[0] -= 1 (now [0, 7])
colSum[0] == 0, so c++ (c is now 1)

State after iteration:
resultMatrix = [[3, 0], [1, 0]]
rowSum = [0, 7]
colSum = [0, 7]
r = 1, c = 1
```

**Iteration 3:**
```
cellValue = min(rowSum[1], colSum[1]) = min(7, 7) = 7
resultMatrix[1][1] = 7
rowSum[1] -= 7 (now [0, 0])
colSum[1] -= 7 (now [0, 0])
rowSum[1] == 0, so r++ (r is now 2)

State after iteration:
resultMatrix = [[3, 0], [1, 7]]
rowSum = [0, 0]
colSum = [0, 0]
r = 2, c = 1
```

The algorithm terminates here because r == rows (2 == 2).

Tabular representation of the process:

| Iteration | Cell | cellValue | resultMatrix | rowSum | colSum | r | c |
|-----------|------|-----------|--------------|--------|--------|---|---|
| Initial   | -    | -         | [[0, 0], [0, 0]] | [3, 8] | [4, 7] | 0 | 0 |
| 1         | [0,0]| 3         | [[3, 0], [0, 0]] | [0, 8] | [1, 7] | 1 | 0 |
| 2         | [1,0]| 1         | [[3, 0], [1, 0]] | [0, 7] | [0, 7] | 1 | 1 |
| 3         | [1,1]| 7         | [[3, 0], [1, 7]] | [0, 0] | [0, 0] | 2 | 1 |

This algorithm works by greedily filling each cell with the minimum value that satisfies both the current row and column sum requirements. It moves to the next row when a row sum becomes zero, and to the next column when a column sum becomes zero.

Key differences from the previous solution:
1. This solution uses a single loop instead of nested loops.
2. It directly modifies the rowSum and colSum arrays instead of keeping separate currentRowSums and currentColSums.
3. It moves through the matrix in a more dynamic way, potentially skipping some cells if a row or column sum becomes zero.

This approach is generally more efficient, especially for larger matrices, as it may not need to visit every cell in the matrix. It also tends to produce solutions with more zero entries, which can be beneficial in some applications.
### Complexity


- **Time complexity:** O(rows + cols - 1)

  Why? In the worst case, we might need to visit every cell in the first row and the first column. That's `rows + cols - 1` cells (we subtract 1 because we count the top-left cell only once).

  This is much better than the naive approach of checking every cell in the matrix, which would be O(rows * cols).

- **Space complexity:** O(rows * cols)

  We need to create the result matrix, which has `rows * cols` cells. This is the minimum space we need to solve the problem, as we're required to return this matrix.

  Note: We're not counting the input arrays (`rowSum` and `colSum`) in our space complexity, as they're given to us and not extra space we're using to solve the problem.

To put this in perspective:

    - If we had a 1000x1000 matrix, the naive approach might need to check 1,000,000 cells.
    - Our optimized approach would only need to check at most 1,999 cells!

This efficiency comes from moving through the matrix while always working with non-zero sums and moving to the next row or column as soon as its sum is satisfied, we minimize the number of cells we need to fill.

**PS:** *Hey, I wanted to share a quick tip about coding interviews. When you're solving problems, it's usually not a great idea to change the input data. Like, if you're working with a matrix, don't modify it just to make your solution work.
Sure, there might be some approaches that involve changing the input like we have done in this one, and it's good to know about them for the sake of being thorough. But if you bring up one of these methods in an interview, make sure you point out the downside of messing with the original data.
Interviewers usually want to see how you can solve the problem without altering the given information. It's all about working with what you've got, you know?*


---

### Why Greedy Works Best

1. **Nature of the Problem**:
   - The problem is to fill a matrix such that the sums of rows and columns match given values. Each cell of the matrix must be as large as possible without violating the row and column sum constraints. This naturally leads to a greedy choice at each step.

2. **Optimal Substructure**:
   - At each step, choosing the minimum of the remaining row and column sums ensures that the choice is locally optimal and does not preclude the possibility of a globally optimal solution. This property aligns well with the greedy method.

3. **Efficiency**:
   - The greedy approach processes each cell in a single pass, ensuring O(N + M) complexity, which is efficient and straightforward to implement.

*For the specific problem of restoring a matrix given the row sums and column sums, the greedy approach is actually the most efficient and straightforward method. This problem inherently fits well with the greedy strategy due to its nature of breaking down the constraints (row sums and column sums) step by step. The greedy algorithm ensures that the constraints are met in an optimal manner, and any attempt to use more complex strategies like dynamic programming or linear programming won't necessarily provide better performance or simpler implementation for this specific problem.*

### Proof
While the greedy approach might intuitively make sense, a formal proof is indeed valuable. Let's break down a more concrete way to assure ourselves that the greedy algorithm works:

**1. Invariant Maintenance:**

   We can prove the algorithm's correctness by showing it maintains certain invariants at each step:

    a) The sum of all filled cells plus remaining row and column sums always equals the total sum.
    b) No row or column sum becomes negative.
    c) We always make progress (at least one sum decreases in each step).

**2. Proof by Contradiction:**

   Assume our greedy algorithm produces an incorrect solution. This would mean either:

    a) A row or column sum is exceeded, or
    b) A row or column sum is not fully used

   We can show both are impossible:

    - We never exceed sums because we always choose the minimum.
    - We always use full sums because we continue until all sums are zero.

 *Let's expand on it in simple terms:*
```


    1. Imagine we're filling in the matrix row by row, left to right.

    2. At any point, if we can't place a number in a row, it would mean:
    - We still have some sum left for this row
    - But all the columns are already full

    3. This situation is impossible because:
    - The total sum of all rows equals the total sum of all columns (given in the problem)
    - If we've filled all columns but not all rows, it means we've used up more in the columns than in the rows
    - This contradicts the fact that the totals should be equal

    4. So, we'll always be able to place numbers in each row until we've used up all the row sums

    5. And when we're done, we'll have exactly filled up all the column sums too, because of the equality we started with
```

This argument shows why the greedy approach will always find a solution if one exists. It's not just about the last cell matching up - it's about the fundamental balance between rows and columns that's guaranteed from the start.

The good thing about this approach is that it doesn't rely on the specific greedy strategy we use. As long as we're filling in valid numbers that don't exceed the row and column sums, we're guaranteed to reach a valid solution. The greedy approach just happens to be an efficient way to do this.



**3. Exchange Argument:**

   Consider any valid solution. We can transform it into our greedy solution without breaking constraints:

   - For each cell, if our greedy choice is smaller, we can decrease the value and increase later cells.
   - If our greedy choice is larger, it means we could have made a smaller choice earlier, contradicting our greedy rule.

**4. Mathematical Induction:**

   We can prove that after filling k cells, the remaining problem is still solvable:

   - Base case: The original problem is solvable (given).
   - Inductive step: If it's solvable after k cells, show it's solvable after k+1 cells.

**5. Flow Network Analogy:**

   The problem can be modeled as a flow network:

   - Source connected to rows, sink connected to columns.
   - The greedy algorithm is equivalent to finding a maximum flow.
   - The existence of a solution guarantees a maximum flow that saturates all edges.

**6. Matroid Theory:**

   This problem exhibits properties of a matroid, for which greedy algorithms are known to be optimal.

These approaches provide more rigorous assurances than just intuition. The flow network analogy and matroid theory connection are particularly powerful, as they link this problem to well-established mathematical structures where greedy algorithms are provably optimal.



