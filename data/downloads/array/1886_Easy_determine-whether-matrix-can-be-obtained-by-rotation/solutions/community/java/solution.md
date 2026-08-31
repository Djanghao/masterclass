# Java 100% fast ✅ | No rotation ✅| only indexing ✅

**Author:** ZenkaiX
**Votes:** 69
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/3273931/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/3273931/)

---

# Intuition
We only need to match indexes

# Approach
```
               if(b[i][j]==a[n-j-1][i])
                    c90++;
                if(b[i][j]==a[n-i-1][n-j-1])
                    c180++;
                if(b[i][j]==a[j][n-i-1])
                    c270++;
                if(b[i][j]==a[i][j])
                    c0++;
```

# Complexity
- Time complexity:
O(n*n)

- Space complexity:
O(1)

# Code
```
class Solution {
    public boolean findRotation(int[][] a, int[][] b) {
       

         int n=a.length;
      int c90=0,c180=0,c270=0,c0=0;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(b[i][j]==a[n-j-1][i])
                    c90++;
                if(b[i][j]==a[n-i-1][n-j-1])
                    c180++;
                if(b[i][j]==a[j][n-i-1])
                    c270++;
                if(b[i][j]==a[i][j])
                    c0++;
            }
        }
        
        if(c90==n*n||c270==n*n||c180==n*n||c0==n*n)
        return true;
        else return false;
        
    }
}




```

![55ttuz.jpg](./images/0.jpeg)
