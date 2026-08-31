# ✅ Javascript | Simplest Solution | 🏆Matrix, Simulation🏆 |🔥Beats 100%🔥

**Author:** Satansoft
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/6004978/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/6004978/)

---

![image.png](./images/0.png)

# Intuition
Calculate number of X, O and number of all winning states for each respectively. Then combine that values in conditions to check for valid states.

# Approach
Define: 
`winCombinations` - all possible winning combinations;
`n` - size of the `board`;
`x` - number of X;
`o` - number of O;
`xWinState` - number of X winning states;
`oWinState` - number of O winning states;

In first loop calculate number of X and O.

In second loop calculate number of winning states for X an O respectively;

Check for 5 conditions and return `false` if any of them satisfied:
- number of O bigger than X;
- number of X bigger than O more than 1;
- both X and O have winning states;
- X is winner, but number of X equal O;
- O is winner, but number of O less than X;

Return `true` by default.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```javascript []
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    const winCombinations = [[[0, 0], [0, 1], [0, 2]],
                             [[1, 0], [1, 1], [1, 2]],
                             [[2, 0], [2, 1], [2, 2]],
                             [[0, 0], [1, 0], [2, 0]],
                             [[0, 1], [1, 1], [2, 1]],
                             [[0, 2], [1, 2], [2, 2]],
                             [[0, 0], [1, 1], [2, 2]],
                             [[0, 2], [1, 1], [2, 0]]]

    const n = 3;
    let x = 0;
    let o = 0;
    let xWinState = 0;
    let oWinState = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const value = board[i][j];

            if (value === 'X') x++;
            if (value === 'O') o++;
        }
    }

    for (let i = 0; i < winCombinations.length; i++) {
        const row = winCombinations[i];
        const [x1, y1] = row[0];
        const [x2, y2] = row[1];
        const [x3, y3] = row[2];

        if (board[x1][y1] === 'X' && board[x2][y2] === 'X' && board[x3][y3] === 'X') xWinState++;
        if (board[x1][y1] === 'O' && board[x2][y2] === 'O' && board[x3][y3] === 'O') oWinState++;
    }

    if (o > x || 
        x - o > 1 || 
        xWinState > 0 && oWinState > 0 ||
        xWinState === 1 && x === o ||
        oWinState === 1 && o < x) return false;

    return true;
};
```