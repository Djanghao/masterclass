# Golang Solution using BFS and Binary Search

**Author:** lolopat2
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3702009/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3702009/)

---

# Approach
We use binary search and breadth-first search to solve the problem. We start by initializing the binary search range with `l, r := 0, len(cells)`. Our goal is to find the latest day `day` where a path from the top row to the bottom row exists.

In each step of the binary search, we calculate the midpoint of the search range `day = l + (r-l)/2`, which represents the day we're considering. We then create a `seen` map and mark all cells flooded until `day`.

We initialize a BFS queue and start BFS from every cell in the top row which is not flooded. If it's possible to reach the bottom row from any of these cells, we update the lower bound of the binary search range `l = day + 1`. If it's not possible, we update the upper bound `r = day - 1`.

This process continues until the binary search range is exhausted, at which point we return `r`, the last day it was possible to cross from top to bottom.

# Complexity
- Time complexity:
$$O((row * col) log(row * col))$$

The binary search operation takes logarithmic time proportional to the number of cells. For each possible day considered, a BFS operation is performed, taking time proportional to the size of the grid (`row * col`).

- Space complexity:
$$O(row * col)$$

This is due to the `seen` map which in the worst case could end up storing every cell in the grid.

# Code
```
import "container/list"

type point struct {
	row int
	col int
}

func latestDayToCross(row int, col int, cells [][]int) int {
	l, r, day := 0, len(cells), 0
	for l <= r {
		day = l + (r-l)/2
		if isItPossibleToGetBottomLine(row, col, day, cells) {
			l = day + 1
		} else {
			r = day - 1
		}
	}

	return r
}

func isItPossibleToGetBottomLine(row, col, day int, cells [][]int) bool {
	seen := make(map[point]struct{}, day)
	for i := 0; i < day; i++ {
		seen[point{
			row: cells[i][0] - 1,
			col: cells[i][1] - 1,
		}] = struct{}{}
	}
	directions := []point{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	q := list.New()

	for i := 0; i < col; i++ {
		p := point{
			col: i,
		}
		if _, ok := seen[p]; !ok {
			q.PushBack(&p)
			seen[p] = struct{}{}
			for q.Len() != 0 {
				elem := q.Front()
				curr := elem.Value.(*point)
				if curr.row == row-1 {
					return true
				}
				q.Remove(elem)
				for _, dir := range directions {
					nextRow := curr.row + dir.row
					nextCol := curr.col + dir.col
					if isInBounds(nextRow, nextCol, row, col) {
						p := point{
							row: nextRow,
							col: nextCol,
						}
						if _, ok := seen[p]; !ok {
							q.PushBack(&p)
							seen[p] = struct{}{}
						}
					}
				}
			}
			q.Init()
		}
	}

	return false
}

func isInBounds(row, col, rows, cols int) bool {
	return row >= 0 && row < rows && col >= 0 && col < cols
}
```