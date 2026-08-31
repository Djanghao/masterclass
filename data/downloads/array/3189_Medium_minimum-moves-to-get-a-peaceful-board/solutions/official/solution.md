# Official Solution

**Link:** [https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solution/](https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solution/)

---

## Solution

---

### Approach 1: Sorting

#### Overview

We are given a 2D board of size $N \times N$ with $N$ rooks placed on it. A rook can move to any of the four adjacent cells horizontally or vertically in one move. Our goal is to return the minimum moves required so that each row and column of the board has exactly one rook. Initially and during the moves, there can only be at most one rook in each cell.

#### Intuition

To simplify the problem, let's first consider only the row constraint: each row must have exactly one rook without any constraints on the columns. There may be cases where some rows have no rooks while others have multiple rooks. The optimal way to distribute the rooks across the rows is to move a rook to an empty row that is closest, minimizing the number of moves.

We can achieve this by sorting the rooks by their row number in ascending order. Then, we iterate over the rows from $0$ to $N - 1$. Because the rooks are sorted by row number, placing the rook at index 0 in the sorted list onto row 0 requires the minimum moves. Similarly, we place the rook at index 1 onto row 1, and so on. The difference between the current row index and the row number of the rook at the current index in the sorted list gives the moves required for each rook. Summing these differences gives the total moves needed to ensure each row has exactly one rook.

Next, we extend this solution to meet the column constraint as well. After arranging the rooks so that each row has exactly one, we need to ensure that each column also has exactly one rook. We do this by sorting the rooks by their column numbers. Then, we iterate over the columns from $0$ to $N - 1$, and for each column, we calculate the moves required to place the rook at index `i` in the sorted list onto column `i`.

By iterating over the rows and columns independently and summing the required moves for each, we achieve the minimum total moves required to arrange the rooks such that each row and column has exactly one rook.

![fig](../Figures/3189/3189A.png)

#### Algorithm

1. Initialize the variable `minMoves` to `0`.
2. Sort the list of `rooks` in ascending order of their row number.
3. Iterate over the rows from `0` to `N - 1` and for each row `i` add the moves required to keep a rook in this row as `abs(i - rooks[i][0])`
4. Sort the list `rooks` in ascending order of their column number.
5. Iterate over the column from `0` to `N - 1` and for each column `i` add the moves required to keep a rook in this column as `abs(i - rooks[i][1])`
6. Return `minMoves`.

#### Implementation

<iframe src="https://leetcode.com/playground/UScC6cMD/shared" frameBorder="0" width="100%" height="480" name="UScC6cMD"></iframe>

#### Complexity Analysis

Here, $N$ is the number of rows and columns in the board given, it's also the number of coordinates given in the list `rooks`.

* Time complexity: $O(N \times \log N)$.

  We are sorting the list `rooks` twice, and then iterate over the rows and columns from `0` to `N - 1`. Hence, the total time complexity is equal to $O(N \log N)$.

* Space complexity: $O(\log⁡⁡ N)$ or $O(N)$.

  No extra space is needed apart from a few variables. However, some space is required for sorting.

  The space complexity of the sorting algorithm depends on the implementation of each programming language.

  For instance, in Java, the `Arrays.sort()` for primitives is implemented as a variant of the quicksort algorithm whose space complexity is $O(\log⁡⁡ N)$.
  In C++ `sort()` function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort and has a worst-case space complexity of $O(\log⁡⁡ N)$.
  In Python, the sort method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and uses $O(N)$ additional space. Thus, the inbuilt `sort()` function might add up to $O(\log⁡⁡ N)$ or $O(N)$ to the space complexity.

---

### Approach 2: Counting Sort

#### Intuition

Instead of sorting the rooks according to their rows and columns, we can count the number of rooks in each row and column. This approach is similar to counting sort, where we count the number of instances for each possible value. Here, the values are row and column numbers from `0` to `N - 1`, and the count represents the number of rooks in that row or column.

First, we store these counts in two lists: `row` for rows and `col` for columns. We then calculate the number of moves required to ensure each row has exactly one rook and similarly for each column.

For the row constraint, we need each row to contain one rook. If a row has more than one rook, the excess rooks need to be moved. Conversely, if a row has no rooks, a rook needs to be moved to that row. The difference between the count of rooks in a row and one indicates the moves required for that row. As we iterate through the rows, we accumulate the difference between the previous row and the current row to determine the total moves needed.

Similarly, for the column constraint, we iterate over the columns to count the number of moves required to ensure each column has exactly one rook. The difference between the count of rooks in a column and one indicates the necessary moves. As we move to the next column, we add the difference between the previous column and the current column to get the total number of moves needed.

By maintaining and updating these counts iteratively, we efficiently compute the minimum number of moves required to position one rook in each row and column.


#### Algorithm


1. Initialize the variable `minMoves` to `0`.
2. Initialize two lists `row` and `col` of size $N$ with values as `0`.
3. Iterate over the list `rooks` and store the count of rooks corresponding to their row and column number.
4. Initialize two variables `rowMinMoves` and `colMinMoves` to `0`.
5. Iterate over the rows/columns from `0` to `N - 1` and for each `i`, add the rows moves required as `row[i] - 1` and column moves required as `col[i] - 1` to `rowMinMoves` and `colMinMoves` respectively.
6. Return `minMoves`.


#### Implementation

<iframe src="https://leetcode.com/playground/PFKv9ZDj/shared" frameBorder="0" width="100%" height="497" name="PFKv9ZDj"></iframe>

#### Complexity Analysis

Here, $N$ is the number of rows and columns in the board given, it's also the number of coordinates given in the list `rooks`.

* Time complexity: $O(N)$.

  We iterate over the rooks rows and columns from `0` to `N - 1` twice, first to store the rooks count and then to find the number of moves. Hence, the total time complexity is equal to $O(N)$.

* Space complexity: $O(N)$.

  We need two lists `row` and `col` to keep the count of rooks on each row and column respectively. Hence, the total space complexity is equal to $O(N)$.

---