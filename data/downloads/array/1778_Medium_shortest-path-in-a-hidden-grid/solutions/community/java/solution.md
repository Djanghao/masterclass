# How is this problem tagged medium? This problem was super hard for me! :/

**Author:** Sid6994
**Votes:** 8
**Link:** [https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/1098927/](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/1098927/)

---

Note: I took hints from [this](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/discuss/1095348/Java-or-DFS%2BBFS-with-explanations) submission so please upvote it.

```
class Solution {
    int[][] directions;
    HashMap<Integer, Character> map;
    int[][] grid;
    Solution() {
        directions = new int[][] {{1,0}, {0,1} , {-1,0}, {0,-1}};
        map = new HashMap<>();
        map.put(0, 'R');
        map.put(1, 'U');
        map.put(2, 'L');
        map.put(3, 'D');
    }
    
    private static final int BLOCKED = -1;
    private static final int UNEXPLORED = 0;
    private static final int PATH = 1;
    private static final int TARGET = 2;
    private static final int START = 3;
    
    public int findShortestPath(GridMaster master) {
        int m = 501;
        grid = new int[2*m][2*m];
        int[] start = new int[] {m, m};
        grid[m][m] = START;
        
        int[] target = generateGrid(master, m, m);
        
        return target == null ? -1 : findDistance(grid, start, target);
    }
    
    private int findDistance(int[][] grid, int[] start, int[] target) {
        Queue<int[]> queue = new ArrayDeque();
        int distance = 1;
        queue.add(start);
        
        while(!queue.isEmpty()) {
            int size = queue.size();
            for (int j = 0; j < size; j++) {
                int[] currentPath = queue.remove();

                for(int i = 0; i < directions.length; i++) {
                    int dx = currentPath[0] + directions[i][0];
                    int dy = currentPath[1] + directions[i][1];
                    
                    if(grid[dx][dy] == TARGET) {
                        return distance;
                    } else if(grid[dx][dy] == PATH) {
                        grid[dx][dy] = BLOCKED;
                        queue.add(new int[] {dx, dy});
                    }
                }
            }
            
            distance++;
        }
        
        return distance;
    }
    
    private int[] generateGrid(GridMaster master, int x, int y) {
        if(master.isTarget()) {
            grid[x][y] = TARGET;
            return new int[] {x,y};
        }
        
        int[] res = null;
        
        for(int i = 0; i < directions.length; i++) {
            int dx = x + directions[i][0];
            int dy = y + directions[i][1];
            if(grid[dx][dy] == UNEXPLORED) {
                if(master.canMove(map.get(i))) {
                    master.move(map.get(i));
                    grid[dx][dy] = PATH;
                    int[] target = generateGrid(master, dx, dy); 
                    if(target != null) {
                        res = target;
                    }
                    master.move(map.get((i+2)%4));
                } else {
                    grid[dx][dy] = BLOCKED;
                }
            }
        }
        
        return res;
    }
        
}
```