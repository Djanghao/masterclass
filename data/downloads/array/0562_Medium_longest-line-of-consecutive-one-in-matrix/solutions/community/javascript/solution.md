# DFS Javascript

**Author:** christopherrowley
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2624770/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2624770/)

---

Consider it a more optimized brute force solution. If we are traversing through the entire matrix board, then we can assume the longest chain will start from the top left of the chain. This means we can drop two of the search directions (up and left).
```
var longestLine = function(mat) {
        
    let longest = 0;
    
    // if we assume top left, only look right down and diag
    let dir = {'diagR': [1,1], 'right': [1,0], 'down': [0,1],'diagL': [1,-1], };
    let rows = mat.length;
    let cols = mat[0].length;
        
    function dfs(i,j, direction, counter) {
        let nx = i + dir[direction][0];  
        let ny = j + dir[direction][1];
                
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols){
            if (mat[nx][ny] === 1) {
                counter++;
                dfs(nx,ny, direction, counter)
                return;
            } else{ // = 0
                longest = Math.max( longest, counter);
                return;
            }
        } else {
            longest = Math.max( longest, counter);
            return;
        }
    }
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            // search each direction, start the counter with 1
            if (mat[i][j] === 1){
                dfs(i,j, 'diagR',1);
                dfs(i,j, 'down',1);
                dfs(i,j, 'right',1);
                dfs(i,j, 'diagL',1);
            }
        }
    }
    return longest;
};
```