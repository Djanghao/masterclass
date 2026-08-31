# go 1.21, clean code

**Author:** Colix
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/6013515/](https://leetcode.com/problems/array-nesting/solutions/6013515/)

---

```golang []
func arrayNesting(nums []int) int {
	visited := make([]bool, len(nums))
	var ret int
	for i := 0; i < len(nums); i++ {
		if visited[i] {
			continue
		}
		var length int
		for start := i; !visited[start]; start, length = nums[start], length+1 {
			visited[start] = true
		}
		ret = max(ret, length)
	}
	return ret
}
```