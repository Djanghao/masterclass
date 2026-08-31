# I use modulus for index + 1

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5897457/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5897457/)

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
func sumOfSquares(nums []int) (r int) {
	for i := 0; i < len(nums); i++{
		if len(nums) % (i + 1) == 0 {
			r += nums[i] * nums[i]
		}
	}
	return 
}
```