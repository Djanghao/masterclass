# Golang loop detection solution [with runnable tests and comments]

**Author:** Trane9991
**Votes:** 2
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/759314/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/759314/)

---

Playground with tests: https://play.golang.org/p/oDVT9W6RDE5

```go
func prisonAfterNDays(cells []int, N int) []int {
	var cur, dayOneCells [8]int

	// copy the input slice to the array
	// so we can do the comparison faster
	for i, n := range cells {
		cur[i] = n
	}

	// function which will do all the cells moving
	// for one day
	iterate := func() {
		// create new array of empty cells
		tmp := [8]int{}

		for i := 1; i < len(cur)-1; i++ {
			// if condition satisfied
			// mark cell as occupied
			if cur[i-1] == cur[i+1] {
				tmp[i] = 1
			}
		}

		// replace old cells array
		// with the new one
		cur = tmp
	}

	for day := 0; day < N; day++ {
		iterate()
		if day == 0 {
			// initial state is unique, so we save cells state
			// after the first modification to be able to detect loop later
			dayOneCells = cur
		} else if cur == dayOneCells {
			// if current cell state equals the state as we had one the day one
			// this means we did the loop of all possible states
			// knowing that, we can skip calculations for all the future days
			// example:
			// if we know, that we did whole loop in 14 days
			// and we need to know state of the cells on the day 30
			// we can skip directly to the day 28 and
			// do the rest of the calculations from there
			day *= ((N - 1) / day)
		}
	}

	// copy values from our array
	// back to the initial slice
	for i, n := range cur {
		cells[i] = n
	}

	// return the modified initial slice
	return cells
}
```