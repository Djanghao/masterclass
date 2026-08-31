# Simple Approach || BitMask DP || Pre-Computation || BFS

**Author:** Rookie0934
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5753743/](https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/5753743/)

---

# Approach
# 1. Precompute Distances Using BFS:
Use global static variable to ensure the flag is initialised once.

Use BFS to precompute and calculate the shortest distance from any point on the chessboard to all other points.
This gives us the distance matrix dist where dist[x1][y1][x2][y2] represents the shortest path from (x1, y1) to (x2, y2).

# 2. Recursive DP Function:

Define a recursive function f(curr, mask, turn) where curr is the index of the current pawn being considered, mask represents the set of captured pawns, and turn indicates whose turn it is (Alice or Bob).

If it\u2019s Alice\u2019s turn, maximize the score considering all possible moves.
If it\u2019s Bob\u2019s turn, minimize the score considering all possible moves.


# Code
```cpp []
#include <vector>
#include <queue>
#include <climits>
#include <cstring>
using namespace std;

int dist[50][50][50][50]; // 4D array to store distances between all pairs of points on the board
int dx[8] = {1, 2, 2, 1, -1, -2, -2, -1}; // Possible moves in x-direction for a knight
int dy[8] = {2, 1, -1, -2, -2, -1, 1, 2}; // Possible moves in y-direction for a knight

// Function to compute shortest distances from (startx, starty) to all other points
void dis(int startx, int starty) {
    queue<pair<pair<int, int>, int>> q; // Queue to perform BFS: (current position, distance)
    q.push({{startx, starty}, 0});
    dist[startx][starty][startx][starty] = 0; // Distance from a point to itself is zero

    while(!q.empty()) {
        int x = q.front().first.first; // Current x-coordinate
        int y = q.front().first.second; // Current y-coordinate
        int d = q.front().second; // Distance from start point
        q.pop();

        for(int i = 0; i < 8; i++) {
            int newx = x + dx[i]; // New x-coordinate after move
            int newy = y + dy[i]; // New y-coordinate after move
            // Check if new position is within bounds and has not been visited yet
            if(newx >= 0 && newx < 50 && newy >= 0 && newy < 50 && dist[startx][starty][newx][newy] == -1) {
                dist[startx][starty][newx][newy] = 1 + d; // Update distance
                q.push({{newx, newy}, d + 1}); // Add new position to queue
            }
        }
    }
}

// Function to preprocess distances for all pairs of points
void pre() {
    static bool flag = false; // use of static bool to initialise the flag once
    if(flag) return; // Skip if already preprocessed
    memset(dist, -1, sizeof(dist)); // Initialize distances to -1
    for (int i = 0; i < 50; i++) {
        for (int j = 0; j < 50; j++) {
            // Compute distances from (i, j) if not already computed
            if(dist[i][j][i][j] == -1) dis(i, j);
        }
    }
    flag = 1; // Mark preprocessing as done
}

class Solution {
public:
    vector<vector<int>> memo; // Memoization table for storing intermediate results

    // Recursive function to compute maximum/minimum score
    int f(int curr, int mask, int turn, vector<vector<int>>& positions) {
        int n = positions.size();
        if(mask == (1 << n) - 1) return 0; // All positions visited, base case

        // Check if result is already computed
        if(memo[curr][mask] != -1) return memo[curr][mask];

        int ans;
        int x = positions[curr][0]; // Current x-coordinate
        int y = positions[curr][1]; // Current y-coordinate

        if(!turn) { // Alice
            ans = INT_MIN; // Initialize to minimum value
            for(int i = 0; i < n; i++) {
                if(mask & (1 << i)) continue; // Skip if position already visited
                int nextx = positions[i][0]; // Next x-coordinate
                int nexty = positions[i][1]; // Next y-coordinate
                int newDist = dist[x][y][nextx][nexty]; // Distance to next position
                // Compute maximum score by taking the maximum of all possible moves
                ans = max(ans, newDist + f(i, mask | (1 << i), !turn, positions));
            }
        } else { // Bob
            ans = INT_MAX; // Initialize to maximum value
            for(int i = 0; i < n; i++) {
                if(mask & (1 << i)) continue; // Skip if position already visited
                int nextx = positions[i][0]; // Next x-coordinate
                int nexty = positions[i][1]; // Next y-coordinate
                int newDist = dist[x][y][nextx][nexty]; // Distance to next position
                // Compute minimum score by taking the minimum of all possible moves
                ans = min(ans, newDist + f(i, mask | (1 << i), !turn, positions));
            }
        }

        return memo[curr][mask] = ans;
    }


    int maxMoves(int kx, int ky, vector<vector<int>>& positions) {
        positions.push_back({kx, ky}); // Add knight's starting position to the list
        int n = positions.size(); // Total number of positions
        pre(); // Preprocess distances
        memo.resize(n, vector<int>(1 << n, -1)); // Initialize memoization table
        return f(n-1, (1<<(n-1)), 0, positions); // Start recursion with knight's position
    }
};


```