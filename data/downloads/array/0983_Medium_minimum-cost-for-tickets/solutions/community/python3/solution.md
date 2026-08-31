# Python DP solution + explanation

**Author:** kamoloff
**Votes:** 123
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/810806/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/810806/)

---

**Explanation:**

dp[i] means overall costs untill i-th day (included)
we have to check two conditions:

**1. i in days list:**
we have three option:
a) 1-pass:` dp[i] = dp[i-1] + costs[0]`
b) 7-pass: `dp[i] = dp[i-7] + costs[1]`
c) 30-pass:` dp[i] = dp[i-30] + costs[2]`
*in order to avoid negative index:*
a) 1-pass:` dp[i] =dp[max(0,i-1)] + costs[0]`
b) 7-pass: `dp[i] = dp[max(0,i-7)] + costs[1]`
c) 30-pass:` dp[i] = dp[max(0,i-30)] + costs[2]`
**2. i not in days:**
dp[i] = dp[i-1] 
which simply means we don't have to spend money, and total costs remains same

```
def mincostTickets(self, days: List[int], costs: List[int]) -> int:
	dp=[0 for i in range(days[-1]+1)]
	dy = set(days)
	for i in range(days[-1]+1):
		if i not in dy: dp[i]=dp[i-1]
		else: dp[i]=min(dp[max(0,i-7)]+costs[1],dp[max(0,i-1)]+costs[0],dp[max(0,i-30)]+costs[2])
	return dp[-1]
```
***
**Time complexity:** `O(n)`
**Space complexity:**` O(n)`
n = last day in days list + 1, time & space complexity max: `O(366)`