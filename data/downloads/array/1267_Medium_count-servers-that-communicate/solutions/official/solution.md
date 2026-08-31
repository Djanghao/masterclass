# Official Solution

**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solution/](https://leetcode.com/problems/count-servers-that-communicate/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a grid representing a server center in the form of a matrix of size `m x n`. Each cell of the matrix contains either a `1`, indicating the presence of a server, or a `0`, indicating an empty space.

We need to return the number of servers that can communicate with at least one other server. This excludes servers that are isolated, i.e., those that do not share a row or column with any other server.

The first thing to note is that a server can communicate with another server if they are located either in the same row or the same column. Thus, the key observation here is that we only need to check rows and columns to determine if a server is communicable. If there’s at least one other server in the same row or column, then this server is communicable.
 
---

### Approach 1: Brute-Force

#### Intuition

We know that each cell either contains a server (represented by `1`) or is empty (represented by `0`). So, we start by going through each cell to see if there is a server at that position. If the current cell contains a server, we then check if this server can communicate with any other server. If it can, we count it as communicable.

Once we find a server, we check if there is any other server in the same row that can communicate with it. We do this by iterating through all the other cells in the same row. If we find another server in the same row, we can immediately mark it as communicable.

If we do not find any other server in the row, we proceed to check the column. We iterate through all the other rows in the same column to see if there is another server. If a server is found in the same column, we know this server can communicate and is communicable.

As soon as we determine that a server can communicate (either in the same row or column), we increment the total communicable servers count. Once we finish checking the entire grid, we return the count of communicable servers.

#### Algorithm

- Initialize `numRows` and `numCols` to represent the number of rows and columns in the grid.
- Initialize `communicableServersCount` to `0`, which will keep track of the count of communicable servers.

- Traverse through the grid:
  - For each server at position `(row, col)` where `grid[row][col] == 1`:
    - Set `canCommunicate` to `false`.
    - Check for communication in the same row:
      - Iterate through each column `otherCol` in the same row:
        - If `otherCol` is not equal to `col` and `grid[row][otherCol] == 1`, set `canCommunicate` to `true` and break the loop.
    - If `canCommunicate` is `true`, increment `communicableServersCount`.
    - If no communication was found in the same row, check for communication in the same column:
      - Iterate through each row `otherRow` in the same column:
        - If `otherRow` is not equal to `row` and `grid[otherRow][col] == 1`, set `canCommunicate` to `true` and break the loop.
    - If `canCommunicate` is `true`, increment `communicableServersCount`.

- Return `communicableServersCount`, the total count of servers that can communicate.

#### Implementation

<iframe src="https://leetcode.com/playground/DouY2Fzd/shared" frameBorder="0" width="100%" height="500" name="DouY2Fzd"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

- Time complexity: $O(m \cdot n \cdot (m + n))$

    The algorithm traverses through each cell in the grid using nested loops, where the outer loop runs $m$ times (for each row) and the inner loop runs $n$ times (for each column). For each cell containing a server (`grid[row][col] == 1`), it performs two additional checks:
    1. It checks the entire row to see if there is another server in the same row. This involves iterating over $n$ columns.
    2. If no server is found in the same row, it checks the entire column to see if there is another server in the same column. This involves iterating over $m$ rows.

    Since these checks are performed for each server, the worst-case time complexity is $O(m \cdot n \cdot (m + n))$.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space, as it only maintains a few variables (`numRows`, `numCols`, `communicableServersCount`, `canCommunicate`, etc.). No additional data structures are used that scale with the input size. Therefore, the space complexity is $O(1)$.

---

### Approach 2: Track Using Two Arrays

#### Intuition

To optimize the checking process, the first step is to count how many servers exist in each row and each column before we start checking individual servers.

We don’t need to check the entire row and column every time for every server. Instead, we can track the number of servers in each row and column using two arrays: `rowCounts` and `colCounts`. We loop over the grid once, and for each server (`grid[row][col] == 1`), we increment the count for the corresponding row and column. This precomputes how many servers are present in each row and column.

The advantage of this approach is that we know in advance how many servers are in a given row or column, so when we encounter a server, we can quickly determine if it’s communicable by checking these precomputed values.

Once we have the counts of servers in each row and column, the next task is to identify which servers are communicable. For a server at position `(row, col)`, we need to check:

- If the row has more than one server (i.e., `rowCounts[row] > 1`), which means there are other servers in the same row.
- If the column has more than one server (i.e., `colCounts[col] > 1`), which means there are other servers in the same column.

If either condition is true, the server can communicate, and we increment the count of communicable servers.

Once we’ve checked all servers and counted the communicable ones, we simply return the count.

#### Algorithm

- Initialize two arrays, `rowCounts` and `colCounts`, of appropriate sizes to keep track of the server counts in each row and column.

- Count servers in each row and column:
  - Iterate through each row (`row`), and for each row, iterate through each column (`col`):
    - If there’s a server at `grid[row][col]`, increment the corresponding values in `rowCounts[row]` and `colCounts[col]`.

- Initialize `communicableServersCount` to `0`, which will store the count of servers that can communicate.

- Count servers that can communicate (i.e., those in the same row or column as another server):
  - Iterate again through each row and column:
    - If there’s a server at `grid[row][col]`, check if it can communicate with another server (i.e., if `rowCounts[row] > 1` or `colCounts[col] > 1`).
    - If so, increment `communicableServersCount`.

- Return `communicableServersCount`, the total count of servers that can communicate.

#### Implementation

<iframe src="https://leetcode.com/playground/7NwwDvo6/shared" frameBorder="0" width="100%" height="500" name="7NwwDvo6"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

- Time complexity: $O(m \cdot n)$

    The first nested loop iterates over each row in the grid to count the number of servers in each row and column. The outer loop runs $m$ times (for each row), and the inner loop runs $n$ times (for each column). This results in a time complexity of $O(m \cdot n)$.

    The second nested loop also iterates over each row in the grid to determine if a server can communicate with others in its row or column. This again involves an outer loop running $m$ times and an inner loop running $n$ times, resulting in a time complexity of $O(m \cdot n)$.

    Since both loops are independent and each has a time complexity of $O(m \cdot n)$, the overall time complexity is $O(m \cdot n)$.

- Space complexity: $O(m + n)$

    The algorithm uses two additional arrays:
      - `rowCounts` of size $n$ (number of columns) to store the count of servers in each column.
      - `colCounts` of size $m$ (number of rows) to store the count of servers in each row.

    The space required for these arrays is $O(m + n)$.

    The space used by the input grid is not counted towards the space complexity as it is part of the input.

---

### Approach 3: Server Grouping

#### Intuition

In Approach 2, we were repeatedly scanning the entire row and column for each server to check if there were any other servers for communication. While this method works, it is somewhat redundant since we perform the same checks multiple times. The goal now is to micro-optimize the process.

Instead of directly checking the count of servers in every row and column each time we find a server, we aim to track the necessary information during our first pass so that in the second pass, we can make decisions more quickly. This will reduce some runtime redundancy.

We begin by initializing a `colCount` array, where each entry tracks the number of servers in that row. By maintaining this count, we can easily find if a server can communicate based on the number of servers in the same row.

In addition to counting the servers in each row and column, we use another array, `lastServerInRow`, to track the position of the last server in each column. This is crucial because if a column has multiple servers, we don’t need to check the entire column again. Instead, we can focus on whether the last server in a column is part of a communicable set (i.e., a row or column with multiple servers). For example, if `lastServerInRow[0]` is 3, it means the last server in column 0 is at row 3. If this server can communicate, it indicates that there are other servers in that column, and we can mark it as communicable without needing to scan all rows again.

Now we process each server in the grid by iterating over the rows and columns. For each server we encounter, we:
- Increment the count for that row in the `colCount` array.
- Track the position of the last server in the `lastServerInRow` array.

Thus, we gather all the necessary information about how many servers are in each row and column and the position of the last server.

After collecting this information, we use the `colCount` and `lastServerInRow` arrays to identify communicable servers. For each server in the grid, we check if the count of servers in the same row is greater than 1. If it is, we know that this server can communicate with another server in the same row. Similarly, we check if the server’s column has more than one server using the `lastServerInRow` array. If the server is part of a communicable set (i.e., there are other servers in the same row or column), we increase the count of communicable servers.

The algorithm is visualized below:

!?!../Documents/1267/server_grouping.json:760,532!?!

#### Algorithm

- Initialize `communicableServersCount` to 0 to keep track of servers that can communicate.
- Initialize `colCount` to store the count of servers in each row, and `lastServerInRow` to track the last server in each column.

##### First Pass: Count servers in each row and column
1. Iterate through each row (`row`):
   - For each row, initialize `serverCountInRow` to 0 to track the number of servers in that row.
   - Iterate through each column (`col`):
     - If a server is found at `grid[row][col]`, increment `serverCountInRow`, update `colCount[col]`, and set `lastServerInRow[col]` to `row`.
   - If the row has more than one server, increment `communicableServersCount` by the number of servers in the row and set `lastServerInRow[col]` to -1 (indicating no servers to communicate in that column).

##### Second Pass: Check if servers can communicate
2. Iterate again through each column (`col`):
   - If there is a server at `lastServerInRow[col]` and the count of servers in the corresponding row (`colCount[lastServerInRow[col]]`) is greater than one, increment `communicableServersCount` by 1.

- Finally, return `communicableServersCount`, the total count of servers that can communicate.

#### Implementation

<iframe src="https://leetcode.com/playground/8eyTWJqP/shared" frameBorder="0" width="100%" height="500" name="8eyTWJqP"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

- Time complexity: $O(m \cdot n)$

    The algorithm performs two passes over the grid. In the first pass, it iterates over each cell in the grid to count the number of servers in each row and column. This involves nested loops where the outer loop runs $m$ times (for each row) and the inner loop runs $n$ times (for each column). This results in a time complexity of $O(m \cdot n)$.

    The second pass iterates over the rows to check if servers can communicate based on the counts computed in the first pass. This pass runs in $O(m)$ time. Since $O(m \cdot n)$ dominates $O(m)$, the overall time complexity is $O(m \cdot n)$.

- Space complexity: $O(m + n)$

    The algorithm uses two additional data structures: `colCount` and `lastServerInRow`. The `colCount` array has a size of $n$ (number of columns), and the `lastServerInRow` array has a size of $m$ (number of rows). Therefore, the space complexity is $O(m + n)$.

    The space used by the input grid is not counted towards the space complexity as it is part of the input.

---

### Approach 4: Space Optimized

#### Intuition

Instead of keeping an array to track the position of the last server in each column, we just count the number of servers directly in each row and perform a simple check when a single server is found, leveraging the grid's structure itself.

We start by iterating over each row in the grid. For each row, we count how many servers are present. As we count, we also keep track of the column index of the first server encountered. This is important because if there’s only one server in the row, we need to check if there’s any other server in the same column.

Once the row is processed, we check if there are multiple servers in that row. If there are, we conclude that all servers in that row can communicate with each other, so we add the count of servers in that row to the total communicable servers count.

If there’s exactly one server in the row, we then check all the other rows to see if there’s any server in the same column as that single server. If such a server exists, then the lone server in that row is communicable, and we add it to the total count.

#### Algorithm

- Initialize `rows` and `cols` to the dimensions of the grid, and `communicableServersCount` to `0`, which will store the total count of communicable servers.

- Iterate through each row (`rowIndex`):
  - Initialize `rowCounts` to count the number of servers in the current row, and `serverColumnIndex` to store the column index of the first server in the row.
  - Count the servers in the current row:
    - Iterate through each column (`colIndex`):
      - If there's a server (`grid[rowIndex][colIndex]`), update `serverColumnIndex` if it is the first server found, and increment `rowCounts`.

  - Check if the row has more than one server (`rowCounts != 1`), meaning servers in the row can communicate. If not, check for a server in the same column (`serverColumnIndex`) in other rows.
  - If the server can communicate (either because there are multiple servers in the row or another server exists in the same column in another row), add `rowCounts` to `communicableServersCount`.

- After iterating through all rows, return `communicableServersCount`, the total count of servers that can communicate.

#### Implementation

<iframe src="https://leetcode.com/playground/89oda5wC/shared" frameBorder="0" width="100%" height="500" name="89oda5wC"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

- Time complexity: $O(m \times n)$

    The algorithm iterates over each cell in the grid once to count the number of servers in each row and determine if they can communicate. For each row, it takes $O(n)$ time to count the servers and $O(m)$ time to check if a server in a row can communicate with another server in the same column. Since there are $m$ rows, the total time complexity is $O(m \times n)$.

    The nested loops and the checks for communication contribute to this time complexity. The outer loop runs $m$ times, and the inner loops run $n$ times and $m$ times respectively, leading to the overall time complexity of $O(m \times n)$.

- Space complexity: $O(1)$

    The space complexity is constant because the algorithm does not allocate any additional memory that depends on the size of the input grid. All operations are performed in-place using a fixed number of variables.

---