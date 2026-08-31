# Golang: Translation of the Leetcode's solution

**Author:** mastedm
**Votes:** 1
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/3442054/](https://leetcode.com/problems/profitable-schemes/solutions/3442054/)

---

Leetcode's [solution](https://leetcode.com/problems/profitable-schemes/solution/) in Golang

If you have suggestions for refactoring, please write in the comments - I will be grateful!

# Code
```
type Solver struct {
	n         int
	minProfit int
	group     []int
	profit    []int
	memo      [][][]int
}

func profitableSchemes(n int, minProfit int, group []int, profit []int) int {
	solver := &Solver{n: n, minProfit: minProfit, group: group, profit: profit, memo: initMemo()}
	return solver.find(0, 0, 0)
}

func (s *Solver) find(pos int, count int, profit int) int {
	if pos == len(s.group) {
		if profit >= s.minProfit {
			return 1
		}
		return 0
	}

	if s.memo[pos][count][profit] != -1 {
		return s.memo[pos][count][profit]
	}

	totalWays := s.find(pos+1, count, profit)

	if count+s.group[pos] <= s.n {
		totalWays += s.find(pos+1, count+s.group[pos], min(s.minProfit, profit+s.profit[pos]))
	}

	s.memo[pos][count][profit] = totalWays % 1_000_000_007
	return s.memo[pos][count][profit]
}

func initMemo() [][][]int {
	memo := make([][][]int, 101)
	for i := 0; i < 101; i++ {
		memo[i] = make([][]int, 101)
		for j := 0; j < 101; j++ {
			memo[i][j] = make([]int, 101)
			for k := 0; k < 101; k++ {
				memo[i][j][k] = -1
			}
		}
	}
	return memo
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```