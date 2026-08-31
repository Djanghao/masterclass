# Java - Clean Dijkstra

**Author:** harin_mehta
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/840040/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/840040/)

---

```
class Solution {
    class Tuple {
        int row, col, cost;
        public Tuple(int r, int c, int co) {
            row = r;
            col = c;
            cost = co;
        }
    }
    public int minCost(int[][] grid) {
        int rows = grid.length, columns = grid[0].length;
        int targetRow = grid.length-1, targetColumn = grid[0].length-1;
        
        boolean[][] traversed = new boolean[rows][columns];
        PriorityQueue<Tuple> pq = new PriorityQueue<>((a, b)->(a.cost - b.cost));
        
        pq.add(new Tuple(0, 0, 0));
        
        while(!pq.isEmpty()) {
            Tuple top = pq.poll();
            int row = top.row, col = top.col;
            traversed[row][col] = true;
            if(row == targetRow && col == targetColumn) {
                return top.cost;
            }
			// traverse neighbors
            if(col + 1 != columns && !traversed[row][col+1]) 
                pq.add(new Tuple(row, col+1, (grid[row][col] == 1 ? 0 : 1) + top.cost ));
            
            if(col - 1 != -1 && !traversed[row][col-1]) 
                pq.add(new Tuple(row, col-1, (grid[row][col] == 2 ? 0 : 1) + top.cost ));
            
            if(row + 1 != rows && !traversed[row+1][col]) 
                pq.add(new Tuple(row+1, col, (grid[row][col] == 3 ? 0 : 1) + top.cost ));
				
            if(row - 1 != -1 && !traversed[row-1][col]) 
                pq.add(new Tuple(row-1, col, (grid[row][col] == 4 ? 0 : 1) + top.cost ));
            
        }
        return 0;
    }
}
```