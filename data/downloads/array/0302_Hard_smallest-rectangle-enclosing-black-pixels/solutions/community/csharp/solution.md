# [C#] BFS traversal of 2D array

**Author:** Sh0wM3Th3C0d3
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/2882132/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/2882132/)

---

# Intuition
Use BFS traversal of the input matrix to visit all cells marked with '1'; keep track of the minCol, maxCol, minRow, maxRow of the visited cells; and compute the axis aligned area after BFS is done.

# Approach
We start initializing minCol, maxCol, minRow, maxRow with the given (x,y) pair.

````
int maxCol = y, maxRow = x; 
int minCol = y, minRow = x;
````

We apply BFS, and mark visited cells with '2'. Note this is done twice in the code. Both are relevant. The second one in paricular, if ommited, will make the program run out memmory for some of the test cases.

When all is done, compute the area:

````
int area = (maxCol - minCol + 1)*(maxRow - minRow + 1);
````
# Complexity
- Time complexity:
O(M X N), M rows, N columns of input matrix. In the worst case, we'll need to visit all elements of the input matrix.
- Space complexity:
 O(1), we keep track of visited notes by updating the input matrix values. We use a queue, but it enqueues and dequeues periodically.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    static int[][] Dirs = new int[][]{new int[]{1,0},new int[]{0,1},
        new int[]{-1,0},new int[]{0,-1}};
    public int MinArea(char[][] image, int x, int y) {
        int maxCol = y, maxRow = x; 
        int minCol = y, minRow = x;

        int rows = image.Length;
        int cols = image[0].Length;

        Queue<(int,int)> q = new();
        q.Enqueue((x,y));

        while (q.Count > 0)
        {
            for (int levels = q.Count; levels>0; levels--)
            {
                var cur = q.Dequeue();
                image[cur.Item1][cur.Item2] = '2';
                foreach(var dir in Dirs)
                {
                    var newRow = cur.Item1 + dir[0];
                    var newCol = cur.Item2 + dir[1];
                    if (newRow > -1 && newCol > -1 && newRow < rows && 
                        newCol < cols && image[newRow][newCol] == '1')
                    {
                        image[newRow][newCol] = '2';
                        q.Enqueue((newRow,newCol));
                        minRow = Math.Min(minRow, newRow);
                        minCol = Math.Min(minCol, newCol);
                        maxRow = Math.Max(maxRow, newRow);
                        maxCol = Math.Max(maxCol, newCol);

                    }
                }
            }
        }

        int area = (maxCol - minCol + 1)*(maxRow - minRow + 1);
        return area;
    }
}
```