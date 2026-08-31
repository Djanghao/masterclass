# Javascript BFS

**Author:** zizoismail
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/1588599/](https://leetcode.com/problems/the-maze-iii/solutions/1588599/)

---

```
const rollToNextPosition = (m, row, col, maze, hole) => {
    let moves = {"l": [0, -1], 'r': [0, 1], 'u': [-1, 0], "d": [1, 0]}
    let move = moves[m]
    
    let distance = 0
    
    //check next move
    while (true) {
        let newRow = row + move[0]
        let newCol = col + move[1]
        
        if (newRow < 0 || newRow > maze.length-1) return {nr: row, nc: col, nd: distance}
        if (newCol < 0 || newCol > maze[0].length-1) return {nr: row, nc: col, nd: distance}
        
        if (maze[newRow][newCol] === 1) return {nr: row, nc: col, nd: distance}
        
        distance++
        
        row = newRow
        col = newCol
        
        if (row === hole[0] && col === hole[1]) return {nr: row, nc: col, nd: distance}
    }
}

var findShortestWay = function(maze, start, hole) {
    let queue = [{row: start[0], col: start[1], distance: 0, path: ''}]
    let seen = {}
    seen[`${start[0]}-${start[1]}`] = 0
    
    let minToHole = Infinity
    let paths = []
    
    while (queue.length) {   
        for (let i=queue.length-1; i>=0; i--) {
            let {row, col, distance, path} = queue.shift()
        
            for (let move of ['d', 'u', 'l', 'r']) {
                let {nr, nc, nd} = rollToNextPosition(move, row, col, maze, hole)
                if (nd === 0) continue
                
                nd += distance
        
                if (`${nr}-${nc}` in seen && seen[`${nr}-${nc}`] < nd) continue 
                          
                if (nr === hole[0] && nc === hole[1]) {
                    if (nd < minToHole) {
                        minToHole = nd
                        paths = [path+move]
                    } else if (nd === minToHole) {
                        paths.push(path+move)
                    }
                    
                    continue
                }
                
                seen[`${nr}-${nc}`] = nd
                
                queue.push({row: nr, col: nc, distance: nd, path: path+move})
            }
        }
    }
    
    return paths.length > 0 ? paths.sort()[0] : "impossible"
};
```