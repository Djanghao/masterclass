# Java solution with explanation and time complexity analysis

**Author:** shuoshankou
**Votes:** 323
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/76891/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/76891/)

---

Inspired by previous solution.
The main idea is the following:

Traverse the matrix. For each building, use BFS to compute the shortest distance from each '0' to
 this building. After we do this for all the buildings, we can get the sum of shortest distance
 from every '0' to all reachable buildings. This value is stored
 in 'distance[][]'. For example, if grid[2][2] == 0, distance[2][2] is the sum of shortest distance from this block to all reachable buildings.
Time complexity: O(number of 1)*O(number of 0) ~ O(m^2*n^2)
    
We also count how many building each '0' can be reached. It is stored in reach[][]. This can be done during the BFS. We also need to count how many total buildings are there in the matrix, which is stored in 'buildingNum'.

Finally, we can traverse the distance[][] matrix to get the point having shortest distance to all buildings. O(m*n)
    
The total time complexity will be O(m^2*n^2), which is quite high!. Please let me know if I did the analysis wrong or you have better solution.


    public class Solution {
        public int shortestDistance(int[][] grid) {
            if (grid == null || grid[0].length == 0) return 0;
            final int[] shift = new int[] {0, 1, 0, -1, 0};
            
            int row  = grid.length, col = grid[0].length;
            int[][] distance = new int[row][col];
            int[][] reach = new int[row][col];
            int buildingNum = 0;
            
            for (int i = 0; i < row; i++) {
                for (int j =0; j < col; j++) {
                    if (grid[i][j] == 1) {
                        buildingNum++;
                        Queue<int[]> myQueue = new LinkedList<int[]>();
                        myQueue.offer(new int[] {i,j});
    
                        boolean[][] isVisited = new boolean[row][col];
                        int level = 1;
                        
                        while (!myQueue.isEmpty()) {
                            int qSize = myQueue.size();
                            for (int q = 0; q < qSize; q++) {
                                int[] curr = myQueue.poll();
                                
                                for (int k = 0; k < 4; k++) {
                                    int nextRow = curr[0] + shift[k];
                                    int nextCol = curr[1] + shift[k + 1];
                                    
                                    if (nextRow >= 0 && nextRow < row && nextCol >= 0 && nextCol < col
                                        && grid[nextRow][nextCol] == 0 && !isVisited[nextRow][nextCol]) {
                                            //The shortest distance from [nextRow][nextCol] to thic building
                                            // is 'level'.
                                            distance[nextRow][nextCol] += level;
                                            reach[nextRow][nextCol]++;
                                            
                                            isVisited[nextRow][nextCol] = true;
                                            myQueue.offer(new int[] {nextRow, nextCol});
                                        }
                                }
                            }
                            level++;
                        }
                    }
                }
            }
            
            int shortest = Integer.MAX_VALUE;
            for (int i = 0; i < row; i++) {
                for (int j = 0; j < col; j++) {
                    if (grid[i][j] == 0 && reach[i][j] == buildingNum) {
                        shortest = Math.min(shortest, distance[i][j]);
                    }
                }
            }
            
            return shortest == Integer.MAX_VALUE ? -1 : shortest;
            
            
        }
    }