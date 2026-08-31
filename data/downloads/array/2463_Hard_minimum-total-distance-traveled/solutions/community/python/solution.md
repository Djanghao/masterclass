# [Python] DP

**Author:** delphih
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/2783212/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/2783212/)

---

Split a factory with limit `lim` into `lim` factories with limit `1`. 

`dp[i][j] =` the best cost to solve `0` to `i` robots with `0` to `j` factories (splited factories). So
- `dp[i][j] = min(dp[i][j-1], dp[i-1][j-1] + cost(i, j))`. 

Notice that all `dp[ ][j]` only use info from `dp[ ][j-1]`. So we can save some memory space by doing this DP is a good order. 


Bottom-up version DP:
```py
def minimumTotalDistance(self, R: List[int], F: List[List[int]]) -> int:
	R.sort()
	F.sort()
	dp = [0] + [float('inf')] * len(R)
	for j, (f, l) in enumerate(F):
		for _ in range(l):
			for i in range(len(R), 0, -1):
				dp[i] = min(dp[i], dp[i-1] + abs(R[i-1]-f))
	return dp[-1]
```