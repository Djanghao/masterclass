# Golang 100% beats speed, 100% beats memory

**Author:** smooth_operator_alex
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4336778/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4336778/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just group differing pairs by 2 elements
# Approach
2 same differing pairs solves by 1 step; 2 different differing pairs solves by 3 steps

# Code
```
func minimumSwap(s1 string, s2 string) int {

	xDif := 0
	yDif := 0

	for i, r := range s1 {
		if r == 'x' {
			if s1[i] != s2[i] {
				xDif++
			}
		} else {
			if s1[i] != s2[i] {
				yDif++
			}
		}
	}

	if (xDif%2 == 0) && (yDif%2 == 0) {
		return (xDif + yDif) / 2
	} else if (xDif%2 == 1) && (yDif%2 == 1) {
		return (xDif + yDif) / 2 + 1
	}
	return -1
    
}
```