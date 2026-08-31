# Go, dfs

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/3518959/](https://leetcode.com/problems/count-special-integers/solutions/3518959/)

---

# Code
```
func countSpecialNumbers(n int) int {
	used := [10]bool{}
	cleanUsed := func() {
		for i := range used {
			used[i] = false
		}
	}

	count := 0
	for i := 1; i <= 9; i++ {
		used[i] = true
		count += dfs(used, i, n)
		cleanUsed()
	}
	return count
}

func dfs(used [10]bool, current int, limit int) int {
	if current > limit {
		return 0
	}

	answ := 1
	for i := 0; i <= 9; i++ {
		if !used[i] {
			used[i] = true
			answ += dfs(used, current*10+i, limit)
			used[i] = false
		}
	}
	return answ
}
```