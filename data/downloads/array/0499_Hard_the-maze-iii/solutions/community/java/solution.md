# Java BFS solution with explaination

**Author:** hellcy
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/580474/](https://leetcode.com/problems/the-maze-iii/solutions/580474/)

---

```
class Solution {
    public String findShortestWay(int[][] maze, int[] ball, int[] hole) {
        /*
            BFS
            Similar to Maze 2
            1. visited 2D array store the shortest path so far from the start position to the current cell
            2. path 2D array store the directions of the shortest path so far from the start position to the current cell
            3. hashmap to store all valid answers with their length
            4. find the smallest length and the smallest string(alphabatically) in the hashmap
            
            Note: 
            We can't skip a cell after we visit it, we need to check the shortest path and the direction string of that cell, if we have a shorter path or a smaller string, we need to update it.
        */
        if (maze == null || maze.length == 0) return "";
        
        int row = maze.length, column = maze[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int[][] visited = new int[row][column];
        String[][] path = new String[row][column];
        
        for (int i = 0; i < row; ++i) {
            Arrays.fill(visited[i], -1);
            Arrays.fill(path[i], "");
        }
        
        queue.add(new int[] {ball[0], ball[1], 0});
        visited[ball[0]][ball[1]] = 0;
        
        int[] directionx = {-1,0,1,0};
        int[] directiony = {0,1,0,-1};
        String[] direction = {"u","r","d","l"};
        
        Map<String, Integer> map = new HashMap<>();
        
        while (!queue.isEmpty()) {
            int[] coors = queue.poll();
            
            for (int i = 0; i < 4; ++i) {
                int coorx = coors[0] + directionx[i];
                int coory = coors[1] + directiony[i];
                int distance = coors[2] + 1;
                
                while (check(coorx, coory, maze)) {
                    if (coorx == hole[0] && coory == hole[1]) {
                        map.put(path[coors[0]][coors[1]] + direction[i], distance);
                    }
                    coorx += directionx[i];
                    coory += directiony[i];
                    distance++;
                }
                
                coorx -= directionx[i];
                coory -= directiony[i];
                distance--;
                
                if (visited[coorx][coory] != -1) {
                    if (distance < visited[coorx][coory]) visited[coorx][coory] = distance;
                    if (distance == visited[coorx][coory] && path[coorx][coory].compareTo(path[coors[0]][coors[1]] + direction[i]) > 0) path[coorx][coory] = path[coors[0]][coors[1]] + direction[i];
                    else continue;
                }
                
                queue.add(new int[] {coorx, coory, distance});
                visited[coorx][coory] = distance;
                path[coorx][coory] = path[coors[0]][coors[1]] + direction[i];
            }
        }
        //System.out.println(map);
        if (map.size() == 0) return "impossible";
        int min = Integer.MAX_VALUE;
        String ans = "";
        for (String str : map.keySet()) {
            if (map.get(str) < min) {
                min = map.get(str);
                ans = str;
            }
            else if (map.get(str) == min) {
                if (str.compareTo(ans) < 0) {
                    ans = str;
                }
            }
        }

        return ans;
    }
    
    private boolean check(int x, int y, int[][] maze) {
        int row = maze.length, column = maze[0].length;
        if (x < 0 || y < 0 || x >= row || y >= column || maze[x][y] == 1) return false;
        return true;
    }
}
```