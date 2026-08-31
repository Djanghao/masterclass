# javascript solution 98% with comments and explanation feedback welcomed

**Author:** GalexyN
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1571329/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1571329/)

---

```
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
  
  // helper function to calculate area of rhombus
  const calculateRhombusArea = (r, c, s) => {
    let area = 0;
    
    for (let i = 0; i < s; i++) {
      area += grid[r++][c++];
    }
    for (let i = 0; i < s; i++) {
      area += grid[r++][c--];
    }
    for (let i = 0; i < s; i++) {
      area += grid[r--][c--];
    }
    for (let i = 0; i < s; i++) {
      area += grid[r--][c++];
    }
    
    return area;
  }
  
  // get the smallest dimension of the grid since that will be the max side length possible
  let maxSideLength = Math.min(grid.length, grid[0].length);
  
  // store all 0 sided rhombus' area since 0 sided is allowed (its just one cell)
  let maxArea = [];
  
  // run through all spaces in the grid and store the biggest ones
  // we only want the 3 greatest area's max 
  // so we sort descending after we add a new area 
  // and get rid of the smallest after we get above 3 areas
  
  for (let row of grid) {
    for (let el of row) {
      if (!maxArea.includes(el)) {
        maxArea.push(el);
        if (maxArea.length > 3) {
          maxArea.sort((a,b) => b -a);
          maxArea.pop();
        }
      }
    }
  }
  
  /*
  now we loop through all the cells in the grid as long as each spot is a valid upper point of the rhombus
  a valid upper point means that the designated side length will stay within the grids bounds
  eg for example one at grid[0][3] => 1 would not be a valid upper point if the side length is 2 because if we went diagonally right we would fall off the grid.1 -> 3 -> dne
  if we do end up finding a valid rhombus upper point then we calculate the area with that point as the starting point
  */
  
  for (let side = 1; side <= maxSideLength; side ++) {
    for (let row = 0; row < grid.length - (side * 2); row ++) {
      for (let col = side; col < grid[0].length - side; col ++) {
        let rhombusArea = calculateRhombusArea(row, col, side);
        /*
        now we check if these new areas are any bigger than the ones we already have if so we repeat the same steps
        */
        if (!maxArea.includes(rhombusArea)) {
          maxArea.push(rhombusArea);
          if (maxArea.length > 3) {
            maxArea.sort((a,b) => b - a);
            maxArea.pop();
          }
        }
      }
    }
  }
  // return the maxArea arr sorted descending
  return maxArea.sort((a,b) => b - a);
  
};
```