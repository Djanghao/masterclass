# Go simple solution

**Author:** khangtn1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/2949780/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/2949780/)

---

# Complexity
- Time complexity: $$O(n*logk)$$ 
  - n = max(s.length, p.length)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
package main

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func maximumRemovals(s string, p string, removable []int) int {

	var isSubSeq func(remove map[int]bool) bool
	isSubSeq = func(remove map[int]bool) bool {
		i, j := 0, 0
		for i < len(s) && j < len(p) {
			if remove[i] == true || s[i] != p[j] {
				i++
				continue
			}

			i++
			j++
		}

		return j == len(p)
	}

	res := 0
	l, r := 0, len(removable)-1
	for l <= r {
		m := l + (r-l)/2

		remove := map[int]bool{}
		for i := 0; i <= m; i++ {
			remove[removable[i]] = true
		}
		if isSubSeq(remove) {
			l = m + 1
			res = max(res, m+1)
		} else {
			r = m - 1
		}
	}
	return res
}

```