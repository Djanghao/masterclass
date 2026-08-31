# Golang approach

**Author:** Aghul
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/6111703/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/6111703/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
Time Complexity: 
\uD835\uDC42
(
\uD835\uDC5B
)
O(n), where n is the length of the input string.

- Space complexity:
Space Complexity: 
\uD835\uDC42
(
\uD835\uDC5B
)
O(n), due to the space needed for memoization and the recursive call stack.

# Code
```golang []
var memo [5][6][5][6][301]int
var n int

func minimumDistance(s string) int {
	n = len(s)
	for i := 0; i < 5; i++ {
		for j := 0; j < 6; j++ {
			for k := 0; k < 5; k++ {
				for l := 0; l < 6; l++ {
					for m := 0; m < 301; m++ {
						memo[i][j][k][l][m] = -1
					}
				}
			}
		}
	}
	res := math.MaxInt32
	for i := 0; i < 26; i++ {
		for j := 0; j < 26; j++ {
			res = min(res, dp(s, 0, i/6, i%6, j/6, j%6))
		}
	}
	return res
}

func dp(s string, idx, r1, c1, r2, c2 int) int {
	if idx == n {
		return 0
	}
	if memo[r1][c1][r2][c2][idx] != -1 {
		return memo[r1][c1][r2][c2][idx]
	}
	a := s[idx] - 'A' // `a` is byte here
	r := int(a) / 6   // Convert to int for calculations
	c := int(a) % 6   // Convert to int for calculations
	memo[r1][c1][r2][c2][idx] = min(
		abs(r-r1)+abs(c-c1)+dp(s, idx+1, r, c, r2, c2),
		abs(r-r2)+abs(c-c2)+dp(s, idx+1, r1, c1, r, c),
	)
	return memo[r1][c1][r2][c2][idx]
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```