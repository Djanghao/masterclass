# Easy 1D DP Solution in Go ✅✅

**Author:** mVedrGo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5058889/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5058889/)

---

# Intuition
All numbers in a column should same, hence we need only 2 states the number used in previous column (>=0 && <=9) and the present index/column.

# Approach
We are trying all combinations, but we are only dependent on the number present in the previous index, as the only condition is all the numbers in the present column should be same and should be different from all the numbers in the previous column.

# Complexity
- Time complexity:
$$O(10*n)$$

- Space complexity:
$$O(10*n)$$

# Code
```
func calc(num, col int, grid [][]int) int {
	ans := 0
	for I := range len(grid) {
		if grid[I][col] != num {
			ans++
		}
	}
	return ans
}

func solve(i, prev, n int, grid [][]int, dp *[][]int) int {
	if i >= n {
		return 0
	}
	if (*dp)[i][prev+1] != -1 {
		return (*dp)[i][prev+1]
	}
	ans := math.MaxInt32
	for I := range 10 {
		if I != prev {
			ans = min(ans, calc(I, i, grid)+solve(i+1, I, n, grid, dp))
		}
	}
	(*dp)[i][prev+1] = ans
	return ans
}

func Init2d[T any](n, m int, val T) [][]T {
	arr := make([][]T, n)
	for i := range n {
		arr[i] = make([]T, m)
	}
	for i := range n {
		for j := range m {
			arr[i][j] = val
		}
	}
	return arr
}

func minimumOperations(grid [][]int) int {
	dp := Init2d(1005, 15, -1)
	return solve(0, -1, len(grid[0]), grid, &dp)
}

```