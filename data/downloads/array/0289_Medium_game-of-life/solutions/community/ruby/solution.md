# EASY TO UNDERSTAND CODE || C++ || JAVA || PYTHON || JAVASCRIPT || RUBY

**Author:** Gourav__5442
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-of-life/solutions/6002509/](https://leetcode.com/problems/game-of-life/solutions/6002509/)

---

# Intuition
The Game of Life is a cellular automaton where cells on a grid can either be alive or dead. The state of each cell in the next generation depends on the number of alive neighbors it has. My initial thought is to iterate over each cell, count its alive neighbors, and determine its next state based on the defined rules.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Count Neighbors**: Create a helper function that counts the number of alive neighbors for a given cell. This will check all 8 possible directions (up, down, left, right, and the four diagonals).

2. **Determine Next State**: In the main function, iterate over the board and apply the rules of the Game of Life:

     - For each live cell (1), check its neighbors. If it has fewer than 2 or more than 3 alive neighbors, it will die. If it has 2 or 3 alive neighbors, it stays alive.

    - For each dead cell (0), check if it has exactly 3 alive neighbors. If so, it becomes alive; otherwise, it remains dead.

3. **Update Board**: After calculating the next states of all cells, update the original board to reflect the new generation.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m\xD7n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m\xD7n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code


```cpp []
#include <vector>
using namespace std;

class Solution {
public:
    int countAlive(int i, int j, vector<vector<int>>& board, int m, int n, vector<int>& delRow, vector<int>& delCol) {
        int count = 0;
        for (int k = 0; k < 8; k++) {
            int newRow = i + delRow[k];
            int newCol = j + delCol[k];

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] == 1) {
                count++;
            }
        }
        return count;
    }

    void gameOfLife(vector<vector<int>>& board) {
        int m = board.size();
        int n = board[0].size();
        vector<vector<int>> temp(m, vector<int>(n, 0));
        vector<int> delRow = {-1, 0, 1, 0, -1, 1, 1, -1};
        vector<int> delCol = {0, 1, 0, -1, 1, 1, -1, -1};

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int aliveCount = countAlive(i, j, board, m, n, delRow, delCol);
                if (board[i][j] == 0) {
                    if (aliveCount == 3) {
                        temp[i][j] = 1;
                    }
                } else {
                    if (aliveCount < 2 || aliveCount > 3) {
                        temp[i][j] = 0;
                    } else {
                        temp[i][j] = 1;
                    }
                }
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = temp[i][j];
            }
        }
    }
};

```

```java []
class Solution {
    public int countAlive(int i, int j, int board[][], int m, int n, int delRow[], int delCol[]){
        int count = 0;
        for(int k = 0 ; k < 8 ; k ++){
            int newRow = i + delRow[k];
            int newCol = j + delCol[k];

            if(newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] == 1){
                count ++;
            }
        }
        return count;
    }
    public void gameOfLife(int[][] board) {
        int m = board.length;
        int n = board[0].length;
        int temp[][] = new int [m][n];
        int delRow[] = {-1 , 0 , 1 , 0 , -1 , 1 , 1 , -1};
        int delCol[] = {0 , 1 , 0 , -1 , 1 , 1 , -1 , -1};

        for(int i = 0 ; i < m ; i ++){
            for(int j = 0 ; j < n ; j ++){
                int aliveCount = countAlive(i , j , board , m , n , delRow , delCol);
                if(board[i][j] == 0){
                    if(aliveCount == 3){
                        temp[i][j] = 1;
                    }
                }else{
                    if(aliveCount < 2){
                        temp[i][j] = 0;
                    }
                    else if(aliveCount == 2 || aliveCount == 3){
                        temp[i][j] = 1;
                    }else if(aliveCount > 3){
                        temp[i][j] = 0;
                    }
                }
            }
        }

        for(int i = 0 ; i < m ; i ++){
            for(int j = 0 ; j < n ; j ++){
                board[i][j] = temp[i][j];
            }
        }
    }
}
```

```python []
class Solution:
    def countAlive(self, i, j, board, m, n, delRow, delCol):
        count = 0
        for k in range(8):
            newRow = i + delRow[k]
            newCol = j + delCol[k]

            if 0 <= newRow < m and 0 <= newCol < n and board[newRow][newCol] == 1:
                count += 1
        return count

    def gameOfLife(self, board):
        m = len(board)
        n = len(board[0])
        temp = [[0] * n for _ in range(m)]
        delRow = [-1, 0, 1, 0, -1, 1, 1, -1]
        delCol = [0, 1, 0, -1, 1, 1, -1, -1]

        for i in range(m):
            for j in range(n):
                aliveCount = self.countAlive(i, j, board, m, n, delRow, delCol)
                if board[i][j] == 0:
                    if aliveCount == 3:
                        temp[i][j] = 1
                else:
                    if aliveCount < 2 or aliveCount > 3:
                        temp[i][j] = 0
                    else:
                        temp[i][j] = 1

        for i in range(m):
            for j in range(n):
                board[i][j] = temp[i][j]

```

```javascript []
class Solution {
    countAlive(i, j, board, m, n, delRow, delCol) {
        let count = 0;
        for (let k = 0; k < 8; k++) {
            let newRow = i + delRow[k];
            let newCol = j + delCol[k];

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] === 1) {
                count++;
            }
        }
        return count;
    }

    gameOfLife(board) {
        const m = board.length;
        const n = board[0].length;
        const temp = Array.from({ length: m }, () => Array(n).fill(0));
        const delRow = [-1, 0, 1, 0, -1, 1, 1, -1];
        const delCol = [0, 1, 0, -1, 1, 1, -1, -1];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const aliveCount = this.countAlive(i, j, board, m, n, delRow, delCol);
                if (board[i][j] === 0) {
                    if (aliveCount === 3) {
                        temp[i][j] = 1;
                    }
                } else {
                    if (aliveCount < 2 || aliveCount > 3) {
                        temp[i][j] = 0;
                    } else {
                        temp[i][j] = 1;
                    }
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                board[i][j] = temp[i][j];
            }
        }
    }
}

```
``` ruby []
class Solution
    def count_alive(i, j, board, m, n, del_row, del_col)
        count = 0
        (0..7).each do |k|
            new_row = i + del_row[k]
            new_col = j + del_col[k]
            if new_row >= 0 && new_row < m && new_col >= 0 && new_col < n && board[new_row][new_col] == 1
                count += 1
            end
        end
        count
    end

    def game_of_life(board)
        m = board.length
        n = board[0].length
        temp = Array.new(m) { Array.new(n, 0) }
        del_row = [-1, 0, 1, 0, -1, 1, 1, -1]
        del_col = [0, 1, 0, -1, 1, 1, -1, -1]

        (0...m).each do |i|
            (0...n).each do |j|
                alive_count = count_alive(i, j, board, m, n, del_row, del_col)
                if board[i][j] == 0
                    temp[i][j] = 1 if alive_count == 3
                else
                    if alive_count < 2 || alive_count > 3
                        temp[i][j] = 0
                    else
                        temp[i][j] = 1
                    end
                end
            end
        end

        (0...m).each do |i|
            (0...n).each do |j|
                board[i][j] = temp[i][j]

```

