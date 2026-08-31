# Go Solution - 56ms

**Author:** phea
**Votes:** 1
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/859109/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/859109/)

---

This is a graph problem, so we record all the incoming and outgoing edges and then loop through the edges for the available flower. I use a bitmask to do the last part for space and time optimization.
https://github.com/phea/leetcode-go

```go
func gardenNoAdj(N int, paths [][]int) []int {
	adjancy := make([][]int, N+1)
	for _, p := range paths {
		adjancy[p[0]-1] = append(adjancy[p[0]-1], p[1])
		adjancy[p[1]-1] = append(adjancy[p[1]-1], p[0])
	}

	garden := make([]int, N)
	for i := 0; i < N; i++ {
		var mask int
		for _, edge := range adjancy[i] {
			// get number avaiable
			mask |= 1 << garden[edge-1]
		}

		for k := 1; k <= 4; k++ {
			if (mask>>k)&1 == 0 {
				garden[i] = k
				break
			}
		}
	}

	return garden
}
```