# Go simple solution

**Author:** khangtn1
**Votes:** 4
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/4109657/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/4109657/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O((m+n)*logm)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
package main

import "sort"

func successfulPairs(spells []int, potions []int, success int64) []int {
	sort.Ints(potions)
	res := []int{}
	for i := 0; i < len(spells); i++ {
		l, r := 0, len(potions)-1
		for l <= r {
			m := l + (r-l)/2
			if int64(spells[i]*potions[m]) < success {
				l = m + 1
			} else {
				r = m - 1
			}
		}
		res = append(res, len(potions)-l)
	}
	return res
}

```