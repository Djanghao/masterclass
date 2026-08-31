# [Golang] 8 directions solution

**Author:** Yushi_Lu
**Votes:** 1
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/470455/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/470455/)

---

```

func queensAttacktheKing(queens [][]int, kingLoc []int) [][]int {
	var dir [8][2]int = [8][2]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}}
	var res [][]int
	var m map[int]bool = make(map[int]bool)
	for _, q := range queens {
		m[q[0]*10+q[1]] = false
	}
	for _, d := range dir {
		// var shouldBreak bool = false
		var king []int = []int{kingLoc[0], kingLoc[1]}
		for true {
			if king[0]+d[0] >= 8 || king[0]+d[0] < 0 || king[1]+d[1] >= 8 || king[1]+d[1] < 0 {
				break
			}
			king[0] += d[0]
			king[1] += d[1]

			if _, ok := m[king[0]*10+king[1]]; ok == true {
				res = append(res, king)
				break
			}

		}
	}
	return res
}
```