# KOTLIN and JAVA solution

**Author:** anlk
**Votes:** 3
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/6045797/](https://leetcode.com/problems/snakes-and-ladders/solutions/6045797/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
The problem can be modeled as finding the shortest path in an unweighted graph:

- Each square on the board is a node.
- A dice roll determines the edges (connections between nodes).
- Snakes and ladders directly redirect you to a specific node.

We can use BFS to solve this, as it ensures the shortest path in an unweighted graph.

# Approach
- Map the board to a 1D array: 
    - Since the board alternates in direction (Boustrophedon style), map it into a single-dimensional array for easier processing.
- Perform BFS:
    - Start at square 1.
    - For each square, simulate dice rolls (up to 6 moves forward) to determine potential next positions.
    - If a square leads to a snake or ladder, jump to the destination.
    - Use a visited array to avoid revisiting nodes.
- Terminate BFS:
    - If the last square is reached, return the number of moves.
    - If BFS completes without reaching the last square, return -1.

# Complexity
- Time complexity: $$O(n.n)$$
 

- Space complexity: $$O(n.n)$$

# Code
```Kotlin []
class Solution {
    fun snakesAndLadders(board: Array<IntArray>): Int {
        val n = board.size

        // flatten the board into a 1D array
        val flatBoard = IntArray(n * n + 1)
        var idx = 1
        var leftToRight = true

        for (i in n - 1 downTo 0) {
            if (leftToRight) {
                for (j in 0 until n) {
                    flatBoard[idx++] = board[i][j]
                }
            } else {
                for (j in n - 1 downTo 0) {
                    flatBoard[idx++] = board[i][j]
                }
            }
            leftToRight = !leftToRight
        }

        // bfs to find the shortest path
        val queue: Queue<Int> = LinkedList()
        val visited = BooleanArray(n * n + 1)
        queue.add(1)
        visited[1] = true
        var moves = 0
        while (queue.isNotEmpty()) {
            repeat(queue.size) {
                val curr = queue.poll()
                if (curr == n * n) return moves

                for (dice in 1..6) {
                    var next = curr + dice
                    if (next > n * n) break

                    if (flatBoard[next] != -1) {
                        next = flatBoard[next]
                    }

                    if (!visited[next]) {
                        visited[next] = true
                        queue.add(next)
                    }
                }
            }
            moves++
        }
        return -1 
    }
}
```

```Java []
class Solution {
    public int snakesAndLadders(int[][] board) {
        int n = board.length;

        // flatten the board into a 1D array
        int[] flatBoard = new int[n * n + 1];
        boolean leftToRight = true;
        int idx = 1;
        for (int i = n - 1; i >= 0; i--) {
            if (leftToRight) {
                for (int j = 0; j < n; j++) {
                    flatBoard[idx++] = board[i][j];
                }
            } else {
                for (int j = n - 1; j >= 0; j--) {
                    flatBoard[idx++] = board[i][j];
                }
            }
            leftToRight = !leftToRight;
        }

        // BFS to find the shortest path
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[n * n + 1];
        queue.add(1);
        visited[1] = true;
        int moves = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                if (curr == n * n) {
                    return moves;
                }

                for (int dice = 1; dice <= 6; dice++) {
                    int next = curr + dice;
                    if (next > n * n) break;

                    if (flatBoard[next] != -1) {
                        next = flatBoard[next];
                    }

                    if (!visited[next]) {
                        visited[next] = true;
                        queue.add(next);
                    }
                }
            }
            moves++;
        }
        return -1;
    }
}
```