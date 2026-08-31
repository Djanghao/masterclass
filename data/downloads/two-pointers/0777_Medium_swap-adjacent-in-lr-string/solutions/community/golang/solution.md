# golang

**Author:** matheusgb
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/6117460/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/6117460/)

---

# Code
```golang []
func canTransform(start string, result string) bool {
    n := len(start)
	i, j := 0, 0

	for i < n || j < n {
		for i < n && start[i] == 'X' {
			i++
		}
		for j < n && result[j] == 'X' {
			j++
		}

		if i == n && j == n {
			return true
		}
		if i == n || j == n || start[i] != result[j] {
			return false
		}
		if start[i] == 'L' && i < j {
			return false
		}
		if start[i] == 'R' && i > j {
			return false
		}

		i++
		j++
	}

	return true
}
```