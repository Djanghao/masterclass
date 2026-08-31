# Go | 88% faster | easy BFS in place

**Author:** kiruxan
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/2228203/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/2228203/)

---

Using bfs to find something in a maze also known as Lee Algorithm, you can find many links in google, for ex: 
wki: https://en.wikipedia.org/wiki/Lee_algorithm or https://www.freecodecamp.org/news/lees-algorithm-explained-with-examples/

```

func getFood(grid [][]byte) int {

	// our "queue" with new points
	q := [][]int{}

	// find start and use it as first point
outer:
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] == '*' {
				q = append(q, []int{i, j})
				break outer
			}
		}
	}

	// vectors with all possible movements
	vecs := [][]int{
		{1, 0},
		{-1, 0},
		{0, 1},
		{0, -1},
	}

	// current step, return step when Pizza is found
	step := 1

	for len(q) > 0 {
		// next bfs level
		newLevel := [][]int{}
		for i := 0; i < len(q); i++ {
			for _, v := range vecs {
				
				// check that we are in grid bounds
				if q[i][0]+v[0] >= 0 && q[i][0]+v[0] < len(grid) && q[i][1]+v[1] >= 0 && q[i][1]+v[1] < len(grid[0]) {
					
					if grid[q[i][0]+v[0]][q[i][1]+v[1]] == '#' {
						// if Pizza found - return step
						return step
					} else if grid[q[i][0]+v[0]][q[i][1]+v[1]] == 'O' {
						// mark cell as visited, add it to queue
						grid[q[i][0]+v[0]][q[i][1]+v[1]] = 'X'
						newLevel = append(newLevel, []int{q[i][0] + v[0], q[i][1] + v[1]})
					}
				}
			}
		}
		// up step and use new bfs level
		step += 1
		q = newLevel
	}

	return -1
}
```