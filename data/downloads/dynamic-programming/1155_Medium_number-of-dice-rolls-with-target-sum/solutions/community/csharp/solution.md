# One-dimensional array DP

**Author:** anikit
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/2650678/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/2650678/)

---

We don't need to keep all rows of the DP matrix. The last row and the current row suffice:
```csharp
public int NumRollsToTarget(int n, int k, int target)
{
	var dp = new int[target + 1];
	dp[0] = 1;

	for (int i = 1; i <= n; i++)
	{
		var tmp = new int[dp.Length];

		for (int j = 1; j <= target; j++)
		{
			if (j > i * k) continue;

			for (int m = 1; m <= k && m <= j; m++)
			{
				tmp[j] = (tmp[j] + dp[j - m]) % 1_000_000_007;
			}
		}

		dp = tmp;
	}

	return dp[target];
}
```