# Clean golang solution | O(1), O(1)

**Author:** klakovskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4996192/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4996192/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The first call to the function changes the number, the second returns it to its original state. If 0 matches, they will match the second time, but if 1 matches, they will match on the first call, not on the second.

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition of commonBits API.
 * func commonBits(num int) int;
 */

func findNumber() int {
	res := 0
	for i := 0; i < 30; i++ {
		n := 1 << i
		if commonBits(n) > commonBits(n) {
			res |= n
		}
	}
	return res
}

```