# JavaScript | Brute-force

**Author:** costa73
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/4872450/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/4872450/)

---

# Approach
```
function findPattern(board, pattern) {
    for (let i = 0; i <= board.length - pattern.length; i++) {
        for (let j = 0; j <= board[0].length - pattern[0].length; j++) {
            if (match(board, pattern, i, j)) return [i, j];
        }
    }

    return [-1, -1];
};

function match(board, pattern, x, y) {
    const map = new Map();

    for (let i = 0; i in pattern; i++) {
        for (let j = 0; j < pattern[0].length; j++) {
            const bValue = board[i + x][j + y];
            const pValue = pattern[i][j];

            if (isNaN(+pValue)) {
                // check if board value has been assigned to another pattern value
                if (map.has(bValue) && map.get(bValue) !== pValue) return false;
                // check if pattern value has been assigned another board value
                if (map.has(pValue) && map.get(pValue) !== bValue) return false;

                map.set(bValue, pValue);
                map.set(pValue, bValue);
            } else {
                // if pattern value is a number -> board value should match exactly
                if (bValue != +pValue) return false;
            }
        }
    }

    return true;
}

```

# Complexity
- Time complexity: $$O(n*m)$$
- Space complexity: $$O(n*m)$$
