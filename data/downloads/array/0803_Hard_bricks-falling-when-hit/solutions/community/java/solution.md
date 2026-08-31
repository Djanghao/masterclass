# [JAVA] Clean DFS Solution with explanation || 15ms || Reversely Adding Bricks

**Author:** aware_wolf
**Votes:** 2
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/1824820/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/1824820/)

---

The Brute force approach is to remove bricks and do a dfs for each column at row == 0 after each hit. This will TLE.

A clever approach would be to modify the grid into end state and restore the bricks instead of erasing them. This way we'll only have to do a dfs from that particular restored position.

To achieve this we would need to modify the grid with new states. Here's the states that i used.
```
Brick is not present -> 0
Brick is present and stable -> 2 (These are the stables bricks at any given state)
Brick is present and unstable -> 1 (These are the bricks that will be restored in the future)
Brick was present but has been removed after the hit -> -1 (These are the bricks that will act as the starting point for our restoration process)
```

***So after we have modified the grid our problem statement breaks down to how many bricks were restored before that hit***

Here are the steps followed in the code
Grid modification:
* Change the state of all the hit position that has brick to -1 (so that we know these are the starting points for our restoration process)
* Change the state of all the stable bricks to 2, do a dfs from each column at row == 0

Now for the fun part. This is the restoration process:
* For each restoration, check whether its stable
	* If its stable do a dfs from that position to mark all the reachable node and itself to state 2. Please note the ```markAndCountStableBricks``` func also returns the number of bricks restored.
	* Otherwise just change the state of this restored brick to 1


```
class Solution {
    int[][] dirs = new int[][]{{1,0},{-1,0},{0,1},{0,-1}};

    public int[] hitBricks(int[][] grid, int[][] hits) {
        //marking all the hits that has a brick with -1
        for(int i=0;i<hits.length;i++)
            if(grid[hits[i][0]][hits[i][1]] == 1)
                grid[hits[i][0]][hits[i][1]] = -1;
        
        //marking all the stable bricks
        for(int i=0;i<grid[0].length;i++)
            markAndCountStableBricks(grid, 0, i);
        
        int[] res = new int[hits.length];
        //looping over hits array backwards and restoring bricks
        for(int i=hits.length-1;i>=0;i--){
            int row = hits[i][0];
            int col = hits[i][1];
            
            //hit is at empty space so continue
            if(grid[row][col] == 0)
                continue;
            
            //marking it with 1, this signifies that a brick is present in an unstable state and will be restored in the future
            grid[row][col] = 1;
            // checking brick stability, if it's unstable no need to visit the neighbours
            if(!isStable(grid, row, col))
                continue;
			
			//So now as our brick is stable we can restore all the bricks connected to it
            //mark all the unstable bricks as stable and get the count
            res[i] = markAndCountStableBricks(grid, hits[i][0], hits[i][1])-1; //Subtracting 1 from the total count, as we don't wanna include the starting restored brick
        }
        
        return res;
    }
    
    private int markAndCountStableBricks(int[][] grid, int row, int col){
        if(grid[row][col] == 0 || grid[row][col] == -1)
            return 0;
        
        grid[row][col] = 2;
        int stableBricks = 1;
        for(int[] dir:dirs){
            int r = row+dir[0];
            int c = col+dir[1];
            
            if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length)
                continue;
            
            if(grid[r][c] == 0 || grid[r][c] == -1 || grid[r][c] == 2)
                continue;
            
            stableBricks += markAndCountStableBricks(grid, r, c);
        }
        
        return stableBricks;
    }
    
    private boolean isStable(int[][] grid, int row, int col){
        if(row == 0)
            return true;
        
        for(int[] dir:dirs){
            int r = row+dir[0];
            int c = col+dir[1];
            
            if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length)
                continue;
            
            if(grid[r][c] == 2)
                return true;
        }
        
        return false;
    }
}
```
For the second approach where we reversely add bricks, I had to come to discussion section.
I found this explanation wonderful: [Brick Restoration](https://leetcode.com/problems/bricks-falling-when-hit/discuss/450482/From-bad(general-intuition)-to-good(-reversely-adding-bricks))
My code is a slight modfication of this and written in java.