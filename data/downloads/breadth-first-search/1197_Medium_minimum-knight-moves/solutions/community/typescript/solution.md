# Optimized BFS

**Author:** rojas
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/4235696/](https://leetcode.com/problems/minimum-knight-moves/solutions/4235696/)

---

# Code 1: BFS
- Time complexity: $O(\\max(|{x}|,|{y}|)^2$
- Space complexity: $O(\\max(|{x}|,|{y}|)^2$
```Typescript
const MOVES = [
            [2, -1],    [2, 1], 
    [1, -2],                    [1, 2],
                   //0,0
    [-1, -2],                   [-1, 2], 
            [-2, -1],   [-2, 1]
];

function minKnightMoves(x: number, y: number): number {
    const q: number[][] = [[0, 0]];
    const seen = new Set<string>();

    let steps = 0;
    do {
        const N = q.length;
        for (let i = 0; i < N; ++i) {
            const [r, c] = q[i];
            if (r === y && c === x) {
                return steps;
            }
            for (let [dr, dc] of MOVES) {
                const key = `${dr += r},${dc += c}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    q.push([dr, dc]);
                }
            }
        }
        ++steps;
        q.splice(0, N);
    } while (q.length > 0);
};
```

# Code 2: Bidirectional BFS
- Time complexity: $O(\\max(|{x}|,|{y}|)^2$
- Space complexity: $O(\\max(|{x}|,|{y}|)^2$
```Typescript
const MOVES = [
            [2, -1],    [2, 1], 
    [1, -2],                    [1, 2],
                   //0,0
    [-1, -2],                   [-1, 2], 
            [-2, -1],   [-2, 1]
];

function minKnightMoves(x: number, y: number): number {
    if (y === 0 && x === 0) {
        return 0;
    }

    const qs: number[][][] = [[[0, 0]], [[y, x]]];
    const seens = [new Set<string>(), new Set<string>()];
    const steps = [0, 0];

    for (let i = 0; qs[i].length > 0; i ^= 1) {
        const q = qs[i];
        const N = q.length;
        const seen = seens[i];
        for (let j = 0; j < N; ++j) {
            const [r, c] = q[j];
            const key = `${r},${c}`;
            if (seens[i ^ 1].has(key)) {
                return steps[0] + steps[1];
            }
            for (let [dr, dc] of MOVES) {
                const key = `${dr += r},${dc += c}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    q.push([dr, dc]);
                }
            }
        }
        ++steps[i];
        q.splice(0, N);
    }
};
```

# Code 3: BFS, Optimized Moves
- Time complexity: $O(\\max(|{x}|,|{y}|)^2$
- Space complexity: $O(\\max(|{x}|,|{y}|)^2$
```Typescript
const MOVES = [
    [[-2, -1], [-2, 1], [-1, -2], [1, -2]], // Down + Left
    [[-2, -1], [-2, 1], [-1, 2], [1, 2]], // Down + Right
    [[2, -1], [2, 1], [-1, -2], [1, -2]], // Up + Left
    [[2, -1], [2, 1], [-1, 2], [1, 2]] // Up + Right
];

function minKnightMoves(x: number, y: number): number {
    const q: number[][] = [[0, 0]];
    const seen = new Set<string>();

    let steps = 0;
    do {
        const N = q.length;
        for (let i = 0; i < N; ++i) {
            const [r, c] = q[i];
            if (r === y && c === x) {
                return steps;
            }
            for (let [dr, dc] of MOVES[+(r <= y)*2 + +(c <= x)]) {
                const key = `${dr += r},${dc += c}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    q.push([dr, dc]);
                }
            }
        }
        ++steps;
        q.splice(0, N);
    } while (q.length > 0);
};
```

# Code 4: BFS, Optimized
- Time complexity: $O(\\max(|{x}|,|{y}|)^2$
- Space complexity: $O(\\max(|{x}|,|{y}|)^2$
```Typescript
const MOVES = [
    [[-2, -1], [-2, 1], [-1, -2], [1, -2]], // Down + Left
    [[-2, -1], [-2, 1], [-1, 2], [1, 2]], // Down + Right
    [[2, -1], [2, 1], [-1, -2], [1, -2]], // Up + Left
    [[2, -1], [2, 1], [-1, 2], [1, 2]] // Up + Right
];

const MIN = -300; // Inclusive
const MAX = 300; // Inclusive
function minKnightMoves(x: number, y: number): number {
    const q: number[][] = [[0, 0]];
    const seen = new Set<number>();
    const RANGE = MAX - MIN;

    let steps = 0;
    do {
        const N = q.length;
        for (let i = 0; i < N; ++i) {
            const [r, c] = q[i];
            if (r === y && c === x) {
                return steps;
            }
            for (const [dr, dc] of MOVES[+(r <= y)*2 + +(c <= x)]) {
                const key = (r + dr - MIN)*RANGE + c + dc - MIN;
                if (!seen.has(key)) {
                    seen.add(key);
                    q.push([r + dr, c + dc]);
                }
            }
        }
        ++steps;
        q.splice(0, N);
    } while (q.length > 0);
};
```
