# Count digits as we go

**Author:** fengolly
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3738156/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/3738156/)

---

# Intuition
* Output should not have a `0`
* Count digits as we make 2x and 3x of n, and look for dupes as we go

# Approach
* Use an array as our map, much faster than a `map`
* Look for `0`s
* Count digits and look for dupes as we go

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func isFascinating(n int) bool {
	m := [9]bool{}

	for i, curr := 1, n; i <= 3; i, curr = i+1, n*(i+1) {
		for curr > 0 {
			d := curr % 10
			if d == 0 {
				return false
			}
			curr /= 10
			if m[d-1] {
				return false
			}
			m[d-1] = true
		}
	}
	return true
}
```

##### Using an array vs map to look for dupes:

```
Benchmark_isFascinatingMap
Benchmark_isFascinatingMap-8   	 3680568	       297.1 ns/op
Benchmark_isFascinating
Benchmark_isFascinating-8      	57233817	        21.02 ns/op
```