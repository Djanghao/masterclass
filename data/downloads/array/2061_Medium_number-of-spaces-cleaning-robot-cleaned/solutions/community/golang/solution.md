# the biggest question to ask yourself is when to stop moving

**Author:** arnab_thakuria
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5206592/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5206592/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
the answer is when a cell has been visited 4 times or there is no where to go , then you should stop. 

# Approach
<!-- Describe your approach to solving the problem. -->
just implementation

# Complexity
- Time complexity:
- only god knows 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```

func numberOfCleanRooms(room [][]int) int {
	directions := [][]int{
		[]int{0, 1},
		[]int{1, 0},
		[]int{0, -1},
		[]int{-1, 0},
	}
	visited := map[string]int{}
	dirIdx := 0
	curr_x, curr_y := 0, 0
	compute_next := func() (int, int) {
        //fmt.Println("current direction ", directions[dirIdx])
		return curr_x + directions[dirIdx][0], curr_y + directions[dirIdx][1]
	}

	valid := func(x, y int) bool {
		if x < 0 || y < 0 || x >= len(room) || y >= len(room[0]) || room[x][y] == 1 {
			return false
		}
		return true
	}
    //fmt.Println("curr", curr_x, curr_y)

	for {
		hash := fmt.Sprintf("%d-%d", curr_x, curr_y)
		if visited[hash] >= 4 {
			break
		}
        visited[hash]++
		count := 0
		next_x, next_y := compute_next()
		for !valid(next_x, next_y) && count != 4 {
			dirIdx = (dirIdx + 1) % 4
			next_x, next_y = compute_next()
			count++
		}
		if count >= 4 {
			break
		}
		curr_x, curr_y = next_x, next_y
        //fmt.Println("curr", curr_x, curr_y)
	}
	return len(visited)
}


```