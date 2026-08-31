# I use sort package

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/5834167/](https://leetcode.com/problems/minimum-number-game/solutions/5834167/)

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
```golang []
func numberGame(nums []int) (r []int) {
	sort.Ints(nums)
	for i := 0; i < len(nums); i += 2 {
		if nums[i] > nums[i + 1] {
			r = append(r, nums[i], nums[i + 1])
		} else {
			r = append(r, nums[i + 1], nums[i])
		}
	}
	return
}
```