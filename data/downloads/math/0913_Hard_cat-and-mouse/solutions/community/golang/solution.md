# 🔥🔥🔥Runtime 12 ms  Beats 100.00% of users with Go🔥🔥🔥

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/cat-and-mouse/solutions/4724697/](https://leetcode.com/problems/cat-and-mouse/solutions/4724697/)

---

# Approach

1. **Initialization**:

- Initialize variables and data structures to represent the game state and keep track of visited states.
- Calculate the number of non-zero neighbors for each node in the graph.

2. **Breadth-First Search (BFS)**:

- Use a queue to perform BFS traversal of possible game states.
- Start with initializing the queue with initial game states where the cat and mouse are at different positions.
- While the queue is not empty, dequeue a game state and explore its neighbors.
- For each dequeued state:
    - If it's a winning state for either player (mouse or cat), return the result.
    - Otherwise, update the game state based on the rules of the game and enqueue the next possible states.
    - Use the nextStateCount array to keep track of the remaining possible moves for each position.
    - Use the dp array to store the result of the game for each state.
3. **Updating State**:

- During BFS traversal, update the game state based on the turn:
    - If it's the mouse's turn:
        - If the mouse reaches a state where it can escape to the hole (position 0), it's a winning state for the mouse.
        - Otherwise, update the mouse's position to its neighbors and decrement the remaining possible moves in nextStateCount.
    - If it's the cat's turn:
        - If the cat reaches a state where it can catch the mouse, it's a winning state for the cat.
        - Otherwise, update the cat's position to its neighbors and decrement the remaining possible moves in nextStateCount.

4. **Result**:

- After BFS traversal, if no winning state is found, return the result for the initial state of the game.
5. **Complexity**:

- Time Complexity: O(N^2), where N is the number of nodes in the graph.
- Space Complexity: O(N^2), for storing the dp array and nextStateCount array.

# Code
```
func catMouseGame(graph [][]int) int {
    n := len(graph)

	nonZeroNeighbor := make([]int, n)
	for i := 0; i < n; i++ {
		nonZeroNeighbor[i] = len(graph[i])
		for _, neighbor := range graph[i] {
			if neighbor == 0 {
				nonZeroNeighbor[i]--
				break
			}
		}
	}

	nextStateCount := make([][][]int, n)
	for i := 0; i < n; i++ {
		nextStateCount[i] = make([][]int, n)
		for j := 0; j < n; j++ {
			nextStateCount[i][j] = make([]int, 2)
			nextStateCount[i][j][0] = len(graph[i])
			nextStateCount[i][j][1] = nonZeroNeighbor[j]
		}
	}

	dp := make([][][]int, n)
	for i := 0; i < n; i++ {
		dp[i] = make([][]int, n)
		for j := 0; j < n; j++ {
			dp[i][j] = make([]int, 2)
		}
	}

	queue := make([][]int, 0)
	for catPos := 1; catPos < n; catPos++ {
		for turn := 0; turn <= 1; turn++ {
			dp[0][catPos][turn] = 1
			queue = append(queue, []int{0, catPos, turn, 1})
			dp[catPos][catPos][turn] = 2
			queue = append(queue, []int{catPos, catPos, turn, 2})
		}
	}

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		mousePos, catPos, turn, result := curr[0], curr[1], curr[2], curr[3]
		if turn == 0 {
			if mousePos == 1 && catPos == 2 {
				return result
			}
			for _, prev := range graph[catPos] {
				if prev == 0 || dp[mousePos][prev][1] != 0 {
					continue
				}
				if result == 2 || nextStateCount[mousePos][prev][1] == 1 {
					nextStateCount[mousePos][prev][1]--
					dp[mousePos][prev][1] = result
					queue = append(queue, []int{mousePos, prev, 1, result})
				} else if nextStateCount[mousePos][prev][1] > 1 {
					nextStateCount[mousePos][prev][1]--
				}
			}
		} else {
			for _, prev := range graph[mousePos] {
				if dp[prev][catPos][0] != 0 {
					continue
				}
				if result == 1 || nextStateCount[prev][catPos][0] == 1 {
					nextStateCount[prev][catPos][0]--
					dp[prev][catPos][0] = result
					queue = append(queue, []int{prev, catPos, 0, result})
				} else if nextStateCount[prev][catPos][0] > 1 {
					nextStateCount[prev][catPos][0]--
				}
			}
		}
	}
	return dp[1][2][0]
}
```