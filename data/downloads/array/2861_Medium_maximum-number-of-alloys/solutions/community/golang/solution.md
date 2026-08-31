# Go Binary Search With Explanation

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4632395/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4632395/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary search.

# Complexity
- Time complexity: $O(knlog(min(stock)+budget))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxNumberOfAlloys(n int, k int, budget int, composition [][]int, stock []int, cost []int) (ans int) {
	var mx = slices.Min(stock) + budget // upper boundary of binary search, suppose that both composition[i] and cost[i] are 1
	for _, c := range composition {
		ans += sort.Search(mx-ans, func(i int) bool { // lower boundary of binary serach is ans, because it's meaningless to find an answer lower than ans
			i += ans + 1              // i stands for the number of alloy being created
			var money int
			for j, s := range stock {
				if s < c[j]*i { // if you don't have enouth metal[j]
					money += (c[j]*i - s) * cost[j] // you need to buy more metal[j]
					if money > budget {             // overbudget
						return true
					}
				}
			}
			return false
		})
	}
	return
}
```