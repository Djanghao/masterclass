# Detailed explanation and code comments | DP | Golang

**Author:** IvanTerekh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5524721/](https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5524721/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
## Terminology

Height - the number of colored cells in the column.

## Brute force

Brute force solution would fix height of every column and try all the other combinations for every other column. First column would have $$n$$ possible positions, for every position the next column would have $$n$$ more positions, and the same for every next column. For $$n$$ columns this would result in $$O(n^n)$$ complexity. Therefore, we have to find a better solution.

## Iterate through columns

The most intutive way to break down the problem is to start with a single column and add more columns at every iteration.

$$
\\begin{matrix}
    ...       & x_{1i} & x_{1,i+1} & ...  \\\\
    ...       & x_{2i} & x_{2,i+1} & ... \\\\
    ...       \\\\
    ...       & x_{ni} & x_{n,i+1} & ...
\\end{matrix}
$$

When we know optimal scores for every possible height of column `i`, we can try to calculate the maximum after adding one column.

There are 2 sources of points when we add column `i+1`:
- Cells from column `i+1`. When height of column `i` is `k`, the new column can contibute values `grid[1][i+1], grid[2][i+1], ..., grid[k][i+1]`
- Cells from column `i`. When height of column `i+1` is `k`, the last column can contibute values `grid[1][i], grid[2][i], ..., grid[k][i]`.

Note that when both `i` and `i+1` are colored, both colored column parts won't be added to the score. However, the cells next to the longest column will be added. E.g. for columns

$$
\\begin{matrix}
    ...       & X_{1i} & X_{1,i+1} & ...  \\\\
    ...       & X_{2i} & X_{2,i+1} & ... \\\\
    ...       \\\\
    ...       & X_{ki} & X_{k,i+1} & ... \\\\
    ...       & X_{k+1,i} & O_{k+1,i+1} & ... \\\\
    ...       & X_{k+2,i} & O_{k+2,i+1} & ... \\\\
    ...       \\\\
    ...       & X_{li} & O_{l,i+1} & ... \\\\
    ...       & O_{l+1,i} & O_{l+1,i+1} & ... \\\\
    ...       \\\\
    ...       & O_{ni} & O_{n,i+1} & ...
\\end{matrix}
$$

The added value will be $$\\sum_{j=k+1}^{l}(grid)_{j,i}$$.

## Previously added columns

Let's look closer to iteration when column `i+1` is added.
$$
\\begin{matrix}
    ...       & x_{1i} & x_{1,i+1} & ...  \\\\
    ...       & x_{2i} & x_{2,i+1} & ... \\\\
    ...       \\\\
    ...       & x_{ni} & x_{n,i+1} & ...
\\end{matrix}
$$

Coloring column `i+1` will only add value if the cells at column `i` where not added before. If we only know the optimal solution so far for given height of `i`, there is no way to know if values from column `i` where added on previous iterations.

To address this issue we will track 2 different solution arrays:
- Max score if column `i` has height `lastHeight`
- Max score if column `i` has height `lastHeight`, excluding the score contibuted by the column `i` itself

This way we keep track of these tricky cases:
- Column `i+1` is higher than `i` and `i-1`. The diff between heights of `i+1` and `i` can be added to the max score for `i` excluding score from `i`. E.g. $$(DPexcl)_{i+1}, (DP)_{i+1} \\sim (DPexcl)_{i} + \\sum_{j=k+1}^{l}(grid)_{j,i}$$, where `k` is height of `i` and `l` is height of `i+1`.
- Column `i-1` is higher than `i` and `i+1`. The diff between heights of `i-1` and `i` is already included in $$DP_{i}$$.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use DP table of size $$n\	imes (n+1) \	imes 2$$. Where first $$n$$ is for every column, $$n+1$$ is for every possible height $$\\overline{0, n}$$, and $$2$$ is to track both max score and max score excluding the last column's contribution. Every cell of the DP table depicts the max score with the given number of columns and last columns height.
2. Iterate over columns by `i` to build max score for `i+1`
2.1 For each column `i` consider every `lastHeight` of the i'th column.
2.2 For each `lastHeight`, consider every possible `height` of `i+1`'th column. Track the maximum scores including and excluding the last column for `dp[i+1][height]`.
3. Find the maximum in the DP table.

# Complexity
- Time complexity: $$O(n^3)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$. Can be easily optimized to $$O(n)$$ since `dp[i+1]` only depends on `dp[i]`. However, this doesn't make much difference with `n<=100` and input being $$O(n^2)$$.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Acknowledgment

Based on [this Python solution](https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5507349/python-dp-solution-with-o-n-3-time-complexity-o-n-space-complexity/)


# Code
```
func maximumScore(grid [][]int) int64 {
	dp := make([][][2]int, len(grid)) // i, lastHeight, inclColScore
	for i := range dp {
		dp[i] = make([][2]int, len(grid)+1)
	}

	for i := 0; i < len(dp)-1; i++ { // i is the column number
		for lastHeight := range dp[0] { // height of last column (i), height is the amount of colored cells
			lastColScore := 0                       // score from column i added by coloring column i+1
			nextColScore := 0                       // score from column i+1 added by coloring column i
			for row := 0; row < lastHeight; row++ { // score from col i+1 calculated according to height of i
				nextColScore += grid[row][i+1]
			}
			for height := range dp[0] { // height of next column (i + 1)
				if height > 0 && height <= lastHeight { // next column doesn't contibute score from the colored cells
					nextColScore -= grid[height-1][i+1]
				}
				if height > lastHeight { // add score from the neighbour of the newly colored cell
					lastColScore += grid[height-1][i]
				}

				exclColScore := 0 // indecies of the 2-cell array
				inclColScore := 1
				dp[i+1][height][exclColScore] = max( // either previously conidered value or a new higher value
					dp[i+1][height][exclColScore],
					dp[i][lastHeight][exclColScore] + lastColScore, // include col score when it was excluded
					dp[i][lastHeight][inclColScore],
				)
				dp[i+1][height][inclColScore] = max(
					dp[i+1][height][inclColScore],
					dp[i][lastHeight][inclColScore] + nextColScore,
					dp[i][lastHeight][exclColScore] + nextColScore + lastColScore,
				)
			}
		}
	}

	res := 0
	i := len(dp) - 1
	for lastHeight := range dp[i] { // find max score
		res = max(res, dp[i][lastHeight][0], dp[i][lastHeight][1])
	}

	return int64(res)
}

```