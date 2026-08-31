# ✅ Detailed explanation of Unique Paths II problem with many programming languages

**Author:** trinhminhtriet
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/6062427/](https://leetcode.com/problems/unique-paths-ii/solutions/6062427/)

---

# Solution: Memoization Search

We design a function $dfs(i, j)$ to represent the number of paths from the grid $(i, j)$ to the grid $(m - 1, n - 1)$, where $m$ and $n$ are the number of rows and columns of the grid, respectively.

The execution process of the function $dfs(i, j)$ is as follows:

-   If $i \ge m$ or $j \ge n$, or $obstacleGrid[i][j] = 1$, then the number of paths is $0$;
-   If $i = m - 1$ and $j = n - 1$, then the number of paths is $1$;
-   Otherwise, the number of paths is $dfs(i + 1, j) + dfs(i, j + 1)$.

To avoid repeated calculations, we can use the method of memoization search.

The time complexity is $O(m 	imes n)$, and the space complexity is $O(m 	imes n)$. Where $m$ and $n$ are the number of rows and columns of the grid, respectively.
    
# Code    


#### Python3

```python
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        @cache
        def dfs(i: int, j: int) -> int:
            if i >= m or j >= n or obstacleGrid[i][j]:
                return 0
            if i == m - 1 and j == n - 1:
                return 1
            return dfs(i + 1, j) + dfs(i, j + 1)

        m, n = len(obstacleGrid), len(obstacleGrid[0])
        return dfs(0, 0)
```

#### Java

```java
class Solution {
    private Integer[][] f;
    private int[][] obstacleGrid;
    private int m;
    private int n;

    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        m = obstacleGrid.length;
        n = obstacleGrid[0].length;
        this.obstacleGrid = obstacleGrid;
        f = new Integer[m][n];
        return dfs(0, 0);
    }

    private int dfs(int i, int j) {
        if (i >= m || j >= n || obstacleGrid[i][j] == 1) {
            return 0;
        }
        if (i == m - 1 && j == n - 1) {
            return 1;
        }
        if (f[i][j] == null) {
            f[i][j] = dfs(i + 1, j) + dfs(i, j + 1);
        }
        return f[i][j];
    }
}
```

#### C++

```cpp
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        int m = obstacleGrid.size(), n = obstacleGrid[0].size();
        int f[m][n];
        memset(f, -1, sizeof(f));
        function<int(int, int)> dfs = [&](int i, int j) {
            if (i >= m || j >= n || obstacleGrid[i][j]) {
                return 0;
            }
            if (i == m - 1 && j == n - 1) {
                return 1;
            }
            if (f[i][j] == -1) {
                f[i][j] = dfs(i + 1, j) + dfs(i, j + 1);
            }
            return f[i][j];
        };
        return dfs(0, 0);
    }
};
```

#### Go

```go
func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	m, n := len(obstacleGrid), len(obstacleGrid[0])
	f := make([][]int, m)
	for i := range f {
		f[i] = make([]int, n)
		for j := range f[i] {
			f[i][j] = -1
		}
	}
	var dfs func(i, j int) int
	dfs = func(i, j int) int {
		if i >= m || j >= n || obstacleGrid[i][j] == 1 {
			return 0
		}
		if i == m-1 && j == n-1 {
			return 1
		}
		if f[i][j] == -1 {
			f[i][j] = dfs(i+1, j) + dfs(i, j+1)
		}
		return f[i][j]
	}
	return dfs(0, 0)
}
```

#### TypeScript

```ts
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const f: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
    const dfs = (i: number, j: number): number => {
        if (i >= m || j >= n || obstacleGrid[i][j] === 1) {
            return 0;
        }
        if (i === m - 1 && j === n - 1) {
            return 1;
        }
        if (f[i][j] === -1) {
            f[i][j] = dfs(i + 1, j) + dfs(i, j + 1);
        }
        return f[i][j];
    };
    return dfs(0, 0);
}
```


    
# Contact information
If you have any questions or suggestions, please feel free to contact me at https://trinhminhtriet.com/
- Website: [trinhminhtriet.com](https://trinhminhtriet.com/)
- Github: [trinhminhtriet](https://github.com/trinhminhtriet)
- LinkedIn: [trinhminhtriet](https://www.linkedin.com/in/triet-trinh/)
- Facebook: [trinhminhtriet](https://www.facebook.com/trinhminhtriet)
- Twitter: [trinhminhtriet](https://twitter.com/trinhminhtriet)
- Email: [contact@trinhminhtriet.com](mailto:contact@trinhminhtriet.com)