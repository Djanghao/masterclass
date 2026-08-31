# Golang linear solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/1368726/](https://leetcode.com/problems/describe-the-painting/solutions/1368726/)

---

```go
func splitPainting(segments [][]int) [][]int64 {
    // math.MaxInt64 is large enough for sentinel
	line := make([]int, 100001)
	for i := range line {
		line[i] = math.MaxInt64
	}
	for _, v := range segments {
		if line[v[0]] == math.MaxInt64 {
			line[v[0]] = 0
		}
		if line[v[1]] == math.MaxInt64 {
			line[v[1]] = 0
		}
		line[v[0]] += v[2]
		line[v[1]] -= v[2]
	}
	painting := make([][]int64, 0)
	prefix := 0
	color := 0
    // Notice: from 1 to 100000, inclusive
	for i := 1; i <= 100000; i++ {
		if line[i] == math.MaxInt64 {
            // skip invalid index
			continue
		}
		if color != 0 {
			painting = append(painting, []int64{int64(prefix), int64(i), int64(color)})
		}
		color += line[i]
		prefix = i
	}
	return painting
}
```