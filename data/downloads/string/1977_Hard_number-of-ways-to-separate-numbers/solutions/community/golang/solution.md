# 👍Runtime 1582 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/5389140/](https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/5389140/)

---

# Code
```
const p = 1_000_000_007

func numberOfCombinations(num string) int {
	n := len(num)
	if num[0] == '0' {
		return 0
	}
	if n == 1 {
		return 1
	}

	prev := make([]int64, n+1)
	next := make([]int64, n+1)
	prev[0] = 1
	next[0] = 1

	for d := 1; d <= n; d++ {
		copy(next[1:], prev[1:n+1])
		for j1, i1, j2 := 0, -d, d; j2 <= n; j1, j2, i1 = j1+1, j2+1, i1+1 {
			if num[j1] != '0' {
				if i1 < 0 || (num[i1] != '0' && ok(num, i1, j1, d)) {
					next[j2] += next[j1]
				} else {
					next[j2] += prev[j1]
				}
				if next[j2] >= p {
					next[j2] -= p
				}
			}
		}
		prev, next = next, prev
	}

	return int(prev[n])
}

func ok(num string, start1, start2, length int) bool {
	for length > 0 {
		length--
		c1 := num[start1]
		c2 := num[start2]
		start1++
		start2++
		if c1 > c2 {
			return false
		}
		if c1 < c2 {
			return true
		}
	}
	return true
}
```