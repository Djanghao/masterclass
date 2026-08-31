# Multiple solutions leading up to optimal in the end

**Author:** alacarte
**Votes:** 8
**Link:** [https://leetcode.com/problems/target-sum/solutions/330082/](https://leetcode.com/problems/target-sum/solutions/330082/)

---

Being able to derive the thought process is important in an interview.  So I thought I might share multiple solutions, each optimizing a previous solution until arriving at the final optimal one.

Like all DP problems, the most important and the most challenging part is recognizing the recurrence.  For this particular problem, we can build a recurrence either from the front to the end or from the end to the front.  I've chosen to do it from the end to the front (for reasons that will hopefully become clear later).

```
func TargetSumWaysRecursive(nums []int, S int) int {
    return helper(nums, len(nums)-1, S)
}

func helper(nums []int, i, sum int) int {
    if i == -1 {
	    if sum == 0 {
		    return 1
		}
		return 0
	}
	count := 0
	for sign := -1; sign <= 1; sign += 2 {
	    count += helper(nums, i-1, sum+sign*nums[i])
	}
	return count
}
```

The time complexity for this top-down recursive solution is O(2^n), which is extremely inefficient.  Aux space complexity is O(n) due to the recursion call stack.

Naturally we can see that this solution can be optimized by using backtracking to prune subtrees that are not promising.  So below is a trivial backtracking optimization.

```
func TargetSumWaysBacktracking(nums []int, S int) int {
    n := len(nums)
	prefixSums := make([]int, n)
	prefixSums[0] = nums[0]
	for i := 1; i < n; i++ {
	    prefixSums[i] = prefixSums[i-1] + nums[i]
	}
	return helper(nums, n-1, S, prefixSums)
}

func helper(nums []int, i, sum int, prefixSums []int) int {
    if i == -1 {
	    if sum == 0 {
		    return 1
		}
		return 0
	}
	
	// prune subtrees that are not promising in O(1) with the help of the precomputed prefixSums.
	if sum + prefixSums[i] < 0 || sum - prefixSums[i] > 0 {
	    return 0
	}
	
	count := 0
	for sign := -1; sign <= 1; sign += 2 {
	    count += helper(nums, i-1, sum+sign*nums[i], prefixSums)
	}
	return count
}
```

The time complexity for the backtracking solution is still O(2^n), but should run much faster since not the entire search space will be explored.  The aux. space complexity is still O(n), mostly due to the recursion and the prefixSums array.

Now looking back at the recursive solution, it is clear that many of the 2^n recursive calls are repetitive.  The number of subproblems should only be n * total, where `total` is the sum of all the values of the `nums` array.  So we could easily optimize by using memoization.

```
func TargetSumWaysMemoization(nums []int, S int) int {
    n := len(nums)
	total := 0
	for _, v := range nums {
	    total += v
	}
	memo := make([][]int, n+1)
	for i := range memo {
	    memo[i] = make([]int, 2*total+1)
		for j := range memo[i] {
		    memo[i][j] = math.MinInt64
		}
	}
	return helper(nums, total, n, S, memo)
}

func helper(nums []int, total, i, sum int, memo [][]int) int {
    j := sum + total
	if j < 0 || j >= len(memo[i]) {
	    return 0 // for cases where the target sum is way off and definitely unreachable
	}
	if memo[i][j] != math.MinInt64 {
	    return memo[i][j]
	}
	if i == 0 {
	    if sum == 0 {
		    memo[i][j] = 1
		} else {
		    memo[i][j] = 0
		}
	} else {
	    memo[i][j] = 0
		for sign := -1; sign <= 1; sign += 2 {
		    memo[i][j] += helper(nums, total, i-1, sum+sign*nums[i-1], memo)
		}
	}
	return memo[i][j]
}
```

The time complexity is now reduced to O(n * total).  Aux space complexity is the same O(n * total).  The time complexity is pretty good already, but this solution runs the risk of stack overflow when n is large.  So we could perhaps optimize this further by transforming it into an iterative bottom-up two-dimensional DP solution.

```
func TargetSumWays2DDP(nums []int, S int) int {
    n := len(nums)
	total := 0
	for _, v := range nums {
	    total += v
	}
	m := 2*total + 1
	
	// terminate early if target sum is definitely unreachable
	if j := S + total; j < 0 || j >= m {
	    return 0
	}
	
	dp := make([][]int, n+1)
	for i := range dp {
	    dp[i] = make([]int, m)
	}
	dp[0][0+total] = 1
	for i := 0; i < n; i++ {
	    for j := 0; j < m; j++ {
		    if dp[i][j] > 0 {
			    for sign := -1; sign <= 1; sign += 2 {
				    if nextSum := j + sign*nums[i]; nextSum >= 0 && nextSum < m {
					    dp[i+1][nextSum] += dp[i][j]
					}
				}
			}
		}
	}
	return dp[n][S+total]
}
```

Time complexity for this two-dimensional DP solution is O(n * total).  Aux. space complexity is the same.

Looking closely it is apparent that we only need two rows of the `dp` array.  So we optimize further to come up with a linear space solution.

```
func TargetSumWaysDPLinearSpace(nums []int, S int) int {
    n := len(nums)
	total := 0
	for _, v := range nums {
	    total += v
	}
	m := 2*total + 1
	
	if j := S + total; j < 0 || j >= m {
	    return 0
	}
	
	dp := make([][]int, 2)
	for i := range dp {
	    dp[i] = make([]int, m)
	}
	dp[0][0+total] = 1
	for i := 0; i < n; i++ {
	    for j := 0; j < m ; j++ {
		    if dp[0][j] > 0 {
			    for sign := -1; sign <= 1; sign += 2 {
				    if nextSum := j + sign*nums[i]; nextSum >= 0 && nextSum < m {
					    dp[1][nextSum] += dp[0][j]
					}
				}
			}
		}
		dp[0], dp[1] = dp[1], dp[0] // swap the two rows
		for j := 0; j < m; j++ {
		    dp[1][j] = 0 // clear the new second row for the next iteration
		}
	}
	return dp[0][S+total]
}
```

This solution is probably as good as it gets.  It has the optimal compleixty of O(n * total) and linear aux space complexity O(total).  However the code is long.  We can make it shorter by using a hashmap for each row.  This will actually be slower in practice because hashmaps are slower than arrays, but the time complexity remains the same.

```
func TargetSumWaysDPWithMaps(nums []int, S int) int {
    n := len(nums)
	dp := map[int]int{0: 1}
	for i := 0; i < n; i++ {
	    dp2 := make(map[int]int)
		for currSum, currCount := range dp {
		    for sign := -1; sign <= 1; sign += 2 {
			    dp2[currSum+sign*nums[i]] += currCount
			}
		}
		dp = dp2
	}
	return dp[S]
}
```