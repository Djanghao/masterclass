# Top-down, bottom-up, explained

**Author:** sebnyberg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4196245/](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/solutions/4196245/)

---

# Solution

## Min-cost semi-palindrome substrings

There are $\\mathrm{O}(n^2)$ substrings.

For a given divisor $d$, the minimum cost of the semi-palindrome is found by incrementing the cost by 1 for any pairwise mismatch. Comparing all letters is done in $\\mathrm{O}(n)$.

The total number of divisors for a given substring is given by the divisor bound $\\mathrm{O}(n^{\\left(\\frac{1.5739\\log{2}}{\\log{\\log{n}}}\\right)})$. Or, to make things simple, we know that divisors of a number can be found in $\\mathrm{O}(\\sqrt{n})$, which is way easier to type.

So, with $\\mathrm{O}(n^2)$ substrings, $\\mathrm{O}(n)$ length substrings, and $\\mathrm{O}({\\sqrt{n}})$ divisors, we get a total time complexity of $\\mathrm{O}(n^{3.5})$. 

These results can be memoized with a 2D array ($\\mathrm{O}(n^2)$ space).

Example implementation:

```go
func minPalinCost(s string) int {
	n := len(s)
	res := math.MaxInt32
	for d := 1; d < n; d++ {
		if n%d != 0 {
			continue
		}
		var cost int
		for i := 0; i < d; i++ {
			for l, r := i, n+i-d; l < r; l, r = l+d, r-d {
				if s[l] != s[r] {
					cost++
				}
			}
		}
		res = min(res, cost)
	}
	return res
}
```

## Combining substrings to find the optimal solution

To find the optimal solution, make cuts of the string so that one cut only has one substring, and the remainder is recursively calculated with `k-1`. 

A na\xEFve, top-down approach would look something like this:

```go
func minimumChanges(s string, k int) int {
	if k <= 0 {
		if len(s) == 0 {
			return 0
		}
		return math.MaxInt32
	}
	res := math.MaxInt32
	for j := 1; j <= len(s)-k+1; j++ {
		cost := minPalinCost(s[:j])
		res = min(res, cost+minimumChanges(s[j:], k-1))
	}
	return res
}

// minPalinCost returns the minimum cost to make a semi-palindrome
// of the string s
func minPalinCost(s string) int {...}
```

Sadly, this is not fast enough. We need to memoize both the outer loop, and calls to the `minCost` function to pass time constraints.

## Top-down, simple DP ~360ms

Below is a top-down, sub-optimal solution that uses $\\mathrm{O}(n^3)$ state and $\\mathrm{O}(n^{3.5})$ time complexity.

Note that using a string as a key in Go is equivalent to storing two words (string length and pointer to string data), which is usually 128 bits. The key size is not a performance problem in this case, but the use of a map as opposed to a 2/3d array or slice makes this solution rather slow.

### Code

```go
func minimumChanges(s string, k int) int {
	mem := make(map[memKey]int)
	palinMem := make(map[string]int)
	return minChanges(mem, palinMem, s, k)
}

type memKey struct {
	s string
	k int
}

func minChanges(mem map[memKey]int, palinMem map[string]int, s string, k int) int {
	if len(s) == 0 {
		return 0
	}
	if k <= 0 {
		return math.MaxInt32
	}
	kk := memKey{s, k}
	if v, exists := mem[kk]; exists {
		return v
	}
	res := math.MaxInt32
	for j := 1; j <= len(s)-k+1; j++ {
		cost := minPalinCost(palinMem, s[:j])
		res = min(res, cost+minChanges(mem, palinMem, s[j:], k-1))
	}
	mem[kk] = res
	return res
}

func minPalinCost(mem map[string]int, s string) int {
	n := len(s)
	if v, exists := mem[s]; exists {
		return v
	}
	res := math.MaxInt32
	for d := 1; d < n; d++ {
		if n%d != 0 {
			continue
		}
		var cost int
		for i := 0; i < d; i++ {
			for l, r := i, n+i-d; l < r; l, r = l+d, r-d {
				if s[l] != s[r] {
					cost++
				}
			}
		}
		res = min(res, cost)
	}
	mem[s] = res
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```

## Bottom-up, optimized space ~60ms

Below is an optimized solution that reduces size complexity for the substring cutting from $\\mathrm{O}(n^3)$ to $\\mathrm{O}(n)$.
 
Time complexity is still bound by the palindrome finder ($\\mathrm{O}(n^{3.5})$).

### Code

```go
func minimumChanges(s string, k int) int {
	n := len(s)

	// Pre-calculate the cost of making a semi-palindrome of s[i:j]
	palinCost := make([][]int, n+1)
	for i := range palinCost {
		palinCost[i] = make([]int, n+1)
		for j := range palinCost {
			if j > i {
				palinCost[i][j] = minPalinCost(s[i:j])
			} else {
				palinCost[i][j] = math.MaxInt32
			}
		}
	}

	// cost[i] = cost of making k substrings of the string s[i:]
	cost := make([]int, n+1)
	for i := range cost {
		// The cost of making 1 substring is given by the palindrome cost
		cost[i] = palinCost[i][n]
	}
	next := make([]int, n+1)

	// For an ever increasing amount of substrings
	for kk := 2; kk <= k; kk++ {
		for i := range next {
			next[i] = math.MaxInt32
		}

		// Cut the string s[i:] into two parts, s[i:j] and s[j:]
		//
		// The left side will have one substring, and s[j:] will contain the
		// other substrings.
		//
		// Try all such cuts and see which one is optimal.
		end := n - (kk - 1)
		for i := 0; i < end; i++ {
			for j := i + 1; j <= end; j++ {
				c := palinCost[i][j]
				next[i] = min(next[i], c+cost[j])
			}
		}

		cost, next = next, cost
	}

	return cost[0]
}

func minPalinCost(s string) int {
	n := len(s)
	res := math.MaxInt32
	for d := 1; d < n; d++ {
		if n%d != 0 {
			continue
		}
		var cost int
		for i := 0; i < d; i++ {
			for l, r := i, n+i-d; l < r; l, r = l+d, r-d {
				if s[l] != s[r] {
					cost++
				}
			}
		}
		res = min(res, cost)
	}
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```