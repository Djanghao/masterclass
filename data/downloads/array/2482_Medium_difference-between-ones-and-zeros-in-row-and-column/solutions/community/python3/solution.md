# 【Video】Give me 5 minutes - How we think about a solution

**Author:** niits
**Votes:** 55
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401811/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401811/)

---

# Intuition
Calcuate sum of 1 in each row and column at first.

---

# Solution Video

https://youtu.be/swafoNFu99o


\u25A0 Timeline of the video

`0:06` Create number of 1 in each row and column
`1:16` How to calculate numbers at each position 
`4:03` Coding
`6:32` Time Complexity and Space Complexity
`7:02` Explain zip(*grid)
`8:15` Step by step algorithm of my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,451
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

---

# Approach

## How we think about a solution

Simply, If we calculate sum of each row and column, we can solve this question.

This is my first solution code.

```
class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        m = len(grid)
        n = len(grid[0])

        rows = {}
        for r in range(m):        
            row_sum = 0
            for c in range(n):
                row_sum += grid[r][c]
            
            rows[r] = row_sum

        cols = {}
        for c in range(n):
            col_sum = 0
            for r in range(m):
                col_sum += grid[r][c]
            
            cols[c] = col_sum

        res = [[0] * n for _ in range(m)]

        for r in range(m):
            for c in range(n):
                res[r][c] = rows[r] + cols[c] - (m - rows[r]) - (n - cols[c])
        
        return res
```

ummm....it's long \uD83D\uDE05. I wanted to make it a bit cooler. Anyway, you can see my second solution code below. Let me explain one by one.

```
Input: grid = [[0,1,1],[1,0,1],[0,0,1]]
```

Simply, I thought that knowing the sum of each row and column would be sufficient to solve it.

```
[0,1,1] \u2192 2
[1,0,1] \u2192 2
[0,0,1] \u2192 1
 \u2193 \u2193 \u2193
 1 1 3 
```

```
ones_row = [2,2,1] 
ones_col = [1,1,3] 
```
All we have to do is just to calculate them for each positions in diff matrix.

`ones_row` and `ones_col` have number of `1` in each row or each column, so number of `0` should be

```
For each row : length of row - number of 1 in each row
For each column : length of column - number of 1 in each column
```
In Python solution code below
```
ones_row[i] + ones_col[j] - (m - ones_row[i]) - (n - ones_col[j])

ones_row[i]: number of 1 in the row
ones_col[i]: number of 1 in the column
(m - ones_row[i]): number of 0 in the row
(n - ones_col[j]): number of 0 in the column

m is length of row
n is length of column
```

Easy! \uD83D\uDE04
Let's see a real algorithm!


---


# Complexity
- Time complexity: $$O(m * n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m * n)$$ or $$O(m + n)$$
If we can ignore `res`, space should be $$O(m + n)$$ for `ones_row` and `ones_col`.

# Solution code

```python []
class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        m = len(grid)
        n = len(grid[0])
        res = [[0] * n for _ in range(m)]
        ones_row = [row.count(1) for row in grid]
        ones_col = [col.count(1) for col in zip(*grid)]

        for i in range(m):
            for j in range(n):
                res[i][j] = ones_row[i] + ones_col[j] - (m - ones_row[i]) - (n - ones_col[j])

        return res
```
```javascript []
var onesMinusZeros = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const res = Array.from({ length: m }, () => Array(n).fill(0));
    const onesRow = grid.map(row => row.filter(val => val === 1).length);
    const onesCol = Array.from({ length: n }, (_, j) => grid.map(row => row[j]).filter(val => val === 1).length);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = onesRow[i] + onesCol[j] - (m - onesRow[i]) - (n - onesCol[j]);
        }
    }

    return res;    
};
```
```java []
class Solution {
    public int[][] onesMinusZeros(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int[][] res = new int[m][n];
        int[] onesRow = new int[m];
        int[] onesCol = new int[n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                onesRow[i] += grid[i][j];
                onesCol[j] += grid[i][j];
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                res[i][j] = onesRow[i] + onesCol[j] - (m - onesRow[i]) - (n - onesCol[j]);
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> onesMinusZeros(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<vector<int>> res(m, vector<int>(n, 0));
        vector<int> onesRow(m, 0);
        vector<int> onesCol(n, 0);

        for (int i = 0; i < m; i++) {
            onesRow[i] = count(grid[i].begin(), grid[i].end(), 1);
        }

        for (int j = 0; j < n; j++) {
            for (int i = 0; i < m; i++) {
                onesCol[j] += grid[i][j];
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                res[i][j] = onesRow[i] + onesCol[j] - (m - onesRow[i]) - (n - onesCol[j]);
            }
        }

        return res;        
    }
};
```

## Pyhon Tips

Let me explain about
```
zip(*grid)
```
First of all, `*grid` creates
```
grid = [[1,2,3],[4,5,6],[7,8,9]]
\u2193
[1,2,3] [4,5,6] [7,8,9]
```
Then zip function deals with numbers at the same index of each element. That means we can deal with the numbers at the same column index.

```
[1,2,3] [4,5,6] [7,8,9]
\u2193
(1, 4, 7),(2, 5, 8),(3, 6, 9)

(1, 4, 7): column index 0
(2, 5, 8): column index 1
(3, 6, 9): column index 2

[1,2,3]
[4,5,6]
[7,8,9]

```
That's why we can count number of `1` in each column with
```
ones_col = [col.count(1) for col in zip(*grid)]
```



## Step by step algorithm

1. **Initialize Variables:**
   - Get the number of rows `m` and columns `n` in the `grid`.
   - Create an empty 2D list `res` with dimensions `m x n` initialized to zeros.

   ```python
   m = len(grid)
   n = len(grid[0])
   res = [[0] * n for _ in range(m)]
   ```

2. **Calculate Ones in Each Row and Column:**
   - Calculate the number of ones in each row and store the results in the list `ones_row`.
   - Calculate the number of ones in each column using `zip(*grid)` and store the results in the list `ones_col`.

   ```python
   ones_row = [row.count(1) for row in grid]
   ones_col = [col.count(1) for col in zip(*grid)]
   ```

3. **Fill the Result Matrix:**
   - Use nested loops to iterate through each element of the result matrix.
   - For each element at position `(i, j)`, calculate its value using the formula:
    ```
    res[i][j] = ones_row[i] + ones_col[j] - (m - ones_row[i]) - (n - ones_col[j])
    ```

   ```python
   for i in range(m):
       for j in range(n):
           res[i][j] = ones_row[i] + ones_col[j] - (m - ones_row[i]) - (n - ones_col[j])
   ```

4. **Return the Result:**
   - Return the computed result matrix.

   ```python
   return res
   ```

In summary, the algorithm calculates the number of ones in each row and column of the input matrix and uses this information to compute the values for each element in the result matrix using a specified formula.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/destination-city/solutions/4406091/video-give-me-3-minutes-how-we-think-about-a-solution/

video
https://youtu.be/tjILACCjQI0

\u25A0 Timeline of the video

`0:04` Explain how we can solve this question
`1:29` Coding
`2:40` Time Complexity and Space Complexity
`3:13` Step by step algorithm of my solution code

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397604/video-give-me-5-minutes-how-we-think-about-a-solution/

video
https://youtu.be/qTAh4HGfUHk

\u25A0 Timeline of the video

`0:05` Explain algorithm of the first step
`1:06` Explain algorithm of the second step
`2:36` Coding
`4:17` Time Complexity and Space Complexity
`4:55` Step by step algorithm of my solution code
