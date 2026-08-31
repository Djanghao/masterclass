# ✅Simple Go and C# Solution | DFS✅

**Author:** shukhratutaboev
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3388748/](https://leetcode.com/problems/number-of-enclaves/solutions/3388748/)

---

# Complexity
- Time complexity: $$O(m*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code 
Go
```
func numEnclaves(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	visited := make([][]bool, m)
	for i := 0; i < len(grid); i++ {
		visited[i] = make([]bool, n)
	}
	count := 0
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if (i == 0 || j == 0 || i == m-1 || j == n-1) && grid[i][j] == 1 && !visited[i][j] {
				checkIsland(&grid, &visited, i, j, m, n)
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 && !visited[i][j] {
				count++
			}
		}
	}

	return count
}

func checkIsland(grid *[][]int, visited *[][]bool, i, j, m, n int) {
	if i < 0 || i == m || j < 0 || j == n || (*grid)[i][j] != 1 || (*visited)[i][j] {
		return
	}

	(*visited)[i][j] = true

	checkIsland(grid, visited, i-1, j, m, n)
	checkIsland(grid, visited, i+1, j, m, n)
	checkIsland(grid, visited, i, j-1, m, n)
	checkIsland(grid, visited, i, j+1, m, n)
}
```

C#
```
public class Solution {
    public int NumEnclaves(int[][] grid) {
        var m = grid.Length;
        var n = grid[0].Length;
        var visited = new bool[m][];
        var count = 0;
        for (var i = 0; i < m; i++) {
            visited[i] = new bool[n];
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if ((i == 0 || j == 0 || i == m-1 || j == n-1) && grid[i][j] == 1 && !visited[i][j])
                    CheckIsland(grid, visited, i, j, m, n);
            }
		}

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if (grid[i][j] == 1 && !visited[i][j]) count++;
            }
        }

        return count;
    }

    public void CheckIsland(int[][] grid, bool[][] visited,int i, int j, int m, int n)
    {
        if (i < 0 || i == m || j < 0 || j == n || grid[i][j] != 1 || visited[i][j]) return;

        visited[i][j] = true;

        CheckIsland(grid, visited, i-1, j, m, n);
        CheckIsland(grid, visited, i+1, j, m, n);
        CheckIsland(grid, visited, i, j-1, m, n);
        CheckIsland(grid, visited, i, j+1, m, n);
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)