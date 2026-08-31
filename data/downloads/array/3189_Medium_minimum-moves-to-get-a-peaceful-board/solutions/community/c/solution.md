# Easy Solution with Explanation

**Author:** ImDhruba
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5643023/](https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5643023/)

---

### **Thought Process**

We will **count the number of rooks in each row and column**. Here, the values are row and column numbers from 0 to N - 1, and the count represents the number of rooks in that row or column.


First, we store these counts in two lists: **row for rows and col for columns.** We then **calculate the number of moves required to ensure each row has exactly one rook and similarly for each column.**

For the row constraint, we need each row to contain one rook. **If a row has more than one rook, the excess rooks need to be moved**.  Conversely, **if a row has no rooks, a rook needs to be moved to that row**. The difference between **the count of rooks in a row and one indicates the moves required for that row**. As we iterate through the rows, we accumulate the difference between the previous row and the current row to determine the total moves needed.

**Similarly, for the column constraint**, we iterate over the columns to count the number of moves required to ensure each column has exactly one rook. The difference between the count of rooks in a column and one indicates the necessary moves. As we move to the next column, we add the difference between the previous column and the current column to get the total number of moves needed.

By maintaining and updating these counts iteratively, we efficiently compute the minimum number of moves required to position one rook in each row and column.

### **Algorithm**

1. Initialize the variable minMoves to 0.
2. Initialize two lists row and col of size  N with values as 0.
3. Iterate over the list rooks and store the count of rooks corresponding to their row and column number.
4. Initialize two variables rowMinMoves and colMinMoves to 0.
5. Iterate over the rows/columns from 0 to N - 1 and for each i, add the rows moves required as row[i] - 1 and column moves required as col[i] - 1 to rowMinMoves and colMinMoves respectively.
6. Return minMoves.

### **Code**
  <iframe src="https://leetcode.com/playground/GRUur9K2/shared" frameBorder="0"     width="1000" height="500"></iframe>



### **C++ Code With Further Optimization**
<iframe src="https://leetcode.com/playground/fkKmFLd5/shared" frameBorder="0" width="1000" height="500"></iframe>



```
1. FOR C++ Code With Further Optimization
Note : if the code is running on windows machine PLEASE REMOVE

#pragma clang optimize on
#pragma clang optimize off


2. TODO: structured bindings
for (const auto& [r, c] : rooks) {
            row[r]++;
            col[c]++;
}
```

```
DRY RUN:

Input: rooks = [[0,0],[0,1],[0,2],[0,3]]

Output: 6

_____________
| R |   |   |
| R |   |   |
| R |   |   |
|_R_|___|___|

vector<row> [4, 0, 0, 0]  ==>  [3, -1, -1, -1]
vector<col> [1, 1, 1, 1]  ==>  [0, 0, 0, 0]

ans = 6
```



