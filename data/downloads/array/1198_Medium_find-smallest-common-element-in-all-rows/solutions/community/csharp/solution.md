# C# solution

**Author:** clewBy
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2765028/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2765028/)

---

```
public class Solution {
    public int SmallestCommonElement(int[][] mat) {        
        int[] stop = new int[mat.Length];
        Array.Fill(stop,-1);
        int min = mat[0][0], row = 0;
        while(true){
            int col = stop[row] == -1 ? 0 : stop[row];
            while(col < mat[0].Length && mat[row][col] < min) col++;
            if(col >= mat[0].Length) return -1;
            if(mat[row][col] > min) min = mat[row][col];
            if(stop[row] == col) return min;
            stop[row] = col;
            if(++row == mat.Length) row = 0;
        }
        return -1;
    }
}
```