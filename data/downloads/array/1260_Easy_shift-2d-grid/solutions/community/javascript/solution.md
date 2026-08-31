# Javascript ES6 simple solution

**Author:** leomacode
**Votes:** 37
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/734727/](https://leetcode.com/problems/shift-2d-grid/solutions/734727/)

---

Brief explanation: 
1. Convert the matrix to an array 
2. Move the array bottom to the start K times
3. Convert the array back to a matrix and return 

```
var shiftGrid = function (grid, k) {
  var arr = grid.flat(),
    len = grid[0].length,
    res = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    res.push(arr.splice(0, len));
  }

  return res;
};
```