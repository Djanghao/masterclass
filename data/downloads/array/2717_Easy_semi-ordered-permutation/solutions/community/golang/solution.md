# Easy 2717

**Author:** Farruhbek
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/5575037/](https://leetcode.com/problems/semi-ordered-permutation/solutions/5575037/)

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
func semiOrderedPermutation(nums []int) int {
    n := len(nums)
	pos1, posN := 0, 0

	for i, num := range nums {
		if num == 1 {
			pos1 = i
		}
		if num == n {
			posN = i
		}
	}

	stepsFor1 := pos1
	stepsForN := n - 1 - posN

	if pos1 < posN {
		return stepsFor1 + stepsForN
	} else {
		return stepsFor1 + stepsForN - 1
	}
}
```