# C++ solution LCS (Longest Common Subsequence)

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/5567606/](https://leetcode.com/problems/longest-repeating-substring/solutions/5567606/)

---

```
// Please, upvote if you like it. Thanks :-)
int longestRepeatingSubstring(string s) {
	int res = 0, n = s.size();
	vector<vector<int>> dp(n + 1, vector<int>(n, 0));
	for (int i = 0; i < n; i++)
		for (int j = 0; j < i; j++)
			if (s[i] == s[j]) {
				dp[i + 1][j + 1] = 1 + dp[i][j];
				res = max(res, dp[i + 1][j + 1]);
			}
	return res;
}
```