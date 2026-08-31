# Javascript\Typescript DFS solution

**Author:** panevskii
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/2755121/](https://leetcode.com/problems/construct-quad-tree/solutions/2755121/)

---

```
function construct(grid: number[][]): Node | null {
    const dfs = (row: number, col:number, size: number): Node | null => {
        if (size === 1) {
            return  new Node(grid[row][col] ? true : false, true)  
        }
        
        const mid = Math.floor(size / 2);  
    
        const topLeft = dfs(row, col, mid);
        const topRight = dfs(row, col + mid, mid);
        const bottomLeft = dfs(row + mid, col, mid);
        const bottomRight = dfs(row + mid, col + mid, mid);
        
        if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf) {
            if (topLeft.val && topRight.val && bottomLeft.val && bottomRight.val) {
                return new Node(true, true);
            }

            if (!topLeft.val && !topRight.val && !bottomLeft.val && !bottomRight.val) {
                return new Node(false, true);
            } 
        }

        return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }
    
    return dfs(0, 0, grid.length);
};
```