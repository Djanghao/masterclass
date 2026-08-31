# Javascript BFS O(1) space no Visited array.

**Author:** ratiboi
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-maze/solutions/910260/](https://leetcode.com/problems/the-maze/solutions/910260/)

---

The idea here is to use the same maze to make if a position is visited or not by changing the 0 to -1 for visited locations.
```
var hasPath = function(maze, start, destination){
    let n = maze.length
    let m = maze[0].length
    let directions = [[1,0],[0,1],[-1,0],[0,-1]]
    
    let queue = [start]
    maze[start[0]][start[1]] = -1
    
    while(queue.length){
        let [row, col] = queue.shift()
        if(row == destination[0] && col == destination[1]) return true;
        
        for(let d of directions){
            let i = row+d[0], j = col+d[1]
            while(i>=0 && j>=0 && i<n && j<m && maze[i][j] != 1){
                i += d[0]
                j += d[1]
            }
            i -= d[0]
            j -= d[1]
            
            if(maze[i][j] != -1){
                maze[i][j] = -1
                queue.push([i,j])
            }
        }
    }
    return false;
};
```