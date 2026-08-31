# Go reverse solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/553476/](https://leetcode.com/problems/pancake-sorting/solutions/553476/)

---

```go
func pancakeSort(A []int) []int {
	op := []int{}
	for dest := len(A); dest >= 1; dest-- {
		if A[dest-1] == dest {
			continue
		}
		for i := 0; i < dest-1; i++ {
			if A[i] == dest {
				reverse(A[:i+1])
				reverse(A[:dest])
				op = append(op, i+1, dest)
				break
			}
		}
	}
	return op
}

func reverse(A []int) {
	for i := 0; i < len(A)/2; i++ {
		A[i], A[len(A)-1-i] = A[len(A)-1-i], A[i]
	}
}
```