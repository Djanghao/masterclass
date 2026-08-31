# Easy Solution In Golang

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5358396/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5358396/)

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
func minimumBoxes(apple []int, capacity []int) int {
	appleTotal := 0
	for _, v := range apple {
		appleTotal += v
	}
	bags := 0
	count := 0
	res := 0
	sort.Sort(sort.Reverse(sort.IntSlice(capacity)))
	for _, v := range capacity {
		bags += v
		count++
		if bags >= appleTotal {
			res = count
			break
		}
	}
	return res
}
```