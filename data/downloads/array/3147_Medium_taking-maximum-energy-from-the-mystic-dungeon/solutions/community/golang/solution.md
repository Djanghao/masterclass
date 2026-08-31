# two pass golang solution

**Author:** conradlparker
**Votes:** 0
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5149138/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5149138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maximumEnergy(energy []int, k int) int {
	ans := -9223372036854775808
	l := len(energy)
	for i := l - k - 1; i >= 0; i-- {
		energy[i] += energy[i+k]
	}
	for i := 0; i < l; i++ {
		ans = max(ans, energy[i])
	}

	return ans
}
```