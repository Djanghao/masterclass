# Go | DP | Beat 100% | Explanation

**Author:** ConstantineJin
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4472653/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4472653/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
DP.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Find the subproblem for the original problem
    This is equivalent to dividing the array `jobDifficulty` into `d` segments (each segment must not be empty). We need to find the maximum value for each segment and add these maximum values together. Among all the possible segmentation schemes, the minimum sum of maximum values is the value we want to return. If `n` is less than `d`, it is impossible to meet the requirement of completing at least one job every day, so return `-1`.
2. Definition of the recursive function and state transitions
    `dfs(i,j)` stands for the minimum difficulty of finishing the first `i+1` jobs within the first `j+1` days.
    If there is only one day left (`j==0`) you need to finish all the remaining jobs.
    `dfs(n-1, d-1)` is the answer.

# Complexity
- Time complexity: $O(n^2d)$, $n$ is the length of ```jobDifficulty```
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(nd)$, $n$ is the length of ```jobDifficulty```
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
### Recursion
```
func minDifficulty(jobDifficulty []int, d int) int {
	var n = len(jobDifficulty)
	if n < d {
		return -1
	}
	var mem = make([][]int, n)
	for i := range mem {
		mem[i] = make([]int, d)
		for j := range mem[i] {
			mem[i][j] = -1
		}
	}
	var dfs func(int, int) int // dfs(i,j int) return the minimum difficulty of the first i+1 jobs completed in the first j+1 days
	dfs = func(i int, j int) (res int) {
		var p = &mem[i][j]
		if *p != -1 {
			return *p
		}
		defer func() { *p = res }()
		if j == 0 { // only one day left, you need to complete all the remaining jobs
			return slices.Max(jobDifficulty[:i+1])
		}
		var today = jobDifficulty[i]
		res = jobDifficulty[i] + dfs(i-1, j-1)
		for k := i; k >= j; k-- {
			today = max(today, jobDifficulty[k]) // today's job difficulty
			res = min(res, dfs(k-1, j-1)+today)
		}
		return
	}
	return dfs(n-1, d-1)
}
```
### Iteration
```
func minDifficulty(jobDifficulty []int, d int) int {
	var n = len(jobDifficulty)
	if n < d {
		return -1
	}
	var f = make([]int, n)
	f[0] = jobDifficulty[0]
	for i := 1; i < n; i++ {
		f[i] = max(f[i-1], jobDifficulty[i])
	}
	for i := 1; i < d; i++ {
		for j := n - 1; j >= i; j-- {
			f[j] = math.MaxInt
			var mx int
			for k := j; k >= i; k-- {
				mx = max(mx, jobDifficulty[k])
				f[j] = min(f[j], f[k-1]+mx)
			}
		}
	}
	return f[n-1]
}
```