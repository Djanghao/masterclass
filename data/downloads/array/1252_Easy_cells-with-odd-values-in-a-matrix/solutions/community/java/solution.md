# Simple Fast Java Solution (with explanation)

**Author:** vakulb
**Votes:** 151
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/431013/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/431013/)

---

Steps:
1) Count how many times each row and column is incremented using row and column array.
2) Add row and col value to get corresponding array element value.
3) If it's odd increment counter


```
class Solution {
    public int oddCells(int n, int m, int[][] indices) {
        int count = 0;
        int row[] = new int [n];
        int col[] = new int [m];
        for(int x[] : indices)
        {
            row[x[0]]++;
            col[x[1]]++;
        }    
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
            {
                if((row[i]+col[j])%2!=0)
                    count++;
            }        
        return count;
    }
}
```