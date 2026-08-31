# JavaScript Clean Solution

**Author:** abdultolba
**Votes:** 19
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/600228/](https://leetcode.com/problems/walls-and-gates/solutions/600228/)

---

Coming up with the intuition for this problem is quite simple. We know that given the 2D grid, we have to traverse through it somehow in order to mark the empty cells with their correct values. This gives us two options: *BFS* and *DFS*. 

Since a cell may be between two gates, we want to ensure we mark it with whichever path is shorter, so we need to utilize a **BFS**, such that at each gate, we move outward by no more than 1 cell (up, down, left, or right). This way, whichever traversal marks a cell first, must be the shortest!

```
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const EMPTY = 2147483647, GATE = 0;
const DIRS = [ [0, 1], [0, -1], [-1, 0], [1, 0] ];        // [\uD83D\uDC46, \uD83D\uDC47, \uD83D\uDC48, \uD83D\uDC49]

// Ensure that a cell is inbound as we traverse in all four directions
const inbound = (arr, i, j) => {
  return i >= 0 && j >= 0 && i < arr.length && j < arr[0].length;
}

var wallsAndGates = function(rooms) {
  if(!rooms || rooms.length === 0) return;
  
  const m = rooms.length, n = m && rooms[0].length;
  let queue = [];
  
  for(let row = 0; row < m; row++){
    for(let col = 0; col < n; col++){
	  // If a cell is a gate, add it to the queue so we can start searching from all gates.
      if(rooms[row][col] === GATE) queue.push([row, col]);
    }
  }
  
  while(queue.length){
    const [gateRow, gateCol] = queue.shift();
    
    for(let [dx, dy] of DIRS){
      let r = gateRow + dx, c = gateCol + dy;
      if(!inbound(rooms, r, c) || rooms[r][c] != EMPTY) continue;
      
	  // Increment the value of the current cell by 1, then 
	  // add it to the queue to search the next empty cells.
      rooms[r][c] = rooms[gateRow][gateCol] + 1;
      queue.push([r, c]);
    }
  }
};
```