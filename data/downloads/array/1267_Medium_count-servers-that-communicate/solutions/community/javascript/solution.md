# Javascript Simple Solution Beats 100%

**Author:** kanhaiya-mishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/4790254/](https://leetcode.com/problems/count-servers-that-communicate/solutions/4790254/)

---

# Intuition
A server can communicate with other server if there is any other server in the same row or column. If we can figure out a way to know the number of servers in a row and column, we will know if this server can communicate.

# Approach
We traverse the grid and when we encounter a server, save the server count on a particular row and column.
Now we traverse the grid again and when we encounter a server, we check if this whole row or column has another server in it.

# Complexity
- Time complexity:
$$O(n*m)$$

- Space complexity:
$$O(n+m)$$

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let serverCanCommunicate = 0;

    // Initialise server count for each row and column
    const serverInRow = [];
    const serverInCol = [];
    for(let row = 0; row < grid.length; row++) {
        serverInRow.push(0);
    }
    for(let col = 0; col < grid[0].length; col++) {
        serverInCol.push(0);
    }

    // Traverse grid to figure out server count in each row and column
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 1) {
                serverInRow[row] = ++serverInRow[row];
                serverInCol[col] = ++serverInCol[col];
            }
        }
    }

    // A server can communicate if there are more that 2 servers (including itself) in that row or column
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 1) {
                if(serverInRow[row] > 1 || serverInCol[col] > 1) {
                    serverCanCommunicate++;
                }
            }
        }
    }

    return serverCanCommunicate;
};
```