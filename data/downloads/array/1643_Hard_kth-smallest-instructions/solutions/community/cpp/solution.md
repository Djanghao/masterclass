# c++ || No Math

**Author:** shahid_92
**Votes:** 10
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/1400653/](https://leetcode.com/problems/kth-smallest-instructions/solutions/1400653/)

---

```
//idea
  we calculate the no of ways of reaching the dest from each point in
  advance , how?
  let goal (n,m)  let put distance in dp[][] matrix;
  obviuosly dp[n][m] = 0; 
  other base cases if(i == n || j == m) means we can't move down / we can't move right
  so ,dp[i][j] = 1; for all these , i.e; there is only one way to reach goal.
  o.w. if we are at i ,j we have dp[i][j] = dp[i+1][j] + dp[i][j+1] ways
  
  that's precomputation done , now we can move according to following:-
  1) if our k < total horizontal move we will moving this way
  2) if not , then we need to move verticaly down and also need to update k as k = k- horzizontal ways
```

```
 string kthSmallestPath(vector<int>& dest, int k) {
        int n = dest[0]+1 , m = dest[1]+1;
        int dp[n][m];
        dp[n-1][m-1] = 0;
        
        for(int i=n-2;i>=0;i--) dp[i][m-1] = 1;
        for(int i=m-2;i>=0;i--) dp[n-1][i] = 1;
        
        for(int i=n-2;i>=0;i--)
        {
            for(int j=m-2;j>=0;j--)
            {
                dp[i][j] = dp[i+1][j] + dp[i][j+1];
            }
        }
        
        string ans;
        int i = 0, j =0;
        while(i<n && j < m)
        {
             if(i+1 == n && j+1 == m) break;
                
                if(i+1 == n)
                {
                    ans += 'H';
                    j++;
                }
                else if(j+1 == m)
                {
                    ans += 'V';
                    i++;
                }
                else
                {
                    if(k <= dp[i][j+1])
                    {
                        ans += 'H';
                        j++;
                    }
                    else
                    {
                        ans += 'V';
                        k -= dp[i][j+1];
                        i++;
                    }
                }
        }
       
        return ans;
    }
```