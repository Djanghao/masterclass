# [Typescript] BFS

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/4146894/](https://leetcode.com/problems/the-maze-ii/solutions/4146894/)

---

# Code 1: BFS
- Time complexity: $O(NM*max(N,M))$
- Space complexity: $O(NM)$
```Typescript
function shortestDistance(maze: number[][], start: number[], dest: number[]): number {
    const Y = maze.length-1;
    const X = maze[0].length-1;

    const seen: number[][] = [];
    for (let y = 0; y <= Y; seen[y++] = new Array(X+1).fill(Infinity)) {}

    const q = [[start[0], start[1], 0]];
    do {
        const N = q.length;
        for (let i = 0; i < N; ++i) {
            const [y, x, distance] = q[i];
            if (seen[y][x] <= distance) {
                continue;
            }
            seen[y][x] = distance;
            if (y === dest[0] && x === dest[1]) {
                continue;
            }
            let z: number;
            for (z = y; z > 0 && maze[z-1][x] === 0; --z){}
            q.push([z, x, distance + y - z]);
            for (z = y; z < Y && maze[z+1][x] === 0; ++z){}
            q.push([z, x, distance + z - y]);
            for (z = x; z > 0 && maze[y][z-1] === 0; --z){}
            q.push([y, z, distance + x - z]);
            for (z =x; z < X && maze[y][z+1] === 0; ++z){}
            q.push([y, z, distance + z - x]);
        }
        q.splice(0, N);
    } while (q.length > 0);

    const distance = seen[dest[0]][dest[1]];
    return isFinite(distance) ? distance : -1;
};
```

# Code 2: Optimized BFS
- Time complexity: $O(NM)$
- Space complexity: $O(NM)$

```Typescript
function shortestDistance(maze: number[][], start: number[], dest: number[]): number {
    const Y = maze.length-1;
    const X = maze[0].length-1;

    const data: number[][][] = [];
    for (let y = 0; y <= Y; ++y) {
        data[y] = [];
        for (let x = 0; x <= X; ++x) {
            data[y][x] = [Infinity, y, y, x, x];
            data[y][x][3] = (x > 0 && maze[y][x-1] === 0) ? data[y][x-1][3] : x;
            data[y][x][1] = (y > 0 && maze[y-1][x] === 0) ? data[y-1][x][1] : y;
        }
    }
    for (let y = Y; y >= 0; --y) {
        for (let x = X; x >= 0; --x) {
            data[y][x][4] = (x < X && maze[y][x+1] === 0) ? data[y][x+1][4] : x;
            data[y][x][2] = (y < Y && maze[y+1][x] === 0) ? data[y+1][x][2] : y;
        }
    }

    const q = [[start[0], start[1], 0]];
    do {
        const N = q.length;
        for (let i = 0; i < N; ++i) {
            const [y, x, distance] = q[i];
            if (data[y][x][0] <= distance) {
                continue;
            }
            data[y][x][0] = distance;
            if (y === dest[0] && x === dest[1]) {
                continue;
            }
            let z = data[y][x][1];
            q.push([z, x, distance + y - z]);
            z = data[y][x][2];
            q.push([z, x, distance + z - y]);
            z = data[y][x][3];
            q.push([y, z, distance + x - z]);
            z = data[y][x][4];
            q.push([y, z, distance + z - x]);
        }
        q.splice(0, N);
    } while (q.length > 0);
    
    const distance = data[dest[0]][dest[1]][0];
    return isFinite(distance) ? distance : -1;
};
```