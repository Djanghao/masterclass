# Python Graph & DP

**Author:** WangQiuc
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/212355/](https://leetcode.com/problems/maximum-vacation-days/solutions/212355/)

---

First convert flights to a graph represented by adjacency lists. An edge exists between two cities if there is a flight connecting them. And also include the source city in destination list since we can stay at the source city.

Then dp[week][city] recurrence: dp[w][c] = days[c][w] + max(dp[w+1][dest] for dest in g[c]).
It's easier to use bottom up here since the starting point (week 0) is fixed instead of ending point. Using bottom up, we can get the maximum value for week 0 in our dp table.

Eventually since we start at city 0, answer is the max days from city 0's destinations (in day 0, you can spend rest days of week 0 in city 0 or other cities connected to city 0)
```
def maxVacationDays(flights, days):
	n, k = len(days), len(days[0])
	g = [[j for j, dst in enumerate(city) if dst]+[i] for i, city in enumerate(flights)]
	dp = [[0] * n for _ in range(k+1)]
	for w in range(k)[::-1]:
		for c in range(n):
			dp[w][c] = days[c][w] + max(dp[w+1][dst] for dst in g[c])
	return max(dp[0][dst] for dst in g[0])
```