# O(N*M*LogM)

**Author:** 3S_AKB
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/3844818/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/3844818/)

---


# Code
```
public class Solution {
    public int LargestSubmatrix(int[][] matrix) {
        int Y = matrix.Length;    //rows count
        int X = matrix[0].Length; //columns count

        //transform matrix to (matrix[y][x] = count of 1s upper (<y))
        for (int x = 0; x < X; x++)        
            for (int y = 1; y < Y; y++)
                matrix[y][x] = matrix[y][x] == 0 ? 0 : matrix[y - 1][x] + 1;

        int res = 0;  
        for (int y = 0; y < Y; y++)
        {
            //get y-th row and sort it descending
            Array.Sort(matrix[y], (a, b) => b.CompareTo(a));            
            for (int x = 0; x < X; x++)
                res = Math.Max(res, (x + 1) * matrix[y][x]);
        }
        return res;
    }
}
```