# Golang sliding solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-win-from-two-segments/solutions/4044812/](https://leetcode.com/problems/maximize-win-from-two-segments/solutions/4044812/)

---

# Code
```go
func maximizeWin(prizePositions []int, k int) int {
	hash := make(map[int]int)
	for _, p := range prizePositions {
		hash[p]++
	}
	keys := make([]int, 0, len(hash))
	for k := range hash {
		keys = append(keys, k)
	}
	sort.Ints(keys)
	l1, r1 := 0, 0
	maxWinScore := hash[keys[0]]
	for r1+1 < len(keys) && keys[r1+1] - keys[l1] <= k {
		r1++
		maxWinScore += hash[keys[r1]]
	}
	if r1 + 1 >= len(keys) {
		return maxWinScore
	}
	maxLine1 := maxWinScore
	curLine1 := maxWinScore
	maxWinScore += hash[keys[r1+1]]
	l2, r2 := r1+1, r1+1
	for r2+1 < len(keys) && keys[r2+1] - keys[l2] <= k {
		r2++
		maxWinScore += hash[keys[r2]]
	}
	curLine2 := maxWinScore - curLine1
	for r2 + 1 < len(keys) {
		r2++
		curLine2 += hash[keys[r2]]
		for keys[r2] - keys[l2] > k {
			curLine2 -= hash[keys[l2]]
			l2++
		}
		for r1 + 1 < l2 {
			r1++
			curLine1 += hash[keys[r1]]
			for keys[r1] - keys[l1] > k {
				curLine1 -= hash[keys[l1]]
				l1++
			}
			if curLine1 > maxLine1 {
				maxLine1 = curLine1
			}
		}
		if maxLine1 + curLine2 > maxWinScore {
			maxWinScore = maxLine1 + curLine2
		}
	}
	return maxWinScore
}
```