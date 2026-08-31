# JS fast simple iterative solution

**Author:** crankyinmv
**Votes:** 12
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2764917/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2764917/)

---

Runtime74 ms
Beats
92.79%
Memory44.2 MB
Beats
87.18%

This approach simply follows the ball down from the top for each starting position tried, modifying the column as necessary.
### Complexity
- Time complexity: O(mn)
- Space complexity: O(1)

### Code
```
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) 
{
    const rows = grid.length, cols = grid[0].length;

    const getPosition = function(row, col)
    {
        if(grid[row][col] === 1)
        {
            if(col === cols-1 || grid[row][col+1] === -1)
                return -1;
            return col+1;
        }
        else
        {
            if(col === 0 || grid[row][col-1] === 1)
                return -1;
            return col-1;
        }
    };

    let result = [];
    for(let col=0; col<cols; col++)
    {
        let pos = col;
        for(let row=0; row<rows; row++)
        {
            pos = getPosition(row, pos);
            if(pos === -1)
                break;
        }
        result.push(pos);
    }
    
    return result;
};
```