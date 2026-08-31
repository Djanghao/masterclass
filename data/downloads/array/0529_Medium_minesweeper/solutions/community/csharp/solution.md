# Easy C# solution using Breadth First Search concept

**Author:** palak29jain05
**Votes:** 2
**Link:** [https://leetcode.com/problems/minesweeper/solutions/3593916/](https://leetcode.com/problems/minesweeper/solutions/3593916/)

---

# Complexity
- Time complexity: O(n * m)

- Space complexity:O(n + m)

# Code
```
public class Solution {
    int[][] positions = new int[][] {
        new int[] {-1, 1},
        new int[] {0, 1},
        new int[] {1, 1},
        new int[] {-1, 0},
        new int[] {1, 0},
        new int[] {-1, -1},
        new int[] {0, -1},
        new int[] {1, -1}
    };

    public char[][] UpdateBoard(char[][] board, int[] click) {
        int m = board.Length; // y-axis - number of rows
        int n = board[0].Length; // x-axis - number of columns

        Queue<int[]> toVisit = new Queue<int[]>();
        toVisit.Enqueue(click);

        while (toVisit.Count != 0) {
            int[] square = toVisit.Dequeue();

            if (board[square[0]][square[1]] == 'M') {
                board[square[0]][square[1]] = 'X';
                return board;
            } else if (board[square[0]][square[1]] == 'E') {
                int adjacentMines = countAdjacentMines(board, square, m, n);
                if (adjacentMines == 0) {
                    board[square[0]][square[1]] = 'B';
                    addNeighbors(toVisit, board, square, m, n);
                } else {
                    board[square[0]][square[1]] = adjacentMines.ToString()[0];
                }             
            }
        }

        return board;
    }

    private void addNeighbors(Queue<int[]> toVisit, char[][] board, int[] click, int m, int n) {
        foreach(int[] position in positions) {
            if ((click[0] + position[0]) < m &&
                (click[0] + position[0]) >= 0 &&
                (click[1] + position[1]) < n && 
                (click[1] + position[1]) >= 0 &&
                 board[click[0] + position[0]][click[1] + position[1]] == 'E')  {
                    toVisit.Enqueue(new int[] {click[0] + position[0], click[1] + position[1]});                 
                }
        }
    }

    private int countAdjacentMines(char[][] board, int[] click, int m, int n) {        
        int adjacentMines = 0;

        foreach(int[] position in positions) {
            if ((click[0] + position[0]) < m &&
                (click[0] + position[0]) >= 0 &&
                (click[1] + position[1]) < n && 
                (click[1] + position[1]) >= 0 &&
                board[click[0] + position[0]][click[1] + position[1]] == 'M') {
                    adjacentMines++;              
                }
        }

        return adjacentMines;
    } 
}
```