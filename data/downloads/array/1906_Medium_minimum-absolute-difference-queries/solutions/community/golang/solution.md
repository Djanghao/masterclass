# Golang O(100*N) solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1335530/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1335530/)

---

```go
func minDifference(nums []int, queries [][]int) []int {
	helper := make([][100]int, len(nums)+1)
	for i, v := range nums {
		helper[i+1] = helper[i]
		helper[i+1][v-1]++
	}
	result := make([]int, len(queries))
	for index, query := range queries {
		pre := -1
		curr := 255
		for i := 0; i < 100; i++ {
			if helper[query[1]+1][i] - helper[query[0]][i] != 0 {
				if pre != -1 && i - pre < curr {
					curr = i - pre
				}
                pre = i
			}
		}
		if curr == 255 {
			result[index] = -1
		} else {
			result[index] = curr
		}
	}
	return result
}
```