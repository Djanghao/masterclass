# 🔥🔥✅✅Beats 100% with Proof | Very Easy to Understand | Multiple Languages Supported ✅✅🔥🔥

**Author:** areetrahalder
**Votes:** 21
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/4627117/](https://leetcode.com/problems/out-of-boundary-paths/solutions/4627117/)

---

# Proof - Upvote if you are watching the proof
![image.png](./images/0.png)


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the number of paths for the ball to move out of the grid boundary. We can use dynamic programming to keep track of the number of paths for each cell at each move. We will use a recursive approach with memoization to avoid redundant calculations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a 3D array `dp` to store the number of paths for each cell at each move. The dimensions of the array are `[m][n][maxMove+1]`.
2. Define a recursive function `helper` that takes the current position `(x, y)` and the remaining moves maxMove.
3. Check if the current position is out of bounds or if there are no more moves left (`maxMove <= 0`). If so, return 1 (indicating a path out of the grid).
4. If the result for the current position and moves is already calculated, return the stored result from `dp`.
Initialize a variable `res` to 0 to store the total number of paths from the current position.
5. Recursively call the `helper` function for the four possible moves (up, down, left, right) and update the `res` accordingly. Take the modulo operation to avoid overflow.
6. Store the result in the `dp` array for future reference and return the final result.
7. In the `findPaths` function, initialize the `dp` array and call the `helper` function with the starting position `(startRow, startColumn)` and the given parameters.

# Complexity
- Time complexity:$$O(m * n * maxMove)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> Each cell in the `dp` array is calculated once, and each calculation involves constant time operations.

- Space complexity:$$O(m * n * maxMove)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> The size of the `dp` array.

# Code
```Java []
class Solution {
    public Integer[][][] dp;
    public int mod = 1_000_000_000+7;
    public int m, n;
    public int findPaths(int m, int n, int maxMove, int x, int y) {
        dp = new Integer`[m][n][maxMove+1];
        this.m=m;
        this.`n=n;
        return helper(maxMove, x, y);
    }

    private int helper(int maxMove, int x, int y){
        if(x < 0 || x >= m || y < 0 || y >= n)return 1;
        if(maxMove <= 0)return 0;
        if(dp[x][y][maxMove] != null){
            return dp[x][y][maxMove];
        }
        int res=0;
        
        res=(res+helper(maxMove-1, x+1, y))%mod;
        res=(res+helper(maxMove-1, x, y-1))%mod;
        res=(res+helper(maxMove-1, x-1, y))%mod;
        res=(res+helper(maxMove-1, x, y+1))%mod;

        dp[x][y][maxMove]=res;

        return res;

    }
}
```
```C []
class Solution {
public:
    std::vector<std::vector<std::vector<int>>> dp;
    int mod = 1e9 + 7;
    int m, n;

    int findPaths(int m, int n, int maxMove, int x, int y) {
        dp = std::vector<std::vector<std::vector<int>>>(m, std::vector<std::vector<int>>(n, std::vector<int>(maxMove + 1, -1)));
        this->m = m;
        this->n = n;
        return helper(maxMove, x, y);
    }

private:
    int helper(int maxMove, int x, int y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x][y][maxMove] != -1) {
            return dp[x][y][maxMove];
        }
        int res = 0;

        res = (res + helper(maxMove - 1, x + 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y - 1)) % mod;
        res = (res + helper(maxMove - 1, x - 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y + 1)) % mod;

        dp[x][y][maxMove] = res;

        return res;
    }
};
```
```C++ []
class Solution {
public:
    vector<vector<vector<int>>> dp;
    int mod = 1e9 + 7;
    int m, n;

    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        dp = vector<vector<vector<int>>>(m, vector<vector<int>>(n, vector<int>(maxMove + 1, -1)));
        this->m = m;
        this->n = n;
        return helper(maxMove, startRow, startColumn);
    }

private:
    int helper(int maxMove, int x, int y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x][y][maxMove] != -1) {
            return dp[x][y][maxMove];
        }
        int res = 0;

        res = (res + helper(maxMove - 1, x + 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y - 1)) % mod;
        res = (res + helper(maxMove - 1, x - 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y + 1)) % mod;

        dp[x][y][maxMove] = res;

        return res;
    }
};

```
```C# []
public class Solution {
    public int FindPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        int[,,] dp = new int[m, n, maxMove + 1];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k <= maxMove; k++) {
                    dp[i, j, k] = -1;
                }
            }
        }

        this.m = m;
        this.n = n;
        return Helper(maxMove, startRow, startColumn, dp);
    }

    private int Helper(int maxMove, int x, int y, int[,,] dp) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x, y, maxMove] != -1) {
            return dp[x, y, maxMove];
        }
        int res = 0;

        res = (res + Helper(maxMove - 1, x + 1, y, dp)) % mod;
        res = (res + Helper(maxMove - 1, x, y - 1, dp)) % mod;
        res = (res + Helper(maxMove - 1, x - 1, y, dp)) % mod;
        res = (res + Helper(maxMove - 1, x, y + 1, dp)) % mod;

        dp[x, y, maxMove] = res;

        return res;
    }
}

```
```Python []
class Solution(object):
    def findPaths(self, m, n, maxMove, startRow, startColumn):
        """
        :type m: int
        :type n: int
        :type maxMove: int
        :type startRow: int
        :type startColumn: int
        :rtype: int
        """
        
        dp = [[[None] * (maxMove + 1) for _ in range(n)] for _ in range(m)]
        self.m = m
        self.n = n
        self.mod = 10**9 + 7
        return self.helper(maxMove, startRow, startColumn, dp)

    def helper(self, maxMove, x, y, dp):
        if x < 0 or x >= self.m or y < 0 or y >= self.n:
            return 1
        if maxMove <= 0:
            return 0
        if dp[x][y][maxMove] is not None:
            return dp[x][y][maxMove]
        res = 0

        res = (res + self.helper(maxMove - 1, x + 1, y, dp)) % self.mod
        res = (res + self.helper(maxMove - 1, x, y - 1, dp)) % self.mod
        res = (res + self.helper(maxMove - 1, x - 1, y, dp)) % self.mod
        res = (res + self.helper(maxMove - 1, x, y + 1, dp)) % self.mod

        dp[x][y][maxMove] = res

        return res

```
```Python3 []
class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        dp = [[[None] * (maxMove + 1) for _ in range(n)] for _ in range(m)]
        self.m = m
        self.n = n
        self.mod = 10**9 + 7
        return self.helper(maxMove, startRow, startColumn, dp)

    def helper(self, maxMove, x, y, dp):
        if x < 0 or x >= self.m or y < 0 or y >= self.n:
            return 1
        if maxMove <= 0:
            return 0
        if dp[x][y][maxMove] is not None:
            return dp[x][y][maxMove]
        res = 0

        res = (res + self.helper(maxMove - 1, x + 1, y, dp)) % self.mod
        res = (res + self.helper(maxMove - 1, x, y - 1, dp)) % self.mod
        res = (res + self.helper(maxMove - 1, x - 1, y, dp)) % self.mod
        res = (res + self.helper(maxMove - 1, x, y + 1, dp)) % self.mod

        dp[x][y][maxMove] = res

        return res

```
```Javascript []
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Array(maxMove + 1).fill(-1)));
    let mod = 1e9 + 7;

    function helper(maxMove, x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x][y][maxMove] !== -1) {
            return dp[x][y][maxMove];
        }
        let res = 0;

        res = (res + helper(maxMove - 1, x + 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y - 1)) % mod;
        res = (res + helper(maxMove - 1, x - 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y + 1)) % mod;

        dp[x][y][maxMove] = res;

        return res;
    }

    return helper(maxMove, startRow, startColumn);
};

```
```Typescript []
function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    let dp: number[][][] = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() => new Array(maxMove + 1).fill(-1)));
    let mod: number = 1e9 + 7;

    function helper(maxMove: number, x: number, y: number): number {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1;
        if (maxMove <= 0) return 0;
        if (dp[x][y][maxMove] !== -1) {
            return dp[x][y][maxMove];
        }
        let res: number = 0;

        res = (res + helper(maxMove - 1, x + 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y - 1)) % mod;
        res = (res + helper(maxMove - 1, x - 1, y)) % mod;
        res = (res + helper(maxMove - 1, x, y + 1)) % mod;

        dp[x][y][maxMove] = res;

        return res;
    }

    return helper(maxMove, startRow, startColumn);
}
```

# Upvote - Please
![image.png](./images/1.png)
