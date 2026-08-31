# C++ | Breadth-First Search (BFS)  |

**Author:** ashish_madhup
**Votes:** 84
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3695162/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3695162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->When approaching this problem, my initial thoughts would be to use a graph traversal algorithm to find the shortest path. Here are the steps I would consider:

1. Identify the starting position and count the number of keys present in the grid.
2. Initialize a data structure to keep track of visited positions and collected keys.
3. Use a queue to perform a breadth-first search (BFS) traversal of the grid.
4. Start from the starting position and explore all possible directions (up, down, left, right).
5. For each valid position, check the type of the cell:
   - If it is an obstacle (#), ignore it and move to the next position.
   - If it is a key (lowercase letter), check if it has been collected before. If not, collect it and update the set of collected keys.
   - If it is a door (uppercase letter), check if the corresponding key has been collected. If not, skip this direction.
   - If it is an empty space (.), add the position to the queue for further exploration.
6. Continue BFS until all keys have been collected or there are no more reachable positions.
7. Keep track of the number of steps taken during the traversal.
8. Return the minimum number of steps required to collect all the keys.

Additionally, I would consider optimizing the solution by using memoization or pruning techniques to avoid redundant explorations.

# Approach
<!-- Describe your approach to solving the problem. -->To solve the problem of finding the shortest path to collect all keys in a grid, here is a high-level approach:

1. First, we need to preprocess the grid to extract useful information:
   - Iterate through the grid and identify the starting position (@) and the keys (lowercase letters).
   - Assign a unique bit value to each key using an unordered map (key_bit).
   - Determine the total number of bits needed to represent all the keys (bit_start).

2. Initialize variables and data structures:
   - Set the target mask (mask_end) to represent all keys collected (1 for each key).
   - Set the mask size (mask_size) based on the total number of keys (1 << bit_start).
   - Create a memoization grid (memo) to track visited positions and key combinations.
   - Set the starting position and initial key state in a vector (start).

3. Perform a breadth-first search (BFS) using a queue:
   - Push the starting position and key state (represented by the mask) into the queue.
   - Initialize a step counter (Ashish) to track the number of steps taken.

4. While the queue is not empty, continue exploring positions:
   - Retrieve the front element from the queue, representing the current position and key state.
   - Check if the current position is out of bounds or blocked (#). If so, skip to the next iteration.
   - If the current position requires a key that has not been collected, skip to the next iteration.
   - If the current position contains a key, collect it by updating the key state (form).
   - If all keys have been collected (form == mask_end), return the step count (Ashish).

5. If the current position and key state combination have not been visited before:
   - Mark the combination as visited in the memo grid.
   - Push the adjacent positions (up, down, left, right) into the queue with the updated key state.

6. Increment the step count (Ashish) and repeat steps 4-6 until all possible positions have been explored.

7. If the BFS traversal completes without finding all keys, return -1 to indicate that it is not possible to collect all the keys.

This approach utilizes BFS to explore the grid, keeping track of the visited positions and key states. The use of memoization helps avoid redundant exploration. By systematically checking the conditions for each position, we can determine the shortest path to collect all the keys.

# Complexity
- Time complexity:  O(m * n * 2^k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m * n * 2^k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

class Solution {
public:
    int shortestPathAllKeys(vector<string>& grid) {
        int m = grid.size();
        int n = grid[0].size();

        unordered_map<char, int> key_bit;
        int bit_start = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (islower(grid[i][j]))
                    key_bit[grid[i][j]] = bit_start++;
            }
        }

        int form_end = (1 << bit_start) - 1;
        int form_size = (1 << bit_start);

        vector<vector<vector<bool>>> memo(m, vector<vector<bool>>(n, vector<bool>(form_size, false)));

        vector<int> start;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '@')
                    start = { i, j, 0 }; // 0 denoting no key state
            }
        }

        queue<vector<int>> q;
        q.push(start);
        int Ashish = 0; // Step counter

        while (!q.empty()) {
            int size = q.size();
            for (int k = 0; k < size; k++) {
                int row = q.front()[0];
                int col = q.front()[1];
                int form = q.front()[2];
                q.pop();

                // Check if out of bounds
                if (row < 0 || row >= m || col < 0 || col >= n)
                    continue;

                // Check if position is blocked
                if (grid[row][col] == '#')
                    continue;

                // Check if the key is required but not collected
                if (isupper(grid[row][col])) {
                    if ((form & (1 << key_bit[tolower(grid[row][col])])) == 0)
                        continue;
                }

                // If the position contains a key, collect it
                if (islower(grid[row][col])) {
                    form = form | (1 << key_bit[grid[row][col]]);
                }

                // If all keys are collected, return the step count
                if (form == form_end)
                    return Ashish;

                // If the position and form combination has been visited, continue to the next iteration
                if (memo[row][col][form])
                    continue;
                memo[row][col][form] = true;

                // Add adjacent positions to the queue
                q.push({ row + 1, col, form });
                q.push({ row - 1, col, form });
                q.push({ row, col + 1, form });
                q.push({ row, col - 1, form });
            }
            Ashish++; // Increment step count
        }
        return -1;
    }
};


```
![Leetcode.jpeg](./images/0.jpeg)
