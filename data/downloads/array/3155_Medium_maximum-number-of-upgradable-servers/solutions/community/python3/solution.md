# No binary search

**Author:** fm2alexei
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5194311/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5194311/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:

	def maxUpgrades(self, count: list[int], upgrade: list[int], sell: list[int], money: list[int]) -> list[int]:
		res = []
		for c, u, s, m in zip(count, upgrade, sell, money):
			to_sell = ceil((c*u - m)/(s + u))
			res.append(c - to_sell if to_sell > 0 else c)
		return res

```