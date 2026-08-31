# Java - Easiest Solution [both approaches ]

**Author:** singhmohit9718
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/2583831/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/2583831/)

---

Hi Family,

I put the proper commen in the code Please have a look and if you liked the code Please upvote.


// Top To Bottom
```

class Solution {
    int dp[][];
    public int minScoreTriangulation(int[] values) {
        int n = values.length;
        dp = new int[n][n];
        for (int i=0;i<n;i++) Arrays.fill(dp[i],-1);
        // call the function with i = 1, j = n-1
        // because every time we have to take the ar[i-1] that's why we are starting from i = 1
        return helper_min_score(1,n-1,values);
    }
    
    private int helper_min_score(int i,int j,int values[]){
        if (i == j) return 0;
        
        if (dp[i][j] != -1) return dp[i][j];
        
        int mini = Integer.MAX_VALUE;
        // do partition
    
        for (int k=i;k<=j-1;k++){
            int steps = values[i-1] * values[k] * values[j]
                + helper_min_score(i,k,values)// partition 1
                + helper_min_score(k+1,j,values); // partition 2
            mini = Math.min(steps,mini);
        }
        
        return dp[i][j] = mini;
    }
}

```

**Bottom To Top**
```

public int minScoreTriangulation(int[] values) {
        
        int n = values.length;
        int dp[][] = new int[n][n];
        
        // no need to initialize the dp for base case. because all the values are already 0 in dp initially
        
        for (int i=n-1;i>=1;i--){
            for (int j=i+1;j<n;j++){
                int mini = Integer.MAX_VALUE;
                // for partition
                for (int k=i;k<=j-1;k++){
                    int steps = values[i-1] * values[k] * values[j] + dp[i][k] + dp[k+1][j];
                    mini = Math.min(mini,steps);
                }
                dp[i][j] = mini;
            }
        }
        return dp[1][n-1];
        
    }

```

Thanks!!!