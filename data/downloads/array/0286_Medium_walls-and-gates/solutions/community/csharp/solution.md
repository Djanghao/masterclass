# 100% Solution

**Author:** phumney89
**Votes:** 1
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/3063436/](https://leetcode.com/problems/walls-and-gates/solutions/3063436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Breadth First Search

# Approach
<!-- Describe your approach to solving the problem. -->
Find all the gates and add to the queue. Then do the bfs on the same. If the cell is not EMPTY i.e. Max Int Value, move on.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(mn) where m = rows, n = cols

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(mn) where m = rows, n = cols

# Code
```
public class Solution {
    static int EMPTY = Int32.MaxValue;
    public void WallsAndGates(int[][] rooms) {
        Queue<Point> q = new();
        
        for(int i = 0 ; i < rooms.Length; i++){
            for(int j = 0 ; j < rooms[0].Length; j++){
                if(rooms[i][j]==0){
                    q.Enqueue(new Point(i,j));
                }
            }
        }
        
        int[] dirX = {1, -1, 0, 0};
        int[] dirY = {0,  0,-1, 1};
        
        while(q.Count>0){
            int size = q.Count;
            
            Point p = q.Dequeue();
            
            for(int i = 0 ; i < 4 ; i++){
                int X = p.x + dirX[i];
                int Y = p.y + dirY[i];
                if(X<0||Y<0||X>=rooms.Length||Y>=rooms[0].Length||rooms[X][Y]!=EMPTY)
                    continue;
                
                rooms[X][Y] = rooms[p.x][p.y] + 1;
                q.Enqueue(new Point(X, Y));
                
            }
        }
    }
}
public class Point{
    public int x;
    public int y;
    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }
}
```