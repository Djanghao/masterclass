# Python 3 | DP | Explanation

**Author:** idontknoooo
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/1480131/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/1480131/)

---

### Explanation
- 3 rows, for each index `i`, frog can only come from either **same row, column `i-1`** or **different row, same column `i`**
- Based on above, we can get our transition function:
	- DP state: `dp[i][j]` number of side steps to reach row `i`, column `j`
	- Initial value: `dp[0][0] = dp[2][0] = 1, dp[1][0] = 0`
	- Transition function:
		```
		dp[i][j] = dp[i][j-1] if obstacles[j] != 1 else sys.maxsize
		if obstacles[i] != 1: # for first row
			for j in [1, 2]:  # side jump from other 2 rows
				dp[0][i] = min(dp[0][i], dp[j][i] + 1 if obstacles[i] != j+1 else sys.maxsize)
		```
	- Final result: `min(dp[0][-1], dp[1][-1], dp[2][-1])`
### Implementation
- `O(n) space & time solution`
```
class Solution:
    def minSideJumps(self, obstacles: List[int]) -> int:
        n = len(obstacles)
        dp = [[sys.maxsize] * n for _ in range(3)]
        dp[0][0]= 1
        dp[1][0]= 0
        dp[2][0]= 1
        for i in range(1, n):
            dp[0][i] = dp[0][i-1] if obstacles[i] != 1 else sys.maxsize
            dp[1][i] = dp[1][i-1] if obstacles[i] != 2 else sys.maxsize
            dp[2][i] = dp[2][i-1] if obstacles[i] != 3 else sys.maxsize
            if obstacles[i] != 1:
                for j in [1, 2]:
                    dp[0][i] = min(dp[0][i], dp[j][i] + 1 if obstacles[i] != j+1 else sys.maxsize)
            if obstacles[i] != 2:
                for j in [0, 2]:
                    dp[1][i] = min(dp[1][i], dp[j][i] + 1 if obstacles[i] != j+1 else sys.maxsize)
            if obstacles[i] != 3:
                for j in [0, 1]:
                    dp[2][i] = min(dp[2][i], dp[j][i] + 1 if obstacles[i] != j+1 else sys.maxsize)
        return min(dp[0][-1], dp[1][-1], dp[2][-1])
```
- `O(1) space solution`, since only the value from `i-1` is used
```
class Solution:
    def minSideJumps(self, obstacles: List[int]) -> int:
        n = len(obstacles)
        a, b, c = 1, 0, 1
        for i in range(1, n):
            a = a if obstacles[i] != 1 else sys.maxsize
            b = b if obstacles[i] != 2 else sys.maxsize
            c = c if obstacles[i] != 3 else sys.maxsize
            if obstacles[i] != 1:
                a = min(a, b + 1 if obstacles[i] != 2 else sys.maxsize, c + 1 if obstacles[i] != 3 else sys.maxsize)
            if obstacles[i] != 2:
                b = min(b, a + 1 if obstacles[i] != 1 else sys.maxsize, c + 1 if obstacles[i] != 3 else sys.maxsize)
            if obstacles[i] != 3:
                c = min(c, a + 1 if obstacles[i] != 1 else sys.maxsize, b + 1 if obstacles[i] != 2 else sys.maxsize)
        return min(a, b, c)
```