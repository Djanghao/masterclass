# C++ || Simple BFS (With Full Explanation)🌚 || Beats 100% 🏁🔥

**Author:** ufoblivr
**Votes:** 728
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3092265/](https://leetcode.com/problems/snakes-and-ladders/solutions/3092265/)

---

# Intuition
The intuition behind this code is that it uses a breadth-first search (BFS) algorithm to find the minimum number of moves required to reach the last cell of the board from the first cell. BFS is an algorithm that explores all the vertices of a graph or all the nodes of a tree level by level.

# Approach
The method starts by creating a vector of pairs called **"cells"** that stores the row and column of each cell in the board. It also creates a vector of integers called **"dist"** that stores the minimum number of moves required to reach each cell and initializes it to -1.

It then uses a queue to keep track of the cells to be visited and starts by pushing the first cell (cell 1) into the queue. The method then enters a while loop that continues until the queue is empty. In each iteration of the loop, it takes the front element of the queue, which is the current cell, and pops it from the queue.

For the current cell, the method loops through all the possible next cells which are from curr+1 to min(curr+6,n*n) (because in each move we can move to a dice roll max 6 steps) and checks if the minimum number of moves required to reach that cell has not been assigned yet. If it has not been assigned yet, the method assigns the minimum number of moves required to reach that cell as the minimum number of moves required to reach the current cell plus one. It also pushes the next cell into the queue to be visited in the next iteration.

The method then continues this process until all the cells have been visited, and the minimum number of moves required to reach each cell has been assigned. Finally, the method returns the minimum number of moves required to reach the last cell, which is stored in dist[n*n].

It also handles the case if there is a snake or ladder at the cell, it directly assigns the destination cell number as the cell number.

# Complexity
- **Time complexity:**
The time complexity of this code is **O(n^2)**, where n is the size of the board. This is because the method uses a breadth-first search algorithm to traverse through each cell of the board and assigns the distance of each cell from the starting cell. The outer loop iterates n times, and the inner loop iterates n times, so the total number of iterations is n*n.
Note that this is assuming the queue and vector operations have a constant time complexity, which is typical but not guaranteed.

- **Space complexity:**
The space complexity of this code is also **O(n^2)**. This is because the method uses a vector of integers called "dist" to keep track of the minimum number of moves required to reach each cell, and this vector has nn elements. The method also uses a vector of pairs called "cells" to keep track of the row and column of each cell, and this vector also has nn elements. The method also uses a queue to keep track of the cells to be visited, which can have at most n*n elements.


# Code
```
class Solution {
public:
    int snakesAndLadders(vector<vector<int>> &board) {
        int n = board.size(), lbl = 1;
        vector<pair<int, int>> cells(n*n+1);
        vector<int> columns(n);
        iota(columns.begin(), columns.end(), 0);
        for (int row = n - 1; row >= 0; row--) {
            for (int column : columns) {
                cells[lbl++] = {row, column};
            }
            reverse(columns.begin(), columns.end());
        }
        vector<int> dist(n*n+1, -1);
        dist[1] = 0;
        queue<int> q;
        q.push(1);
        while (!q.empty()) {
            int curr = q.front();
            q.pop();
            for (int next = curr + 1; next <= min(curr+6, n*n); next++) {
                auto [row, column] = cells[next];
                int destination = board[row][column] != -1 ? board[row][column] : next;
                if (dist[destination] == -1) {
                    dist[destination] = dist[curr] + 1;
                    q.push(destination);
                }
            }
        }
        return dist[n*n];
    }
};
```

![2wlbi6.webp](./images/0.webp)

