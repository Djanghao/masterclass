# Go simple solution

**Author:** khangtn1
**Votes:** 2
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3540485/](https://leetcode.com/problems/frog-jump/solutions/3540485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
package main

func canCross(stones []int) bool {
	if stones[1] != 1 {
		return false
	}

	dp := map[[2]int]bool{}
	var dfs func(i int, unit int) bool
	dfs = func(i int, unit int) bool {
		if i == len(stones)-1 {
			return true
		}

		if v, f := dp[[2]int{i, unit}]; f {
			return v
		}

		res := false
		for j := i + 1; j < len(stones); j++ {
			newUnit := stones[j] - stones[i]
			if newUnit >= unit-1 && newUnit <= unit+1 && dfs(j, newUnit) {
				res = true
				break
			}
		}
		dp[[2]int{i, unit}] = res
		return dp[[2]int{i, unit}]
	}
	return dfs(1, 1)
}

```