# Python rolling DP

**Author:** WangQiuc
**Votes:** 8
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/585673/](https://leetcode.com/problems/restore-the-array/solutions/585673/)

---

We can convert it to a knapsack problem.
A substring `s[i:j]` is a potential item. But we need to check its validness as
```
def valid(s):
	return s[0] != "0" and int(s) <= k
```
Then we build a dp recursion to count. `dp[i]` indicates the number of ways to restore `s[i:]` and the recursion will be
```
dp[i] = valid(s[i:])
dp[i] += sum(dp[j] for j in range(i+1, min(i+d+1, n)) if valid(s[i:j])
```
As for any valid item `s[i:j]`, we can put it on the top of knapsack combination for `s[j:]`.

And we don't need to check all the `j` from `i+1` to `len(s)`. That will make problem be `O(n^2)`. We just need to check `j` from `i+1` to `i+K` where `K` is `log10(k)` which is garanteed to be less than `10` as `k <= 10 ^ 9` so that time complexity would be `O(Kn)`
And since we only need to roll back at most `K` elements, we could use rolling dp modular index by `K+1` and reduce space to `O(K)`
```
def numberOfArrays(s, k):
	N, K, M = len(s), len(str(k)) + 1, 10**9+7
	def valid(s):
		return s[0] != "0" and int(s) <= k
	dp = [0] * K
	for i in range(N-1, -1, -1):
		dp[i%K] = i > N-K and valid(s[i:])
		dp[i%K] = (dp[i%K] + sum(dp[j%K] for j in range(i+1, min(i+K+1, N)) if valid(s[i:j]))) % M
	return dp[0]
```
