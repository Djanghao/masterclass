# Typescript clean BFS solution without input mutation

**Author:** alexgavrilov
**Votes:** 3
**Link:** [https://leetcode.com/problems/01-matrix/solutions/3747288/](https://leetcode.com/problems/01-matrix/solutions/3747288/)

---

# Complexity
- Time complexity:
O(m * n)

- Space complexity:
O(m * n)

# Code
```
function updateMatrix(mat: number[][]): number[][] {
    const m: number = mat.length;
    const n: number = mat[0].length;

    const updatedMatrix: typeof mat = Array.from(new Array(m), () => new Array(n));

    const isValidCell = (m: number, n: number, x: number, y: number): boolean => {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    const directions: [number, number][] = [
        [1, 0],  //right
        [0, 1],  //bottom
        [-1, 0], //left
        [0, -1]  //top
    ];

    const queue: [[number, number], number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                updatedMatrix[i][j] = 0;
                queue.push([[i, j], 0]);
            } else {
                updatedMatrix[i][j] = -1;
            }
        }
    }

    while (queue.length > 0) {
        const [[x, y], steps] = queue.shift();
        for (const [shiftX, shiftY] of directions) {
            const nextX: number = x + shiftX;
            const nextY: number = y + shiftY;

            if (isValidCell(m, n, nextX, nextY) && updatedMatrix[nextX][nextY] == -1) {
                updatedMatrix[nextX][nextY] = steps + 1;
                queue.push([[nextX, nextY], steps + 1]);
            }
        }
    }

    return updatedMatrix;  
};
```