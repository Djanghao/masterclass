# [Go] BFS Binary Search, explanation + commented code

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/1995532/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/1995532/)

---

The idea is to let the person and fire move simultaneously, and check whether the person survives.

This is done with BFS. Each step, the person moves into any area where there is no fire currently, and the person has not visited before. If the person reaches the end, then the person survives.

Note that since the fire moves after the person, it is possible for fire to cover an area where a person went in the prior loop. So, we must check whether fire is covering the area the person is currently in within the BFS loop.

Assuming that the person waits a number of turns, then the cases are:

1. Person cannot beat the fire after waiting no turns at all => return -1
2. Person survives after waiting `m*n` turns => return 1e9 (fire must be unable to reach the end)
3. Person dies if waiting >= some number of turns

For the third case, perform binary search. 

```go

const (
	fire   = 1 << 0
	wall   = 1 << 1
	person = 1 << 2
)

func maximumMinutes(grid [][]int) int {
	grid[0][0] |= person

	m, n := len(grid), len(grid[0])

	// Bounds / wall check
	ok := func(i, j int) bool {
		return i >= 0 && j >= 0 && i < m && j < n && grid[i][j]&wall == 0
	}

	// Collect original fire positions
	origFires := [][2]int{}
	state := make([][]int, m)
	for i := range grid {
		state[i] = make([]int, n)
		for j := range grid[i] {
			if grid[i][j] == fire {
				origFires = append(origFires, [2]int{i, j})
			}
		}
	}

	currFire := make([][2]int, len(origFires))
	nextFire := make([][2]int, 0, len(origFires))
	currPerson := [][2]int{}
	nextPerson := [][2]int{}

	dirs := [][]int{{1, 0}, {0, 1}, {-1, 0}, {0, -1}}

	// Check whether a person can reach the end after waiting a number of turns
	survivesAfterTurns := func(turnsToWait int) bool {
		// Reset state
		for i := range grid {
			copy(state[i], grid[i])
		}
		currFire = currFire[:len(origFires)]
		currPerson = currPerson[:0]
		copy(currFire, origFires)

		// Perform BFS
		// If there is no place left for the fire or person to move, then the person
		// will die (by virtue of being stuck somewhere)
		// Note that t<=turnsToWait+1 is necessary because the person is only added
		// to `currPerson` after turnsToWait+1
		for t := 1; len(currFire) > 0 || len(currPerson) > 0 || t <= turnsToWait+1; t++ {
			nextPerson = nextPerson[:0]
			nextFire = nextFire[:0]
			if t == turnsToWait+1 {
				currPerson = append(currPerson, [2]int{0, 0})
			}

			// Move each person position one step further
			for _, p := range currPerson {
				// Note that the fire can cover the person's current position due to the
				// ordering of the current and next loop:
				if state[p[0]][p[1]]&fire > 0 {
					continue
				}
				for _, d := range dirs {
					i, j := p[0]+d[0], p[1]+d[1]
					if !ok(i, j) || state[i][j]&person > 0 || state[i][j]&fire > 0 {
						continue
					}
					if i == m-1 && j == n-1 { // Reached the end => person survives
						return true
					}
					state[i][j] |= person
					nextPerson = append(nextPerson, [2]int{i, j})
				}
			}

			// Move each fire one step further
			for _, f := range currFire {
				for _, d := range dirs {
					i, j := f[0]+d[0], f[1]+d[1]
					if !ok(i, j) || state[i][j]&fire > 0 {
						continue
					}
					if i == m-1 && j == n-1 { // Reached the end => person dies
						return false
					}
					state[i][j] |= fire
					nextFire = append(nextFire, [2]int{i, j})
				}
			}
			nextFire, currFire = currFire, nextFire
			nextPerson, currPerson = currPerson, nextPerson
		}
		return false
	}

	// Fast-track
	if !survivesAfterTurns(0) { // person will never survive
		return -1
	}
	if survivesAfterTurns(m * n) { // person cannot die
		return 1e9
	}

	// Perform binary search, finding the lowest number of turns which results in
	// the death of the person.
	lo, hi := 0, m*n
	for lo < hi {
		mid := lo + (hi-lo)/2
		if survivesAfterTurns(mid) {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return lo - 1
}
```