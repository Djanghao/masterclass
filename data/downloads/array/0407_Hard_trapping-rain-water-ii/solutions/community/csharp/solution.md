# C# Solution || Fast Solution using Priority Queue

**Author:** mohamedAbdelety
**Votes:** 1
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/3397097/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/3397097/)

---


# Complexity
- Time complexity:
O(mn log(mn))
# Code
```

public class Solution {
    class Point{
        public int x;
        public int y;
        public int val;
        public Point(int _x,int _y,int _val){
            x = _x;
            y=_y;
            val = _val;
        }
    }
    public int TrapRainWater(int[][] heightMap) {
        int m = heightMap.Length, n = heightMap[0].Length;
        PriorityQueue<Point,int> pq = new(Comparer<int>.Create((a, b) => a.CompareTo(b)));
        // add boundry
        for(int r = 0; r < m;r++){
            pq.Enqueue(new Point(r,0,heightMap[r][0]),heightMap[r][0]);
            pq.Enqueue(new Point(r,n - 1,heightMap[r][n - 1]),heightMap[r][n - 1]);
            heightMap[r][n - 1] = -1;
            heightMap[r][0] = -1;
        }
        for(int c = 1; c < n - 1;c++){
            pq.Enqueue(new Point(0,c,heightMap[0][c]),heightMap[0][c]);
            pq.Enqueue(new Point(m - 1,c,heightMap[m - 1][c]),heightMap[m - 1][c]);
            heightMap[0][c] = -1;
            heightMap[m - 1][c] = -1;
        }

        Tuple<int,int>[] dir = new Tuple<int,int>[]
        {Tuple.Create(0,1), Tuple.Create(0,-1),Tuple.Create(1,0),Tuple.Create(-1,0)};
        int res = 0;
        while(pq.Count > 0){
            var boundary = pq.Dequeue();
            for(int i = 0;i < dir.Length;i++){
                int x = boundary.x + dir[i].Item1, y = boundary.y + dir[i].Item2;
                if(x < 0 || x >= m || y < 0 || y >= n || heightMap[x][y] == -1) continue;
                res+= Math.Max(0,boundary.val - heightMap[x][y]);
                Point newBoundary = new Point(x,y,Math.Max(   heightMap[x][y], boundary.val  ));
                pq.Enqueue(newBoundary,newBoundary.val);
                heightMap[x][y] = -1;
            }
        }

        return res;
    }
}
```