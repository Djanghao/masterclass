# Simple | O (n) | Beats 100% Runtime | Beats 100% Memory

**Author:** efk
**Votes:** 1
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3831899/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3831899/)

---

![image.png](./images/0.png)

# Approach
Input strings are lowercased, so a 32-bit number is enough to count characters. The use of bits provides ultra fast access times and a low memory footprint.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func runeBit(r rune) uint32 {
	return 1 << (r - 'a')
}

// https://leetcode.com/problems/optimal-partition-of-string/
func partitionString(s string) int {
	var result = 1

	var c uint32
	for _, r := range s {
		bit := runeBit(r)
		if 0 < c&bit {
			c = 0
			result++
		}
		c |= bit
	}

	return result
}

```