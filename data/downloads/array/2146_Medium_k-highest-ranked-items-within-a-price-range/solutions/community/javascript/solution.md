# bfs + sort javasript

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1709752/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1709752/)

---

// It is better use heap hear instead sort.

```
var highestRankedKItems = function(grid, pricing, start, k) {
    let allReacheableItems = []
    
    let n = grid.length
    let m = grid[0].length
    
    let queue = [start]
    let visited = getVisited(grid)
    
    let dist = 0
    while(queue.length){
        let newQ = []
        for(let i = 0; i < queue.length; i++){
            let c = queue[i]
            if(visited[c[0]][c[1]]){
                continue;
            }
            visited[c[0]][c[1]] = true
            let val = grid[c[0]][c[1]]
            if(val > 1 && isInRange(pricing, val)){
                allReacheableItems.push([c[0], c[1], val, dist])
            }

            const nextMoves = getNextMoves(grid, c)
            nextMoves.forEach(nm => {
                newQ.push(nm)
            })
        }
        dist++
        queue = newQ
    }
    allReacheableItems.sort((s1, s2) => {
        if(s1[3] !== s2[3]){
            return s1[3] - s2[3]
        }
        if(s1[2] !== s2[2]){
            return s1[2]- s2[2]
        }
        if(s1[0] !== s2[0]){
            return s1[0]-s2[0]
        }
        return s1[1]-s2[1]
    })
    allReacheableItems = allReacheableItems.map(i => [i[0], i[1]])
    
    

    
    if(allReacheableItems.length < k){
        return allReacheableItems
    }
    
    return allReacheableItems.slice(0, k)
};

function getVisited(grid){
    let n = grid.length
    let m = grid[0].length
    let visited = new Array(n)
    for(let i = 0; i < n; i++){
        visited[i] = new Array(m).fill(false)
    }
    
    return visited
}

function isInRange(pricing, value){
    return value <= pricing[1] && value >= pricing[0] 
}

const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]]

function getNextMoves(grid, c){
    let r = grid.length
    let col = grid[0].length
    
    return moves.map(m => [m[0] + c[0], m[1] + c[1]]).filter(m => {
        return m[0] < r && m[0] >= 0 && m[1] < col && m[1] >=0 && grid[m[0]][m[1]] !== 0
    })
}
```