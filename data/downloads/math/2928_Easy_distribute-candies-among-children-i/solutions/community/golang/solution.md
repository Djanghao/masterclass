# 🔥 Go Solution | O(1) time and space complexity 🔥

**Author:** ConstantineJin
**Votes:** 5
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/5237768/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/5237768/)

---

# Intuition
Inclusion-exclusion principle.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
In determining the permissible ways to distribute candies within the given limit, we first ascertain the total possibilities and then subtract those that are invalid.

To calculate the total ways of distributing candies, we analogously consider the act of inserting boards between balls. This operation mirrors the allocation of candies among children. If there are no balls between two boards, denoting children exceeding the limit, the number of ways is represented by $C(n+1, 1)$. Conversely, if there are gaps between the boards, the count becomes $C(n+1, 2)$. Consequently, the total count amounts to $C(n+2, 2)$.

Subsequently, we address the count of invalid distributions. Initially, we focus on instances where at least one child exceeds the given limit. Here, we allocate $limit+1$ candies to one child and determine the ways to distribute the remaining candies among others, amounting to $C(n-limit+1, 2)$. Since any child can potentially receive this surplus, the count is multiplied by 3.

During this computation, scenarios where two or more children surpass the limit are calculated redundantly, necessitating subtraction. This involves instances where two children exceed the limit, represented by $C(n-2*limit, 2)$. Additionally, we need to correct for overcounting scenarios where three or more children exceed their limits, signified by $C(n-3*limit, 2)$.

In summary, the valid count is derived as $C(n+2, 2)-C(n-limit+1, 2)+C(n-2*limit, 2)-C(n-3*limit-1, 2)$.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func c2(n int) int {
	if n < 2 {
		return 0
	}
	return n * (n - 1) / 2
}

func distributeCandies(n, limit int) int {
	return c2(n+2) - c2(n-limit+1)*3 + c2(n-2*limit)*3 - c2(n-3*limit-1)
}
```