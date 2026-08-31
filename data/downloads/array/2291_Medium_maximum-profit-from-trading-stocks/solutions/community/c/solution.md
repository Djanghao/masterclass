# dp ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3143359/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3143359/)

---

```
int maximumProfit(vector<int>& p, vector<int>& f, int b)
{
	int dp[1001][1001]{};
	for(int i{}; i<size(p); ++i)
		for(int j{}; j<=b; ++j)
			dp[i+1][j] = max(j>=p[i] ? f[i]-p[i]+dp[i][j-p[i]] : 0, dp[i][j]);
		return dp[size(p)][b];
}
```