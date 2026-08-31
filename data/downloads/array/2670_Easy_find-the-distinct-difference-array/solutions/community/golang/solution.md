# Go || Use Two Map

**Author:** Wild-Boar
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3494886/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3494886/)

---

# Complexity
- Time complexity: $$O(2n)$$
- Space complexity: $$O(n)$$

# Code
```
func distinctDifferenceArray(nums []int) []int {
	n := len(nums)
	res := make([]int, n)
	m1, m2 := make(map[int]int), make(map[int]int)
	for i := 0; i < n; i++ {
		m2[nums[i]]++
	}

	for i := 0; i < n; i++ {
		m1[nums[i]]++
		m2[nums[i]]--
		if m2[nums[i]] == 0 {
			delete(m2, nums[i])
		}
		res[i] = len(m1) - len(m2)
	}
	return res
}
```