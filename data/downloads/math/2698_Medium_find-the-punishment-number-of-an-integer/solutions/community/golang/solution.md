# 👍Runtime 26 ms  Beats 71.43% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/5132562/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/5132562/)

---

# Code
```
func punishmentNumber(n int) int {
	count := 0
	for i := 1; i <= n; i++ {
		if check(0, i, 0, strconv.Itoa(i*i)) {
			count += i * i
		}
	}
	return count
}

func check(idx, n, s int, s1 string) bool {
	if idx == len(s1) {
		if s == n {
			return true
		} else {
			return false
		}
	}
	for j := idx; j < len(s1); j++ {
		val, _ := strconv.Atoi(s1[idx : j+1])
		if check(j+1, n, s+val, s1) {
			return true
		}
	}
	return false
}
```