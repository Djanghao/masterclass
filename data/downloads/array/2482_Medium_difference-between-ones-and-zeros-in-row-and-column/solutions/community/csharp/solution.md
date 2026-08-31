# 💯Faster✅💯🔥🔥EASY SOLUTION FOR BEGINNER FRIENDLY🔥🔥

**Author:** ilxamovic
**Votes:** 14
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4404260/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4404260/)

---

# Approach

1. Iterate through each element in the input grid.
2. Calculate the sum of ones and zeros in each row and column.
3. Create a new jagged array and populate it with the differences between the counts of ones and zeros in each corresponding row and column.

# Complexity

- **Time complexity:** O(n * m), where n is the number of rows and m is the number of columns in the grid. The double loop iterates through all elements of the grid.
- **Space complexity:** O(n + m), for the row and col arrays.

# Code
```csharp []
public class Solution {
    public int[][] OnesMinusZeros(int[][] grid)
    {
        int n = grid.Length;
        int m = grid[0].Length;
        int[] col = new int[m];
        int[] row = new int[n];
        for (int i = 0;i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                row[i] += (grid[i][j] == 1) ? 1 : -1;
                col[j] += (grid[i][j] == 1) ? 1 : -1;
            }
        }
        int[][] jaggedArray = new int[n][];

        for (int i = 0; i < n; i++)
        {
            jaggedArray[i] = new int[m];
            for (int j = 0; j < m; j++)
            {
                jaggedArray[i][j] = col[j] + row[i];
            }
        }
        return jaggedArray;
    }
}
```
```java []
public class Solution {
    public int[][] onesMinusZeros(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        int[] col = new int[m];
        int[] row = new int[n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                row[i] += (grid[i][j] == 1) ? 1 : -1;
                col[j] += (grid[i][j] == 1) ? 1 : -1;
            }
        }

        int[][] jaggedArray = new int[n][];

        for (int i = 0; i < n; i++) {
            jaggedArray[i] = new int[m];
            for (int j = 0; j < m; j++) {
                jaggedArray[i][j] = col[j] + row[i];
            }
        }

        return jaggedArray;
    }
}
```
```go []
func onesMinusZeros(grid [][]int) [][]int {
	n := len(grid)
	m := len(grid[0])
	col := make([]int, m)
	row := make([]int, n)

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if grid[i][j] == 1 {
				row[i]++
				col[j]++
			} else {
				row[i]--
				col[j]--
			}
		}
	}

	jaggedArray := make([][]int, n)

	for i := 0; i < n; i++ {
		jaggedArray[i] = make([]int, m)
		for j := 0; j < m; j++ {
			jaggedArray[i][j] = col[j] + row[i]
		}
	}

	return jaggedArray
}
```
```python []
class Solution:
    def ones_minus_zeros(self, grid):
        n = len(grid)
        m = len(grid[0])
        col = [0] * m
        row = [0] * n

        for i in range(n):
            for j in range(m):
                row[i] += 1 if grid[i][j] == 1 else -1
                col[j] += 1 if grid[i][j] == 1 else -1

        jagged_array = [[col[j] + row[i] for j in range(m)] for i in range(n)]

        return jagged_array
```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!