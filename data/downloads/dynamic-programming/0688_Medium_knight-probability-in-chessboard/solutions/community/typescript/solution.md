# 122ms 😎 || SHORT😎 || TYPESCRIPT😎 || CLICK 😎

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3801005/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3801005/)

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
const genMoves = ([x, y]: number[], n: number, step: number, mem: number[][][]) => {
    let moves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y - 2],
    ].filter(([xn, yn]) => {
        if (xn >= 0 && xn < n && yn >= 0 && yn < n) {
            mem[step][xn][yn] += mem[step - 1][x][y];
            return true;
        }
        return false;
    });
    return moves;
};

const bfs = (n: number, k: number, mem: number[][][]) => {
    let step = 0;
    while (step < k) {
        step++;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mem[step - 1][i][j]) {
                    genMoves([i, j], n, step, mem);
                }
            }
        }
    }
};

function knightProbability(n: number, k: number, row: number, column: number): number {
    if (k === 0) return 1;
    let totalMoves = 8 ** k;
    let validMoves = 0;
    let mem = new Array(k + 1).fill(0).map((_) => new Array(n).fill(0).map((_) => new Array(n).fill(0)));
    mem[0][row][column] = 1;
    bfs(n, k, mem);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            validMoves += mem[k][i][j] || 0;
        }
    }
    return validMoves / totalMoves;
}
```