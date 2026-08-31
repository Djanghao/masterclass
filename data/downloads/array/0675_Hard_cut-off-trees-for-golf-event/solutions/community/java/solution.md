# Simple Java Solution using BFS with comments and explanation

**Author:** jayrt
**Votes:** 10
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/252424/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/252424/)

---

The idea is: 
1.  Create a list of int[] which contains ```x_coordinate, y_coordinate, and height of tree```
2.  Add all the trees which have height >1 to the list.
3.  Sort the given list based on their height, by using the Comparator class(or simply using Lambda expression from Java8)
4.  Then traverse through each tree by using a BFS
5.  In the BFS we are checking the distance needed to go to the tree from the current source coordinates(Since we have sorted the trees based on their height, our source coordinates will be different from the tree coordinates)
For eg: Our input is like this [[1,0,0],[1,0,0],[1,1,5]], then
i) We have only 1 entry to be traversed, which is ```{x,y,height} = {2,2,5}```
ii) Once we have sorted the input trees, we are going to apply BFS
iii) Our source coordinates are (0,0) and our tree coordinates are (2,2) and then using BFS we are going to find out the shortest distance needed to to go from source to destination. 


```
class Solution {
    int[][] dirs = new int[][]{{-1,0},{1,0},{0,-1},{0,1}};
    public int cutOffTree(List<List<Integer>> forest) {
        
        //create a list of int[] {x, y, Height}
        List<int[]> trees = new ArrayList<>();
        for (int i = 0; i < forest.size(); i++) {
            for (int j = 0; j < forest.get(0).size(); j++) {
                int height = forest.get(i).get(j);
                if (height > 1)
                    trees.add(new int[]{i, j, height});
            }
        }
        
        //Sort all the trees based on their height
        Collections.sort(trees, (a, b)->(a[2]-b[2]));
        
        //Run thru each test tree given to us
        int res = 0, x = 0, y = 0;
        for (int[] tree: trees) {
        //Do a BFS traversal from current location(x,y) to that tree location(tree[0], tree[1])
            int dist = bfs(forest, x, y, tree[0], tree[1]);
            if (dist < 0) 
                return -1;
            else
            {
                res = res + dist;
                x = tree[0];
                y = tree[1];
            }
        }
        return res;
    }
    
    private int bfs(List<List<Integer>> forest, int x, int y, int tx, int ty) 
    {
        //A typical BFS approach that we use
        int m = forest.size(), n = forest.get(0).size();
        Queue<int[]> queue = new LinkedList<>();
        boolean[][] visited = new boolean[m][n];
        
        //Add the current source coordinates to the queue and mark it as visited
        queue.add(new int[]{x, y});
        visited[x][y] = true;
        
        int dist = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
           
            for (int j = 0; j < size; j++) {
                int[] cur = queue.poll();
                
                 //If we have reached the tree at (tx,ty) through traversal then that means we can return the distance covered from (x,y) to (tx,ty)
                if (cur[0] == tx && cur[1] == ty) 
                    return dist;
                
                //Traverse in all 4 directions and then process it if it meets the conditions
                for (int i = 0; i < 4; i++) 
                {
                    int nx = cur[0]+dirs[i][0];
                    int ny = cur[1]+dirs[i][1];
                    
                    if (nx >= 0 && nx < m && ny >= 0 && ny < n && 
                        !visited[nx][ny] && forest.get(nx).get(ny) >= 1)
                    {
                      visited[nx][ny] = true;
                      queue.add(new int[]{nx, ny});
                   }
                }
            }
            dist++;
        }
        return -1;
    }
}
```