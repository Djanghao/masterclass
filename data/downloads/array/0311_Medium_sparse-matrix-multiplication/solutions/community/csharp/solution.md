# C# - Faster than 98%

**Author:** KunMan
**Votes:** 1
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/920951/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/920951/)

---

```
public class Solution {
    public int[][] Multiply(int[][] A, int[][] B) {
        
        List<int[]> result = new List<int[]>();
        if(A == null || B == null || A[0].Length != B.Length)
            return result.ToArray();
        
        foreach(var a in A)
        {
            int[] row = new int[B[0].Length];
            int start = 0;
            
            while(start < B[0].Length)
            {
                int num = 0;
                for(int i = 0; i < a.Length; i++)
                {
                    num += a[i]*B[i][start];
                }
                row[start] = num;
                start++;
            }
            result.Add(row);
        }
        
        return result.ToArray();
    }
}