# C++ solution DP

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6172183/](https://leetcode.com/problems/count-paths-with-the-given-xor-value/solutions/6172183/)

---

```
// Please, upvote if you like it. Thanks :-)
// TC - O(m * n * numXORValues)
// SC - O(m * n * numXORValues)
int mod = 1e9+7;
int countPathsWithXorValue(vector<vector<int>>& grid, int k) {
	int m = grid.size(), n = grid[0].size();
	vector<vector<unordered_map<int, int>>> dp(m, vector<unordered_map<int, int>>(n));
	dp[0][0][grid[0][0]] = 1;
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			for (const auto& [curXOR, cnt] : dp[i][j]) {
				if (i + 1 < m) {
					int nextXOR = curXOR ^ grid[i + 1][j];
					dp[i + 1][j][nextXOR] = dp[i + 1][j].count(nextXOR) == 0 ? cnt : (dp[i + 1][j][nextXOR] + cnt) % mod;
				}
				if (j + 1 < n) {
					int nextXOR = curXOR ^ grid[i][j + 1];
					dp[i][j + 1][nextXOR] = dp[i][j + 1].count(nextXOR) == 0 ? cnt : (dp[i][j + 1][nextXOR] + cnt) % mod;
				}
			}
		}
	}
	return dp[m - 1][n - 1].count(k) > 0 ? dp[m - 1][n - 1][k] : 0;
}
```