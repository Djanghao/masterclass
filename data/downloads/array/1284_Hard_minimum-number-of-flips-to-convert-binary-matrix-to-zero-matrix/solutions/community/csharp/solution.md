# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1873826/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1873826/)

---

```
public class Solution 
{
    public int MinFlips(int[][] mat) 
    {
        HashSet<string> visited = new();
        string matrixString = RepMatrixAsString(mat);
        
        Queue<(int[][] myMat, int flips)> qu = new();
        qu.Enqueue((mat,0));
        
        visited.Add(matrixString);
        
        while(qu.Count>0)
        {
            var cur = qu.Dequeue();
            
            if(IsZeroMatrix(cur.myMat))
                return cur.flips;
            
            for(int i=0; i<cur.myMat.Length; i++)
            {
                for(int j=0; j<cur.myMat[0].Length; j++)
                {
                    Flip(cur.myMat,i,j);
                    string matAsString = RepMatrixAsString(cur.myMat);
                    
                    if(visited.Contains(matAsString))
                    {
                        Flip(cur.myMat,i,j);
                        continue;
                    }
                    
                    visited.Add(matAsString);
                    qu.Enqueue((GetNewMatrix(cur.myMat),cur.flips+1));
                    Flip(cur.myMat,i,j);
                }
            }
        }
        
        return -1;
        
    }
    
    private int[][] GetNewMatrix(int[][] mat) => mat.Select(a => a.ToArray()).ToArray();
    
    private bool IsZeroMatrix(int[][] mat)
    {
        for(int i=0; i<mat.Length; i++)
        {
            for(int j=0; j<mat[0].Length; j++)
            {
                if(mat[i][j]==1)
                    return false;
            }
        }
        return true;
    }
    
    private string RepMatrixAsString(int[][] mat)
    {
        StringBuilder sb = new();
        
        for(int i=0; i<mat.Length; i++)
        {
            for(int j=0; j<mat[0].Length; j++)
            {
                sb.Append(Convert.ToString(mat[i][j]) + "-");
            }
        }
        
        return sb.ToString();
    }
    
    private void Flip(int[][] mat, int x, int y)
    {
        int[] xDir = {-1,1,0,0};
        int[] yDir = {0,0,-1,1};
        
        mat[x][y] = mat[x][y] == 0 ? 1 : 0;
        
        for(int i=0;i<4;i++)
        {
            int m = x + xDir[i];
            int n = y + yDir[i];
            
            if(m<0 || m>=mat.Length || n<0 || n>=mat[0].Length)
                continue;
            
            mat[m][n] = mat[m][n] == 0 ? 1 : 0;
        }
    }
}
```