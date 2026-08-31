# Can solve any grid size - O(n * m)

**Author:** OrCohen190
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5181140/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5181140/)

---

# Complexity
O(n * m)

# Code
```
enum COLORS {
    'B' = 'B',
    'W' = 'W'
}

function checkSquare(positions: string[]) {
    const sums = positions.reduce((sums, color) => {
        sums[color]++;
        return sums;
    }, { [COLORS.B]: 0, [COLORS.W]: 0 });
    return sums[COLORS.B] >= 3 || sums[COLORS.W] >= 3
}

function canMakeSquare(grid: string[][]): boolean {
    return grid.some((row, rowIndex) => {
        if (grid.length - 1 === rowIndex) return false;
        return row.some((char: string, charIndex) => {
            if (grid.length - 1 === charIndex) return false;
            return checkSquare([
                grid[rowIndex][charIndex],
                grid[rowIndex][charIndex + 1],
                grid[rowIndex + 1][charIndex],
                grid[rowIndex + 1][charIndex + 1]
            ]);
        });
    });
};
```