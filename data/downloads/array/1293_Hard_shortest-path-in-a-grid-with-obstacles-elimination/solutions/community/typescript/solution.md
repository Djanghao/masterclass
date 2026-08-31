# Typescript BFS

**Author:** mcmar
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/1245970/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/1245970/)

---

Mostly straightforward BFS. Only modification is instead of using a `Set`, I use a `Map` and only add the next cell to my queue if my current `k` value is better than my previous best `k` value for that cell.
```
function shortestPath(grid: number[][], k: number): number {
    const m = grid.length;
    const n = m && grid[0].length;
    if (m === 1 && n === 1) return 0;
    const visited = new Map<number, number>();
    const q = new Queue();
    q.enqueue({row: 0, col: 0, k});
    visited.set(0, k);
    let steps = 1;
    while (!q.isEmpty()) {
        const len = q.size();
        for (let i = 0; i < len; i++) {
            const {row, col, k} = q.dequeue();
            for (const [rr, cc] of [[row+1,col],[row-1,col],[row,col+1],[row,col-1]]) {
                if (rr === m-1 && cc === n-1) {
                    return steps;
                }
                // if cell is in-bounds
                if (0 <= rr && rr < m && 0 <= cc && cc < n && (!grid[rr][cc] || k)) {
                    const nextK = grid[rr][cc] ? k - 1 : k;
                    const bestK = visited.has(rr * n + cc) ? visited.get(rr * n + cc) : -Infinity;
                    if (nextK > bestK) {
                        q.enqueue({row: rr, col: cc, k: nextK});
                        visited.set(rr * n + cc, nextK);
                    }
                }
            }
        }
        steps++;
    }
    return -1;
}
```