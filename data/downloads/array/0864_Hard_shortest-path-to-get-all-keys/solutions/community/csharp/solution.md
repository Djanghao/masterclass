# C# Solution for Shortest Path to get all Keys Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694925/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694925/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to use a breadth-first search (BFS) approach to explore all possible paths from the starting point. The algorithm keeps track of the current state of acquired keys using a bitmask, and it explores neighboring cells in the grid, considering the constraints of walls, locks, and keys.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Find the starting position and count the total number of keys in the grid.
1. Use a queue to perform a BFS traversal of the grid.
1. Each element in the queue represents a state with the current position (x, y) and the acquired keys (state).
1. Iterate until the queue is empty.
1. For each element in the queue, explore all four possible directions (up, down, left, right).
1. Check if the new position is valid (within the grid boundaries) and not a wall.
1. If the new position is a lowercase letter (key), update the state by acquiring the key using a bitmask.
1. If the new position is an uppercase letter (lock), check if the corresponding key has been acquired in the current state. If not, skip the current direction.
1. If the new position has not been visited before with the same state, mark it as visited and enqueue it.
1. Keep track of the number of steps taken during the BFS traversal.
If all keys have been acquired (state equals (1 << totalKeys) - 1), return the number of steps.
1. If no valid path is found after exploring all possible paths, return -1.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(m * n * 2^k), where m and n are the dimensions of the grid, and k is the number of keys. This complexity arises from the traversal of the grid in the BFS process. Each cell can be visited at most once, and there can be up to 2^k different states (acquired key combinations).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is also O(m * n * 2^k) since the visited set and the queue can grow to accommodate all possible states and positions during the BFS traversal.

# Code
```
public class Solution {
    public int ShortestPathAllKeys(string[] grid) {
         int m = grid.Length;
    int n = grid[0].Length;
    int totalKeys = 0;
    int startX = -1;
    int startY = -1;

    // Find the starting position and count the total number of keys
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (grid[i][j] == '@')
            {
                startX = i;
                startY = j;
            }
            else if (char.IsLower(grid[i][j]))
            {
                totalKeys++;
            }
        }
    }

    int[][] directions = new int[][] {
        new int[] { -1, 0 }, // up
        new int[] { 1, 0 },  // down
        new int[] { 0, -1 }, // left
        new int[] { 0, 1 }   // right
    };

    var queue = new Queue<(int, int, int)>();  // (x, y, state)
    var visited = new HashSet<(int, int, int)>();

    queue.Enqueue((startX, startY, 0));
    visited.Add((startX, startY, 0));

    int steps = 0;

    while (queue.Count > 0)
    {
        int size = queue.Count;

        for (int i = 0; i < size; i++)
        {
            var (x, y, state) = queue.Dequeue();

            if (state == (1 << totalKeys) - 1)
            {
                return steps;
            }

            for (int j = 0; j < 4; j++)
            {
                int newX = x + directions[j][0];
                int newY = y + directions[j][1];
                int newState = state;

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] != '#')
                {
                    char c = grid[newX][newY];

                    if (char.IsLower(c))
                    {
                        newState |= (1 << (c - 'a'));
                    }

                    if (char.IsUpper(c) && ((state >> (c - 'A')) & 1) == 0)
                    {
                        continue;
                    }

                    if (!visited.Contains((newX, newY, newState)))
                    {
                        visited.Add((newX, newY, newState));
                        queue.Enqueue((newX, newY, newState));
                    }
                }
            }
        }

        steps++;
    }

    return -1;  // No valid path found
    }
}
```