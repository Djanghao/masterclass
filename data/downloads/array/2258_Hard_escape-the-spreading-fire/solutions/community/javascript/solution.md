# 2 BFS + binary search

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/3161988/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/3161988/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N*M*Log(N*M))

- Space complexity:
O(N*M)

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
const marker = -1000000003
let moves = [[0, 1], [1, 0], [-1, 0], [0, -1]]
var maximumMinutes = function(grid) {
    let lastGrassAffectedByFireMin = spreadFireBfs(grid);
    markUnreachedCells(grid);
    let maxMin = Math.min(lastGrassAffectedByFireMin, getLastMin(grid, 0, 0))

    if(grid[0][0] === marker && findPath(grid, 1000000000) !== -1){
        return 1000000000;
    }
    let res = -1
    let start = 0;
    let end = maxMin;
    let mid = -1
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        res = findPath(grid, mid);
        if(res == -1){
            end = mid -1
        } else {
            start = mid + 1
        }
    }
    if(res == -1){
        if(mid == -1){
            return -1
        }
        return mid -1;
    }
    return mid;
};

function findPath(grid, startMin){
    let n = grid.length;
    let m = grid[0].length;
    let currentMin = startMin;
    let set = new Set();
    
    if (getLastMin(grid, 0, 0) < startMin) {
        return -1
    }

    let queue = [[0, 0]]

    while (queue.length){
        let nextQueue = []
        for(let c of queue){
            if(c[0] === n-1 && c[1] === m-1){
                return startMin;
            }
            let key = `${c[0]}_${c[1]}`;
            let lastMin = getLastMin(grid, c[0], c[1]);
            if (!set.has(key) && (lastMin > currentMin || grid[c[0]][c[1]] === marker)) {
                set.add(key);
                for(let move of moves){
                    let nmi = move[0] + c[0];
                    let nmj = move[1] + c[1];
                    if(nmi >= 0 && nmi < n && nmj >= 0 && nmj < m && grid[nmi][nmj] !== 2 && (getLastMin(grid, nmi, nmj) > currentMin || grid[nmi][nmj] === marker)){
                        nextQueue.push([nmi, nmj]);
                    }
                }
            }
        }
        queue = nextQueue;
        currentMin++;
    }

    return -1
}

function getLastMin(grid, i, j){
    return -(grid[i][j] + 1)
}

function markUnreachedCells(grid){
    let n = grid.length;
    let m = grid[0].length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] == 0){
                grid[i][j] = marker;
            }
        }
    }
}

function spreadFireBfs(grid){
    let n = grid.length;
    let m = grid[0].length;
    let queue = collectStartPoints(grid);

    let minNumber = -1;
    while (queue.length) {
        let nextQueue = [];
        for(let i = 0; i < queue.length; i++){
            let c = queue[i];
            
            if(grid[c[0]][c[1]] === 0 || grid[c[0]][c[1]] === -1) {
                grid[c[0]][c[1]] = minNumber;
                for(let move of moves){
                    let nmi = move[0] + c[0];
                    let nmj = move[1] + c[1];
                    if(nmi >= 0 && nmi < n && nmj >= 0 && nmj < m && grid[nmi][nmj] === 0){
                        nextQueue.push([nmi, nmj]);
                    }
                }
            }
        }

        minNumber--;
        queue = nextQueue;
    }

    return -(minNumber + 2)
}

function collectStartPoints(grid) {
    let n = grid.length;
    let m = grid[0].length;

    const result = [];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] === 1){
                grid[i][j] = -1;
                result.push([i, j]);
            }
        }
    }

    return result;
}
```