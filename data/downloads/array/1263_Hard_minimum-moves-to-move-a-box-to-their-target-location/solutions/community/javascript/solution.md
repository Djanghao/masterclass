# Javascript solution

**Author:** nehamalvia
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/4468151/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/4468151/)

---

# Intuition
Please refer from here: 
https://youtu.be/2RDQVW7RspM?si=mBNhIcSwaMsHNbju


# Code
```
/**
 * @param {character[][]} grid
 * @return {number}
 */
class Position {
    constructor(box, me) {
        this.box = box;
        this.me = me;
    }

    equals(other) {
        return this.box[0] === other.box[0] &&
               this.box[1] === other.box[1] &&
               this.me[0] === other.me[0] &&
               this.me[1] === other.me[1];
    }

    hashCode() {
        return this.box[0] * 100000000 + this.box[1] * 10000 + this.me[0] * 100 + this.me[1];
    }
}

const d_row = [-1, 1, 0, 0];
const d_col = [0, 0, -1, 1];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function(grid) {
    const H = grid.length;
    const W = grid[0].length;

    const available = (row, col) => {
        return 0 <= row && row < H && 0 <= col && col < W && grid[row][col] !== '#';
    };

    const startBox = [0, 0];
    const startMe = [0, 0];
    const target = [0, 0];

    for (let row = 0; row < H; ++row) {
        for (let col = 0; col < W; ++col) {
            if (grid[row][col] === 'B') {
                startBox[0] = row;
                startBox[1] = col;
            }
            if (grid[row][col] === 'S') {
                startMe[0] = row;
                startMe[1] = col;
            }
            if (grid[row][col] === 'T') {
                target[0] = row;
                target[1] = col;
            }
        }
    }

    const start = new Position(startBox, startMe);
    const pq = [{ state: start, dist: 0 }];

    const processed = new Set();
    const dist = new Map();
    dist.set(start.hashCode(), 0);

    while (pq.length > 0) {
        pq.sort((a, b) => a.dist - b.dist);
        const { state, dist: curDist } = pq.shift();

        if (state.box[0] === target[0] && state.box[1] === target[1]) {
            return curDist;
        }

        if (processed.has(state.hashCode())) {
            continue;
        }

        processed.add(state.hashCode());

        for (let dir = 0; dir < 4; ++dir) {
            const newRow = state.me[0] + d_row[dir];
            const newCol = state.me[1] + d_col[dir];

            if (available(newRow, newCol)) {
                const newBox = state.box.slice();
                const newMe = [newRow, newCol];
                let L = 0;

                if (newMe[0] === newBox[0] && newMe[1] === newBox[1]) {
                    L++; // I'm pushing a box
                    newBox[0] += d_row[dir];
                    newBox[1] += d_col[dir];

                    if (!available(newBox[0], newBox[1])) {
                        continue;
                    }
                }

                const newState = new Position(newBox, newMe);
                const dist2 = dist.get(state.hashCode()) + L;

                if (!dist.has(newState.hashCode()) || dist.get(newState.hashCode()) > dist2) {
                    dist.set(newState.hashCode(), dist2);
                    pq.push({ state: newState, dist: dist2 });
                }
            }
        }
    }

    return -1;
};

```