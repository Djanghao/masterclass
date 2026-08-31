# JavaScript with calculate intermediate node + backtracking

**Author:** vitmak
**Votes:** 1
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/1628786/](https://leetcode.com/problems/android-unlock-patterns/solutions/1628786/)

---


```
const numberOfPatterns = (minSteps, maxSteps) => {
    const COLS = 3;
    const ROWS = 3;

    // hardcoded all indices for 3x3 grid [col, row]
    // [0, 0], [1, 0], [2, 0],
    // [0, 1], [1, 1], [2, 1],
    // [0, 2], [1, 2], [2, 2],
    const grid = [];

    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            grid.push([col, row]);
        }
    }

    // start !== end
    const getIntermediateNode = (start, end) => {
        const dist = [end[0] - start[0], end[1] - start[1]];
        const remainder = [dist[0] % 2, dist[1] % 2];
        let res = null;

        if (remainder[0] === 0 && remainder[1] === 0) {
            const center = [start[0] + dist[0] / 2, start[1] + dist[1] / 2];
            res = grid[COLS * center[0] + center[1]];
        }

        return res;
    };

    let res = 0;

    const calculate = (steps, visited, availableIndexes, curIndex) => {
        if (steps >= minSteps) {
            ++res;
        }

        if (++steps > maxSteps) {
            return;
        }

        const start = grid[curIndex];

        for (const index of availableIndexes) {
            const end = grid[index];

            const intNode = getIntermediateNode(start, end);

            if (!intNode || visited.has(intNode)) {
                calculate(
                    steps,
                    new Set([end, ...visited]),
                    availableIndexes.filter((i) => i !== index),
                    index
                );
            }
        }
    };

    const gridIndexes = grid.map((v, i) => i);

    grid.forEach((point, i) =>
        calculate(
            1,
            new Set([point]),
            gridIndexes.filter((ind) => i !== ind),
            i
        )
    );

    return res;
};
```