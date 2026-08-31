# dp ˆˆ

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5563158/](https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5563158/)

---

**time: `O(N)`; space: `O(N)`**
```
int validSubarraySplit(vector<int>& n) 
{
	int dp[1001]{};
	for(int i{}; i<size(n); ++i)
	{
		dp[i+1] = INT_MAX;
		for(int j{}; j<=i; ++j)
			if(gcd(n[i],n[j])!=1 and dp[j]<INT_MAX)
				dp[i+1] = min(dp[i+1], dp[j]+1);
	} 
	return dp[size(n)]==INT_MAX ? -1 : dp[size(n)];
}
```