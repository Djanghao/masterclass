# [Time & Memory 100%] Use projection to track illuminated cells

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/2108924/](https://leetcode.com/problems/grid-illumination/solutions/2108924/)

---

### Idea

The key to this problem is to keep track of illuminated cells. We can easily do this by tracking each illumination state of `O(n^2)` cells, but `n` is too big to do this.
Hence we track the states by managing the end points (_think of this as projecting a illumination path to a single point on a wall_) of each illumination path. 

For example, consider a 4x4 grid with a lamp at `(2, 2)`. `O` indicates the position of the lamp and 'X' indicates cells that are illuminated.
The vertical, horizontal and diagnoal iilumination paths from the lamp can be described by four coordinates V(ertical), H(orizontal), T(opLeft), and B(ottomLeft).
These four coordinates are the end points of each path and are on boundary cells.

```
[X] [_] [X] [_]
[_] [X] [X] [X]
[X] [X] [O] [X]
[_] [X] [X] [X]

[T] [_] [V] [_]
[_] [_] [_] [_]
[H] [_] [O] [_]
[_] [D] [_] [_]
```

We can see that a cell on `(y, x)` is illuminated by checking if one of the four conditions is met:
1) V == x
2) H == y
3) T == the most top left coordinate achievable by moving in the direction of `(-1, -1)` from `(y, x)`
4) B == the most bottom left coordinate achievable by moving in the direction of `(+1, -1)` from `(y, x)`

For example, if we check `(1, 1)`, it is illuminated because
1) V != x
2) H != y
3) T == `(0, 0)`
4) B != `(2, 0)`

whereas `(0, 3)` is not illuminated because
1) V != x
2) H != y
3) T != `(0, 3)`
4) B != `(3, 0)`

### Complexity

Time: `O(L+Q)`
Space: `O(L+Q)`

where `L = lamps.length` and `Q = queries.length`

```typescript
function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
    const hori = new Map<number, number>()
    const vert = new Map<number, number>()
    const topLeft = new Map<string, number>()
    const bottomLeft = new Map<string, number>()
    const lamp = new Map<string, number>()
    const ans = []
    
    function getTopLeft(y: number, x: number) {
        const d = Math.min(y, x)
        return `${Math.max(0, y-d)},${Math.max(0, x-d)}`
    }
    
    function getDownLeft(y: number, x: number) {
        const d = Math.min(n-1-y, x)
        return `${Math.min(n-1, y+d)},${Math.max(0, x-d)}`
    }
    
    for (const [y, x] of lamps) {
        hori.set(y, (hori.get(y) ?? 0) + 1)
        vert.set(x, (vert.get(x) ?? 0) + 1)
        topLeft.set(getTopLeft(y, x), (topLeft.get(getTopLeft(y, x)) ?? 0) + 1)
        bottomLeft.set(getDownLeft(y, x), (bottomLeft.get(getDownLeft(y, x)) ?? 0) + 1)
        lamp.set(`${y},${x}`, (lamp.get(`${y},${x}`) ?? 0) + 1)
    }
        
    for (const [y, x] of queries) {
        if (
            0 < vert.get(x) 
            || 0 < hori.get(y) 
            || 0 < topLeft.get(getTopLeft(y, x))
            || 0 < bottomLeft.get(getDownLeft(y, x))
        ) {
            ans.push(1)
        } else {
            ans.push(0)
        }
        for (let dy=-1; dy<=1; dy+=1) {
            for (let dx=-1; dx<=1; dx+=1) {
                const cnt = lamp.get(`${y+dy},${x+dx}`) ?? 0 
                if (0 < cnt) {
                    hori.set(y+dy, hori.get(y+dy) - cnt)                    
                    vert.set(x+dx, vert.get(x+dx) - cnt)
                    topLeft.set(getTopLeft(y+dy, x+dx), topLeft.get(getTopLeft(y+dy, x+dx)) - cnt)                    
                    bottomLeft.set(getDownLeft(y+dy, x+dx), bottomLeft.get(getDownLeft(y+dy, x+dx)) - cnt)
                    lamp.set(`${y+dy},${x+dx}`, 0)
                }
            }
        }
    }
        
    return ans
};
```