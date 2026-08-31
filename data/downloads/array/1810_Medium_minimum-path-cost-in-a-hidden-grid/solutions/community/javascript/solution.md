# JavaScript Solution - DFS + Dijkstra

**Author:** Deadication
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/1840953/](https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/solutions/1840953/)

---

```
var findShortestPath = function(master) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const EMPTY = -1;
    const BLOCKED = MAX;
    
    const dirs = {
        "U": { moves: [-1, 0], rev: "D" },
        "R": { moves: [0, 1], rev: "L" },
        "D": { moves: [1, 0], rev: "U" },
        "L": { moves: [0, -1], rev : "R" }
    };
    
    const grid = [];
    
    for (let i = 0; i <= 202; i++) {
        grid[i] = new Array(202).fill(EMPTY);
    }
    
    const target = dfs(100, 100, 0);
    
    if (target == null) return -1;

    const minHeap = new MinPriorityQueue({ priority: x => x[2] });
    
    minHeap.enqueue([100, 100, 0]);
    
    while (!minHeap.isEmpty()) {
        const [currRow, currCol, currCost] = minHeap.dequeue().element;
       
        if (currRow == target[0] && currCol == target[1]) return currCost;
        if (grid[currRow][currCol] == BLOCKED) continue;
        
        grid[currRow][currCol] = BLOCKED;
        
        for (const key in dirs) {
            const { moves } = dirs[key];

            const neiRow = currRow + moves[0];
            const neiCol = currCol + moves[1];

            const neiCost = grid[neiRow][neiCol];

            minHeap.enqueue([neiRow, neiCol, currCost + neiCost]);
        }
    }
     
    
    function dfs(currRow, currCol, cost) {
        grid[currRow][currCol] = cost;
        
        if (master.isTarget()) return [currRow, currCol];
        
        let target = null;
        
        for (const key in dirs) {
            const { moves, rev } = dirs[key];

            const neiRow = currRow + moves[0];
            const neiCol = currCol + moves[1];
            
            if (grid[neiRow][neiCol] == EMPTY && master.canMove(key)) {
                const neiCost = master.move(key);
                
                const res = dfs(neiRow, neiCol, neiCost);
                
                if (res != null) target = res;
                
                master.move(rev);
            }
            else if (!master.canMove(key)) {
                grid[neiRow][neiCol] = BLOCKED;
            }
        }
        
        return target;
    }
};
```