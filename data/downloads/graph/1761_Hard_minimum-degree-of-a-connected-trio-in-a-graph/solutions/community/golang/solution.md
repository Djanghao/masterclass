# Golang solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/1728127/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/1728127/)

---

```go
func minTrioDegree(n int, edges [][]int) int {
	link := make([]map[int]bool, n+1)
	linkTotal := make([]int, n+1)
	for i := range link {
		link[i] = make(map[int]bool, n)
	}
	for _, e := range edges {
		linkTotal[e[0]]++
		linkTotal[e[1]]++
		if e[0] < e[1] {
			link[e[0]][e[1]] = true
		} else {
			link[e[1]][e[0]] = true
		}
	}
	dig := math.MaxInt32
	for i := 1; i <= n; i++ {
		if curDig := helper1761(i, link, linkTotal); curDig < dig {
			dig = curDig
		}
	}
	if dig == math.MaxInt32 {
		return -1
	}
	return dig
}

func helper1761(l1 int, link []map[int]bool, linkTotal []int) int {
	dig := math.MaxInt32
	for l2 := range link[l1] {
		for l3 := range link[l2] {
			if link[l1][l3] == true {
				if tmpDig := linkTotal[l1]+linkTotal[l2]+linkTotal[l3]-6; tmpDig < dig {
					dig = tmpDig
				}
			}
		}
	}
	return dig
}
```