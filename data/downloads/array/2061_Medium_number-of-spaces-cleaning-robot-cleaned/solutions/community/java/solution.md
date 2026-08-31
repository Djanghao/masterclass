# Java solution (with explanation)

**Author:** RKxYiiyk2
**Votes:** 14
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/1575604/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/1575604/)

---

**Explanation** - We run a main loop to keep the robot going until certain criteria is met. We advance one step at a time. If we encounter boundary or a 1, we move back, turn right and continue. We maintain a 2D array ```visited``` to figure out if we need to end the simulation. 2D array stores the row, column and direction of the robot where it has already visited. To end the simulation, not only we need to be at an already visited cell but also facing the same direction as when we initially visited the cell. This is because in such a case the robot will enter in an infinite loop and we need to end the simulation. We denote directions by indices 1,2,3,4. Note that array for directions has a dummy direction at index 0. This is so that we don't need to loop through the ```visited``` array to initialize it to a non-zero value. Otherwise the dummy direction at index 0 is never used.
```
class Solution {
    
    private int m, n, r, c, d = 1;
    private int[][] dirs = new int[][] { {}, {0,1}, {1,0}, {0,-1}, {-1,0}  };
    
    public int numberOfCleanRooms(int[][] room) {
        this.m = room.length;
        this.n = room[0].length;
        int[][] visited = new int[m][n];
        
        int count = 0;
        while (true) {
            if (isOutOfBounds() || room[r][c] == 1) {
                turnRight();
                continue;
            }
            
            if (visited[r][c] == d) return count;

            if (visited[r][c] == 0) {
                visited[r][c] = d;
                count++;
            }
            
            r += dirs[d][0];
            c += dirs[d][1];
        }
    }
    
    private boolean isOutOfBounds() {
        return r < 0 || r == m || c < 0 || c == n;
    }

    private void turnRight() {
        r -= dirs[d][0];
        c -= dirs[d][1];
        d = (d % 4) + 1;        
    }
}
```