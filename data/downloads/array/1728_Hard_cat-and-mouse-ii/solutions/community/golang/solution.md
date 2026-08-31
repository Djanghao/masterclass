# Explanation & clean code with comments

**Author:** sebnyberg
**Votes:** 0
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/3596234/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/3596234/)

---

# Approach

The approach here is very similar to the [Cat and Mouse](https://leetcode.com/problems/cat-and-mouse/) problem.

The game consists of a number of states. One for each combination of:

* Cat position
* Mouse position
* Whose turn it is (cat or mouse)

## The crystal ball

The trick to finding a solution is to work backwards from  terminal states, i.e. states that have a guaranteed outcome.

Initially, there are three terminal states:

1. It's the mouse's turn. The **cat** (somehow) made it to the **mouse**. The cat won.
2. It's the mouse's turn. The **cat** (somehow) made it to the **food**. The cat won.
3. It's the cat's turn. The **mouse** (somehow) made it to the **food**. The mouse won.

When it's a players turn, for example the cat, you can imagine that we give a crystal ball to the opposing player, giving them a chance to make the best of the situation that they see.

For example, if it's the cat's turn, we give the crystal ball to the mouse. The mouse sees that the cat will lose in that situation, and so the mouse cleverly marks all locations that would lead to that situation as a victory. This in turn would prompt the cat to avoid those locations, and so on.

Similarly, if the mouse sees in the crystal ball that they will lose, it learns to avoid any move that leads to that situation.

When all possible moves would lead to a loss, then a location is inevitably also a loss for a player. To keep track of this, we can count the number of options for each state.

This took a while for me to get working. Lots of indexing problems and typos. If you have issues, please let me know!

# Code

```go
func canMouseWin(grid []string, catJump int, mouseJump int) bool {
	dirs := [][2]int{{1, 0}, {0, -1}, {-1, 0}, {0, 1}}

	const (
		mouse        = 0
		cat          = 1
		uncertain    = 1 << 0
		mouseWillWin = 1 << 1
		catWillWin   = 1 << 2
	)

	m := len(grid)
	n := len(grid[0])

	idx := func(i, j int) int {
		return i*n + j
	}
	pos := func(ij int) (int, int) {
		return ij / n, ij % n
	}

	// res[m][c][mouse] = mouse at mi, cat at ci, mouse's turn, value = outcome
	res := make([][][2]int, m*n)

	// Mark all locations as uncertain
	for mi := range res {
		res[mi] = make([][2]int, m*n)
		for ci := range res[mi] {
			res[mi][ci][mouse] = uncertain
			res[mi][ci][cat] = uncertain
		}
	}

	// Find mouse/cat/foodPos
	var mi0, ci0, foodPos int
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] == 'M' {
				mi0 = idx(i, j)
			}
			if grid[i][j] == 'C' {
				ci0 = idx(i, j)
			}
			if grid[i][j] == 'F' {
				foodPos = idx(i, j)
			}
		}
	}

	// Helper function for finding reachable locations
	ok := func(i, j int) bool {
		return i >= 0 && j >= 0 && i < m && j < n
	}
	jumpDist := [2]int{}
	jumpDist[mouse] = mouseJump
	jumpDist[cat] = catJump
	reachable := func(ij, turn int) []int {
		i, j := pos(ij)
		var nextPos []int
		dist := jumpDist[turn]
		for _, d := range dirs {
			ii := i
			jj := j
			for k := 1; k <= dist; k++ {
				ii += d[0]
				jj += d[1]
				if !ok(ii, jj) || grid[ii][jj] == '#' {
					break
				}
				nextPos = append(nextPos, idx(ii, jj))
			}
		}
		if turn == cat {
			nextPos = append(nextPos, ij)
		}
		return nextPos
	}

	// Calculate movement options.
	// options[mi][ci][who] = number of available options for 'who' that do not
	// lead to terminal states (wall, catWin or mouseWin).
	options := make([][][2]int, m*n)
	for mi := range options {
		options[mi] = make([][2]int, m*n)
		for ci := range options[mi] {
			options[mi][ci][mouse] = len(reachable(mi, mouse))
			options[mi][ci][cat] = len(reachable(ci, cat))
		}
	}

	// Curr/next holds terminal states, i.e. a game state for which the outcome
	// is known. The idiom of using curr/next and swapping is a memory
	// optimization technique.
	q := [][3]int{}
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] == '#' {
				continue
			}

			ij := idx(i, j)

			// Whenever the cat is on top of the mouse, the game has reached the
			// end.
			q = append(q, [3]int{ij, ij, cat})
			res[ij][ij][mouse] = catWillWin

			if ij == foodPos {
				// Ignore when cat + mouse + food is in the same location
				continue
			}

			// When mouse is on top of food and it's the cat's turn, the game is
			// over, and vice versa
			q = append(q, [3]int{foodPos, ij, cat})
			res[foodPos][ij][cat] = mouseWillWin
			q = append(q, [3]int{foodPos, ij, mouse})
			res[ij][foodPos][mouse] = catWillWin
		}
	}

	for len(q) > 0 {
		x := q[0]
		q = q[1:]
		mi := x[0]
		ci := x[1]
		whoseTurn := x[2]

		// If there's a time when it's the cat's turn and the mouse has won,
		// then any prior position when it's the mouse's turn is now a winning
		// position, and vice versa.
		//
		// If there's a time when it's the cat's turn and the cat has won, then
		// any prior position when it's the mouse's turn should avoid this
		// route. If there are no more options available for the mouse for that
		// prior position, then the mouse will lose no matter what, which means
		// that prior position is a losing state.
		//
		result := res[mi][ci][whoseTurn]

		if whoseTurn == cat {
			for _, x := range reachable(mi, mouse) {
				if res[x][ci][mouse] != uncertain {
					// Outcome already known. This can only happen if the mouse
					// has already found an option that leads to a win.
					continue
				}

				// Outcome is not recorded yet
				if result == mouseWillWin {
					// This move led to an undisputable win for the mouse, so
					// the mouse should take it.
					res[x][ci][mouse] = mouseWillWin
					q = append(q, [3]int{x, ci, mouse})
				}
				if result == catWillWin {
					// This move led to a cat win. The mouse should be
					// discouraged to make this move, but there may still be
					// options left.
					options[x][ci][mouse]--
					if options[x][ci][mouse] == 0 {
						// Out of options.. :(
						res[x][ci][mouse] = catWillWin
						q = append(q, [3]int{x, ci, mouse})
					}
				}
			}
		}

		if whoseTurn == mouse {
			for _, y := range reachable(ci, cat) {
				if res[mi][y][cat] != uncertain {
					// Outcome already known. This can only happen if the cat
					// has already found an option that leads to a win.
					continue
				}

				// Outcome is not recorded yet
				if result == catWillWin {
					// This move led to an undisputable win for the cat, so
					// the cat should take it.
					res[mi][y][cat] = catWillWin
					q = append(q, [3]int{mi, y, cat})
				}
				if result == mouseWillWin {
					// This move led to a mouse win. The cat should be
					// discouraged to make this move, but there may still be
					// options left.
					options[mi][y][cat]--
					if options[mi][y][cat] == 0 {
						// Out of options.. :(
						res[mi][y][cat] = mouseWillWin
						q = append(q, [3]int{mi, y, cat})
					}
				}
			}
		}
	}

	return res[mi0][ci0][mouse] == mouseWillWin
}

```