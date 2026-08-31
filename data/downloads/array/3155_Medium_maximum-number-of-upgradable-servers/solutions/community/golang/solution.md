# Clean golang solution

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5163599/](https://leetcode.com/problems/maximum-number-of-upgradable-servers/solutions/5163599/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxUpgrades(count []int, upgrade []int, sell []int, money []int) []int {
	res := make([]int, len(count))
	for i := range count {
		res[i] = min(count[i], (count[i]*sell[i]+money[i])/(upgrade[i]+sell[i]))
	}
	return res
}
```