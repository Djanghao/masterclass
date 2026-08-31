# Easy Solution In GO

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5534082/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5534082/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumCost(cost []int) int {
	sort.Ints(cost)
	res := 0
	for i := len(cost) - 1; i >= 0; i-- {
		if (len(cost)-i)%3 != 0 {
			res += cost[i]
		}
	}
	return res
}

```