# Official Solution

**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solution/](https://leetcode.com/problems/set-matrix-zeroes/solution/)

---

[TOC]

## Solution
---

The question seems to be pretty simple but the trick here is that we need to modify the given matrix in place i.e. our space complexity needs to $$O(1)$$.

We will go through two different approaches to the question. The first approach makes use of additional memory while the other does not.
<br/>
<br/>

---

### Approach 1: Additional Memory Approach

**Intuition**

If any cell of the matrix has a zero we can record its row and column number. All the cells of this recorded row and column can be marked zero in the next iteration.

**Algorithm**

1. We make a pass over our original array and look for zero entries.
2. If we find that an entry at `[i, j]` is 0, then we need to record somewhere the row `i` and column `j`.
3. So, we use two `sets`, one for the rows and one for the columns.
    <pre>
    if cell[i][j] == 0 {
        row_set.add(i)
        column_set.add(j)
    }</pre>

4. Finally, we iterate over the original matrix. For every cell we check if the row `r` or column `c` had been marked earlier. If any of them was marked, we set the value in the cell to 0.
    <pre>
    if r in row_set or c in column_set {
        cell[r][c] = 0
    }</pre>

<iframe src="https://leetcode.com/playground/hGPWGXqm/shared" frameBorder="0" width="100%" height="500" name="hGPWGXqm"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(M \times N)$$ where M and N are the number of rows and columns respectively.

* Space Complexity: $$O(M + N)$$.
<br/>
<br/>

---

### Approach 2: O(1) Space, Efficient Solution

**Intuition**

Rather than using additional variables to keep track of rows and columns to be reset, we use the matrix itself as the *indicators*.

> The idea is that we can use the **first cell** of every row and column as a **flag**. This flag would determine whether a row or column has been set to zero. This means for every cell instead of going to $$M+N$$ cells and setting it to zero we just set the flag in two cells.

<pre>
if cell[i][j] == 0 {
    cell[i][0] = 0
    cell[0][j] = 0
}
</pre>

 These flags are used later to update the matrix. If the first cell of a row is set to zero this means the row should be marked zero. If the first cell of a column is set to zero this means the column should be marked zero.

**Algorithm**

1. We iterate over the matrix and we mark the first cell of a row `i` and first cell of a column `j`, if the condition in the pseudo code above is satisfied. i.e. if `cell[i][j] == 0`.

2. The first cell of row and column for the first row and first column is the same i.e. `cell[0][0]`. Hence, we use an additional variable to tell us if the first column had been marked or not and the `cell[0][0]` would be used to tell the same for the first row.

3. Now, we iterate over the original matrix starting from second row and second column i.e. `matrix[1][1]` onwards. For every cell we check if the row `r` or column `c` had been marked earlier by checking the respective first row cell or first column cell. If any of them was marked, we set the value in the cell to 0. Note the first row and first column serve as the `row_set` and `column_set` that we used in the first approach.

5. We then check if `cell[0][0] == 0`, if this is the case, we mark the first row as zero.

6. And finally, we check if the first column was marked, we make all entries in it as zeros.

!?!../Documents/73_Matrix_Zeroes.json:1000,400!?!

In the above animation we iterate all the cells and mark the corresponding first row/column cell incase of a cell with zero value.

<center>
<img src="../Figures/73/MatrixZeros_18_1.png" width="400"/>
</center>

We iterate the matrix we got from the above steps and mark respective cells zeroes.

<center>
<img src="../Figures/73/MatrixZeros_18_2.png" width="400"/>
</center>

<br>

<iframe src="https://leetcode.com/playground/22mBAU3q/shared" frameBorder="0" width="100%" height="500" name="22mBAU3q"></iframe>

**Complexity Analysis**

* Time Complexity : $$O(M \times N)$$
* Space Complexity : $$O(1)$$