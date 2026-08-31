# Go 4ms Solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/812982/](https://leetcode.com/problems/random-flip-matrix/solutions/812982/)

---

```go
type Solution struct {
	nodes   [][2]int
	hash    map[[2]int]bool
	row     int
	col     int
	useHash bool
}

func Constructor(n_rows int, n_cols int) Solution {
	useHash := false
	nodes := make([][2]int, 0)
	hash := map[[2]int]bool{}
	if n_rows*n_cols > 10000 {
		useHash = true
	} else {
		for r := 0; r < n_rows; r++ {
			for c := 0; c < n_cols; c++ {
				nodes = append(nodes, [...]int{r, c})
			}
		}
	}
	return Solution{
		nodes:   nodes,
		hash:    hash,
		row:     n_rows,
		col:     n_cols,
		useHash: useHash,
	}
}

func (s *Solution) Flip() []int {
	value := make([]int, 2)
	if s.useHash {
		for {
			r := rand.Intn(s.row)
			c := rand.Intn(s.col)
			if s.hash[[...]int{r, c}] == false {
				s.hash[[...]int{r, c}] = true
				value[0] = r
				value[1] = c
				break
			}
		}
	} else {
		index := rand.Intn(len(s.nodes))
		value[0] = s.nodes[index][0]
		value[1] = s.nodes[index][1]
		copy(s.nodes[index:], s.nodes[index+1:])
		s.nodes = s.nodes[:len(s.nodes)-1]
	}
	return value
}

func (s *Solution) Reset() {
	if s.useHash {
		s.hash = map[[2]int]bool{}
	} else {
		s.nodes = make([][2]int, 0, s.row*s.col)
		for r := 0; r < s.row; r++ {
			for c := 0; c < s.col; c++ {
				s.nodes = append(s.nodes, [...]int{r, c})
			}
		}
	}
}
```