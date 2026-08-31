# 🚀🚀🚀🚀🚀🚀🚀

**Author:** m_a_r_c
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-of-life/solutions/4017711/](https://leetcode.com/problems/game-of-life/solutions/4017711/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    for (let i in board) {
        const row = board[i];
        for (let j in row) {
            const cell = row[j];
            const neighbours = getActiveNeighbourCount(board, +i, +j);

            if (cell === 1) {
                if (neighbours < 2) {
                    board[i][j] = 3;
                } else if (neighbours > 3) {
                    board[i][j] = 3; // 3 = 0 die vorher eine 1 war
                }
            } else if (neighbours === 3) {
                board[i][j] = 2; // 2 = 1 die vorher eine 0 war
            }
        }
    }
    for (let row of board) {
        for (let col in row) {
            if (row[col] > 1) {
                row[col] = 3 - row[col];
            }
        }
    }
};

function getActiveNeighbourCount(board: number[][], row: number, col: number): number {
    const neighbours = [
        board[row - 1]?.[col - 1],
        board[row - 1]?.[col],
        board[row - 1]?.[col + 1],
        board[row]?.[col - 1],
        board[row]?.[col + 1],
        board[row + 1]?.[col - 1],
        board[row + 1]?.[col],
        board[row + 1]?.[col + 1],
    ];

    const activeNeighbours = neighbours.filter(n => n % 2 === 1).length;
    return activeNeighbours;
}
```