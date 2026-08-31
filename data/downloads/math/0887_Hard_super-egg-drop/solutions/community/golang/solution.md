# [Go] DP with explanation

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/1732346/](https://leetcode.com/problems/super-egg-drop/solutions/1732346/)

---

# Intro

This is a classic recursive problem.

With one egg, the only way to find the right floor is to drop the egg at each floor until the egg breaks.

With two eggs, there is some optimal floor which reduces the search space. 

Let's say the egg is dropped on floor `x`. Then there are two cases:

1. The egg does not break. Both eggs can be used to explore higher floors and so the minimal number of moves is given by `superEggDrop(k, n-x)`
2. The egg breaks. We are forced to explore floors one by one from the bottom up, but have reduced the number of floors to `x-1`, i.e. the problem is now `superEggDrop(k-1, x-1)`.

The goal is to find the floor that minimizes the maximum amount of moves necessary for this recursion, i.e. 

```
dp[k][n] = 1 + max(dp[k-1][x-1], dp[k][n-x])
```

# A better approach

The problem with the first approach is that there are up to `10'000` floors, and the recursion is O(KN^2).

Instead of calculating the maximum number of ***moves*** for each ***floor***, 
we may calculate the maximum number of ***floors*** reachable by `m` ***moves***.

With `m=1`, `k` (# eggs) does not matter. The maximum floor is always 1.

For `m>1`, there are two cases once again. For the current move:

1. Egg does not break. Explore some number of floors with one less move and the same amount of eggs.
2. Egg breaks. Explore some number of floors with one less move and one less egg.

And so, we are able to cover the current + max floor above + max floor below.
Or in other words, with `maxFloor[m][k]` where `m = moves` and `k = eggs`, we get:

```
maxFloor[m][k] = 1 + maxFloor[m-1][k] + maxFloor[m-1][k-1]
```

*Remember: the 1 in the recursion is due to the egg drop checking the current floor.*

By iterating backwards from `k` to 1, this update can be done in-place, i.e. 1D DP.

# Solution

```go
func superEggDrop(k int, n int) int {
	maxFloor := make([]int, k+1)
	m := 0
	for maxFloor[k] < n {
		m++
		for i := k; i > 0; i-- {
			maxFloor[i] = maxFloor[i-1] + maxFloor[i] + 1
		}
	}
	return m
}
```