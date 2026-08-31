# [Time & Memory 100%] Turn right every time when right is unvisited

**Author:** jhw123
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/1736275/](https://leetcode.com/problems/spiral-matrix-iii/solutions/1736275/)

---

### Idea

The bottom line idea is to simulate a spiral path from `[rStart, cStart]` and to mark current coordinate `[y, x]` with numbers from `1` to `rows * cols` when the coordinate is within the matrix (`0 <= y && y < rows && 0 <= x && x < cols`).

In order to simulate the spiral path, we need to keep a single rule. Turn right 90 degs clockwise every time when the right of current coordinate is not visited before. Check the two cases below. In the first case when current coordinate is `[1, 2]`, its right `[2, 2]` has not been visited; we turn right at `[1, 2]`. In the second case when current coordinate is `[2, 1]`, its right `[1, 1]` is visited and we stick to current direction and move forward.

|-|-|-|
|---|---|---|
|-|1|->|
|-|-|-|

|-|-|-|
|---|---|---|
|-|1|2|
|-|<-|3|

### Complexity

Time: `O(n^2)`
Space: `O(n^2)`
where `n` is `max(rows, cols)`

```typescript
function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const visited = new Map<string, boolean>()
    const ans = []
    let dirX = 1
    let dirY = 0
    let y = rStart
    let x = cStart
    let cnt = 1
    while (cnt <= rows * cols) {
        visited.set(`${y},${x}`, true)
        if (0 <= y && y < rows && 0 <= x && x < cols) {
            ans.push([y, x])
            cnt += 1
        }
		y += dirY
        x += dirX
        if (visited.get(`${y+dirX},${x-dirY}`) !== true) {
            const tmp = dirY
            dirY = dirX
            dirX = -tmp
        }
    }
    
    return ans
};
```